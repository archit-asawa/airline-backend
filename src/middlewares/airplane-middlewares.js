const  {StatusCodes}=require('http-status-codes');
function validateCreateRequest(req,res,next) {
    if(!req.body.modelnumber) {
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json({
            success: false,
            message: 'modelnumber is required',
            data: {},
            error: {}
        });
    }
    next();
}
module.exports={
    validateCreateRequest
}