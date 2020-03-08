#!/usr/bin/env node

/**
 * @fileoverview Main CLI that is run via the fotoparadies command.
 * @author Paul Borm
 */

'use strict';

const program = require('commander');
const cli = require('../lib/cli');
const pkg = require('../package.json');

program
  .version(pkg.version)
  .requiredOption('-S, --shopNo <number>', 'add the shop number')
  .requiredOption('-O, --orderNo <number>', 'add the order number')
  .option('-d, --debug', 'output debugging')
  .parse(process.argv);

cli.execute(program);
