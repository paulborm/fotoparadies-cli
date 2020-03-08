/**
 * @fileoverview Main CLI that is run via the fotoparadies command.
 * @author Paul Borm
 */

'use strict';

require('dayjs/locale/de');
require('dotenv').config();
const dayjs = require('dayjs');
const axios = require('axios');

dayjs.locale('de');

const API_URL = process.env.FOTOPARADIES_API_URL || '';

const getOrderStatus = async (shop, order) => {
  const params = {
    config: 1320,
    shop,
    order,
  };
  try {
    const response = await axios.get(API_URL, { params });
    return response.data;
  } catch (error) {
    const { response } = error;
    throw new Error(response.statusText);
  }
};

const res = {
  resultDateTime: '2020-03-05T21:52:27+0100',
  summaryStateCode: 'DELIVERED',
  summaryDate: '2020-02-19',
  summaryStateText: 'Ihr Auftrag liegt zur Abholung bereit.',
  summaryPrice: 275,
  summaryPriceText: '2,75 €',
  currency: 'EUR',
  language: 'de_DE',
  customerNo: '534448',
  shopNo: '01511',
  orderNo: '622018',
  orderDate: '2020-02-14',
  deliveryType: 0,
  deliveryText:
    'dm-drogerie markt Filial-Nr. 1511\nEberhardstraße 35/37\n70173 Stuttgart',
  infoText: null,
  subOrders: [
    {
      orderNo: '622018',
      orderDate: '2020-02-14',
      stateCode: 'DELIVERED',
      stateDate: '2020-02-19',
      stateText: 'Ihr Auftrag liegt zur Abholung bereit.',
      price: 275,
      priceText: '2,75 €',
      infoText: null,
      promisedMinDeliveryDate: null,
      promisedMaxDeliveryDate: null,
      trackingProviderId: null,
      trackingProviderName: null,
      trackingNumber: null,
      trackingUrl: null,
      positions: [Array],
    },
  ],
};

const formatDate = str => dayjs(str).format('DD MMMM YYYY');

const cli = {
  async execute(args) {
    const { shopId, orderId } = args;
    const data = await getOrderStatus(shopId, orderId);
    // const data = res;
    console.log('-------------------------------------');
    console.log(data.summaryStateText);
    console.log('-------------------------------------');
    console.log('Status vom:', formatDate(data.summaryDate));
    console.log('Auftrag vom:', formatDate(data.orderDate));
    console.log('Preis:', data.summaryPriceText);
  },
};

module.exports = cli;
