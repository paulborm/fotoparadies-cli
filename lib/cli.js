/**
 * @fileoverview Main CLI that is run via the fotoparadies command.
 * @author Paul Borm
 */

'use strict';

const cli = {
  execute(args) {
    console.log('fotoparadies cli');
    console.log('Hello World!');
    console.log('args', args);
  },
};

module.exports = cli;
