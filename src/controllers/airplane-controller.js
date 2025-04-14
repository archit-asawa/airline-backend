const { StatusCodes } = require('http-status-codes'); // typo in module name
const { AirplaneService } = require('../services');

async function createAirplane(req, res) {
    try {
        const response = await AirplaneService.createAirplane({
            modelnumber: req.body.modelnumber,
            capacity: req.body.capacity
        });

        return res
            .status(StatusCodes.CREATED)
            .json({
                success: true,
                message: "started",
                data: response,
                error: {}
            });

    } catch (error) {
        return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR) // typo fixed
            .json({
                success: false,
                message: 'something went wrong',
                data: {}, // response is undefined here, use empty object
                error: error
            });
    }
}

module.exports = {
    createAirplane
};
