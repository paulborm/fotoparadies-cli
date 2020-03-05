#!/usr/bin/env node

/**
 * @fileoverview Main CLI that is run via the fotoparadies command.
 * @author Paul Borm
 */

'use strict';

const program = require('commander');
const cli = require('../lib/cli');

program
  .option('-S, --shopId <number>', 'Add the shop id')
  .option('-O, --orderId <number>', 'Add the order number');

program.parse(process.argv);

cli.execute(program);
