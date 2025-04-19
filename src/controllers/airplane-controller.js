const { StatusCodes } = require('http-status-codes'); // typo in module name
const { AirplaneService } = require('../services');
const{ErrorResponse,SuccessResponse}=require('../utils/common');
async function createAirplane(req, res) {
    try {
        const response = await AirplaneService.createAirplane({
            modelnumber: req.body.modelnumber,
            capacity: req.body.capacity
        });
        SuccessResponse.data=response;
        return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse);

    } catch (error) {
        ErrorResponse.error=error;
        return res
            .status(error.StatusCodes) // typo fixed
            .json(ErrorResponse);
    }
}
async function getAirplanes(req, res) {
    try {
        const airplanes = await AirplaneService.getAirplanes();
        SuccessResponse.data=airplanes;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error=error;
        return res
            .status(error.StatusCodes) // typo fixed
            .json(ErrorResponse);
    }
}
/*
Delete :/airplane/:id
req.body{}
*/
async function destroyAirplanes(req, res) {
    try {
        const airplanes = await AirplaneService.destroyAirplane(req.params.id);
        SuccessResponse.data=airplanes;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error=error;
        return res
            .status(error.StatusCodes) // typo fixed
            .json(ErrorResponse);
    }
}
module.exports = {
    createAirplane,
    getAirplanes,
    destroyAirplanes
};
