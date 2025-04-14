const express=require('express')
const {InfoController}=require('./airplane-routes');
const  airplaneRoutes=require('./airplane-routes');
const router=express.Router();
router.use('/airplane',airplaneRoutes);
router.get('/info',(req,res)=>{
    return res.json({msg:"ok"});
})
module.exports=router;