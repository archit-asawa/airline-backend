const  {StatusCodes}=require('http-status-codes');
const{ErrorResponse}=require('../utils/common');
function validateCreateRequest(req,res,next) {
    if(!req.body.modelnumber) {
        ErrorResponse.message='something went wrong';
    
        ErrorResponse.error=new AppError(['model number not found'],StatusCodes.BAD_REQUEST);
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse);
    }
    next();
}
module.exports={
    validateCreateRequest
}