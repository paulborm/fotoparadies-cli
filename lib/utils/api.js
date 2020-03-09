const axios = require('axios');
const { API_URL } = require('../constants');

/**
 * Fetch the order status from api.
 * @param {string} shop
 * @param {string} order
 */
const fetchOrderStatus = async (shop, order) => {
  const params = {
    config: 1320,
    shop,
    order,
  };
  const response = await axios.get(API_URL, { params });
  return response.data;
};

/**
 * Transform the input data into a standardized format.
 * @param {object[]} data
 */
const transformApiData = data => {
  const { shopNo = null, orderNo = null, subOrders = [] } = data;

  if (data.subOrders && data.subOrders.length) {
    const {
      stateCode = null,
      stateDate = null,
      stateText = null,
      priceText = null,
    } = subOrders[0];

    return {
      shopNo,
      orderNo,
      stateCode,
      stateDate,
      stateText,
      priceText,
    };
  }

  const {
    summaryStateCode: stateCode = null,
    summaryDate: stateDate = null,
    summaryStateText: stateText = null,
    summaryPriceText: priceText = null,
  } = data;

  return {
    shopNo,
    orderNo,
    stateCode,
    stateDate,
    stateText,
    priceText,
  };
};

/**
 * Get the necessary data from order status.
 * @param {string} shop
 * @param {string} order
 */
const getOrderStatus = async (shop, order) => {
  const data = await fetchOrderStatus(shop, order);
  const transformedData = await transformApiData(data);
  return transformedData;
};

module.exports = {
  getOrderStatus,
};
