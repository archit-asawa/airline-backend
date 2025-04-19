const city = require('../models/city');
const airplaneMiddlewares = require('./airplane-middlewares');

module.exports = {
  airplaneMiddlewares,
  cityMiddlewares: require('./city-middleware'),
};
