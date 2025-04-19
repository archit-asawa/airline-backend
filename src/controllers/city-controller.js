const { StatusCodes } = require('http-status-codes');
const { CityService } = require('../services');
const { ErrorResponse, SuccessResponse } = require('../utils/common');

async function createCity(req, res) {
  try {
    const city = await CityService.createCity({
        type: req.body.type
    });
    

    SuccessResponse.data = city;

    return res
      .status(StatusCodes.CREATED)
      .json(SuccessResponse);
  } catch (error) {
    console.error("City creation error:", error);

    ErrorResponse.error = error;

    return res
      .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
      .json(ErrorResponse);
  }
}

module.exports = {
  createCity,
};
