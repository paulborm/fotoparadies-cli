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
  const { shopNo, orderNo, subOrders = [] } = data;

  const createData = ({
    shopNo = null,
    orderNo = null,
    stateCode = null,
    stateDate = null,
    stateText = null,
    priceText = null,
  } = {}) => ({
    shopNo,
    orderNo,
    stateCode,
    stateDate,
    stateText,
    priceText,
  });

  const defaultData = { shopNo, orderNo };

  if (data.subOrders && data.subOrders.length) {
    return createData({ ...defaultData, ...subOrders[0] });
  }

  const {
    summaryStateCode,
    summaryDate,
    summaryStateText,
    summaryPriceText,
  } = data;

  return createData({
    ...defaultData,
    stateCode: summaryStateCode,
    stateDate: summaryDate,
    stateText: summaryStateText,
    priceText: summaryPriceText,
  });
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
