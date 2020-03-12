/**
 * @fileoverview Sub-command that is executed by `../bin/fotoparadies-status.js`
 * @author Paul Borm
 */

'use strict';

const program = require('commander');
const dayjs = require('dayjs');
const ora = require('ora');
const chalk = require('chalk');
const { STATE_CODES, MESSAGES } = require('./constants');
const { getOrderStatus } = require('./utils/api');

require('dayjs/locale/de');

dayjs.locale('de');

program
  .requiredOption('-s, --shopNo <number>', 'add the shop number')
  .requiredOption('-o, --orderNo <number>', 'add your order number')
  .parse(process.argv);

const status = async () => {
  const { shopNo, orderNo } = program;

  const spinner = ora().start();

  try {
    const data = await getOrderStatus(shopNo, orderNo);

    spinner.stop();

    const {
      stateCode,
      stateText,
      stateDate,
      priceText,
      orderNo: resOrderNo,
      shopNo: resShopNo,
    } = data;

    switch (stateCode) {
      case STATE_CODES.PRODUCED:
      case STATE_CODES.SHIPPED:
      case STATE_CODES.DELIVERED:
        spinner.succeed(chalk.bold(stateText));
        console.log('');
        console.log(
          chalk.dim(`${MESSAGES.stateDate}:`),
          dayjs(stateDate).format('DD MMMM YYYY'),
        );
        console.log(chalk.dim(`${MESSAGES.orderNo}:`), resOrderNo);
        console.log(chalk.dim(`${MESSAGES.shopNo}:`), resShopNo);
        console.log(chalk.dim(`${MESSAGES.priceText}:`), priceText);
        break;
      case STATE_CODES.SUBMITTED:
      case STATE_CODES.PROCESSING:
        spinner.succeed(chalk.bold(stateText));
        console.log('');
        console.log(
          chalk.dim(`${MESSAGES.stateDate}:`),
          dayjs(stateDate).format('DD MMMM YYYY'),
        );
        console.log(chalk.dim(`${MESSAGES.orderNo}:`), resOrderNo);
        console.log(chalk.dim(`${MESSAGES.shopNo}:`), resShopNo);
        break;
      case STATE_CODES.CANCELED:
      case STATE_CODES.ERROR:
      default:
        spinner.fail(chalk.bold(stateText));
    }

    return data;
  } catch (error) {
    spinner.stop();

    console.error(error);

    process.exit(1);
  }
};

module.exports = status;
