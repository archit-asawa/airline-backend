const { StatusCodes } = require('http-status-codes');
const{AirplaneRepository}=require('../repositories');
const airplaneRepository=new AirplaneRepository();
const AppError=require('../utils/errors/app-error');
async function createAirplane(data){
   try{
  const airplane=await airplaneRepository.create(data);
  return airplane;
   }catch(error){
    if(error.name=='SequelizeValidationError'){
        let explanation=[];
error.errors.foreach((err)=>{
    explanation.push(err.message);
});
console.log(explanation);
throw new AppError(explanation,StatusCodes.BAD_REQUEST);
    }
      throw new AppError('cannot create anew airplane ',StatusCodes.INTERNAL_SERVER_ERROR);
   }
}
async function getAirplanes(){
    try{
        const airplanes=await airplaneRepository.getAll();
        return airplanes;
    }catch(error){
        throw new AppError('cannot fetch airplanes',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
async function destroyAirplane(id) {
     try{
        const response=await airplaneRepository.destroy(id);
        if(!response){
            throw new AppError('cannot delete airplane',StatusCodes.INTERNAL_SERVER_ERROR);
        }
        return response;
     } catch(error){
        if(error.StatusCodes==StatusCodes.NOT_FOUND){
            throw new AppError('airplane not found',StatusCodes.NOT_FOUND);
        }
        throw new AppError('cannot delete airplane',StatusCodes.INTERNAL_SERVER_ERROR);
     }
}
module.exports={
    createAirplane,
    getAirplanes,
    destroyAirplane
}