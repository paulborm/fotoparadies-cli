/**
 * @fileoverview Main CLI that is run via the fotoparadies command.
 * @author Paul Borm
 */

'use strict';

require('dayjs/locale/de');
const dayjs = require('dayjs');
const ora = require('ora');
const chalk = require('chalk');
const { STATE_CODES } = require('./constants');
const { getOrderStatus } = require('./utils/api');

dayjs.locale('de');
const spinner = ora();

const cli = {
  async execute(args) {
    const { shopNo, orderNo, debug } = args;

    if (debug) {
      console.log(args.opts());
    }

    spinner.start();

    try {
      const data = await getOrderStatus(shopNo, orderNo);

      if (debug) {
        console.log(data);
      }

      const { stateCode, stateText, stateDate, priceText } = data;

      switch (stateCode) {
        case STATE_CODES.SUBMITTED:
        case STATE_CODES.PROCESSING:
        case STATE_CODES.PRODUCED:
        case STATE_CODES.SHIPPED:
        case STATE_CODES.DELIVERED:
          spinner.succeed(chalk.bold(stateText));
          console.log('');
          console.log(
            chalk.dim('Status vom:'),
            dayjs(stateDate).format('DD MMMM YYYY'),
          );
        case STATE_CODES.SUBMITTED:
        case STATE_CODES.PROCESSING:
        case STATE_CODES.PRODUCED:
        case STATE_CODES.SHIPPED:
        case STATE_CODES.DELIVERED:
          console.log(chalk.dim('Auftragsnummer:'), orderNo);
          console.log(chalk.dim('Filialnummer:'), shopNo);
        case STATE_CODES.PRODUCED:
        case STATE_CODES.SHIPPED:
        case STATE_CODES.DELIVERED:
          console.log(chalk.dim('Preis:'), priceText);
          break;
        case STATE_CODES.CANCELED:
          spinner.warn(chalk.bold(stateText));
          break;
        case STATE_CODES.ERROR:
        default:
          spinner.fail(chalk.bold(stateText));
      }
    } catch (error) {
      const { response } = error;
      const message = response
        ? `${chalk.yellow.bold(response.status)} ${chalk.bold(
            response.statusText,
          )}`
        : !process.env.FOTOPARADIES_API_URL
        ? 'Please specify the api url first'
        : 'Failed loading data';
      spinner.fail(message);

      if (debug) {
        console.log(error);
      }
    }
  },
};

module.exports = cli;
