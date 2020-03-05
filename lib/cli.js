/**
 * @fileoverview Main CLI that is run via the fotoparadies command.
 * @author Paul Borm
 */

'use strict';

const cli = {
  execute(args) {
    const { storeId, orderId } = args;
    console.log('storeId:', storeId);
    console.log('orderId:', orderId);
  },
};

module.exports = cli;
