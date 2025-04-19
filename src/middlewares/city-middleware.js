const  {StatusCodes}=require('http-status-codes');
const{ErrorResponse}=require('../utils/common');
function validateCreateRequest(req,res,next) {
    if(!req.body.name) {
        ErrorResponse.message='something went wrong';
    
        ErrorResponse.error=new AppError(['city name not found'],StatusCodes.BAD_REQUEST);
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse);
    }
    next();
}
module.exports={
    validateCreateRequest
}