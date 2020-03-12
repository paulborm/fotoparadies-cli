require('dotenv').config();

const API_URL = process.env.FOTOPARADIES_API_URL || '';

const STATE_CODES = {
  SUBMITTED: 'SUBMITTED',
  PROCESSING: 'PROCESSING',
  PRODUCED: 'PRODUCED',
  SHIPPED: 'SHIPPED',
  DELIVERED: 'DELIVERED',
  CANCELED: 'CANCELED',
  ERROR: 'ERROR',
};

const MESSAGES = {
  stateDate: 'Status vom',
  priceText: 'Preis',
  orderNo: 'Auftragsnummer',
  shopNo: 'Filialnummer',
};

module.exports = {
  API_URL,
  STATE_CODES,
  MESSAGES,
};
