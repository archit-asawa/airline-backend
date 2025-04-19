const express = require('express');
const { airplaneMiddlewares } = require('../../middlewares');
const AirplaneController = require('../../controllers/airplane-controller');

const router = express.Router();
console.log("Middleware:", typeof airplaneMiddlewares.validateCreateRequest);
console.log("Controller:", typeof AirplaneController.createAirplane);

router.post(
  '/',
  airplaneMiddlewares.validateCreateRequest,
  AirplaneController.createAirplane
);
router.get('/',
  AirplaneController.getAirplanes
);
router.delete('/',
  AirplaneController.destroyAirplanes
);
module.exports = router;
