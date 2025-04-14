const CrudRepository=require('./crud-repository');
const {plane}=require('../models'); 
class AirplaneRepository extends CrudRepository{
    constructor(){
        super(plane);
    }
}
module.exports=AirplaneRepository;
