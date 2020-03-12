/**
 * @fileoverview Main CLI that is executed by `../bin/fotoparadies.js`
 * @author Paul Borm
 */

'use strict';

const program = require('commander');
const { API_URL } = require('./constants');
const pkg = require('../package.json');
const chalk = require('chalk');

const isApiUrlSet = async () => {
  if (!API_URL || !API_URL.length || typeof API_URL !== 'string') {
    throw new Error(
      chalk.red('Please provide the API endpoint via environment variable'),
    );
  }
};

const cli = async () => {
  try {
    await isApiUrlSet();
    program
      .version(pkg.version)
      .command('status', 'get status')
      .parse(process.argv);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = cli;
