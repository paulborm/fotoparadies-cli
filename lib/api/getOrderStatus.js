const axios = require('axios');
const { API_URL } = require('../constants');

const getOrderStatus = async (shop, order) => {
  const params = {
    config: 1320,
    shop,
    order,
  };
  const response = await axios.get(API_URL, { params });
  return response.data;
};

module.exports = getOrderStatus;
