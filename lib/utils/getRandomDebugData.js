function getRandomDebugData(success, error) {
  return new Promise(resolve => {
    setTimeout(() => {
      Math.floor(Math.random() * 2) ? resolve(success) : resolve(error);
    }, 500);
  });
}

module.exports = getRandomDebugData;
