const express = require('express');

const { CityController } = require('../../controllers');
const  { cityMiddlewares } = require('../../middlewares');
const router = express.Router();
//console.log("Middleware:", typeof airplaneMiddlewares.validateCreateRequest);
//console.log("Controller:", typeof AirplaneController.createAirplane);
// /api/v1/city post
router.post(
  '/',
  CityController.createCity,
  cityMiddlewares.validateCreateRequest
);
module.exports = router;
