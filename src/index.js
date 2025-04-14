const express=require('express');
const {serverConfig}=require('./config');
const app=express();
const apiroutes=require('./routes');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api',apiroutes);

app.listen(serverConfig.PORT,()=>{
    console.log(`server started:${serverConfig.PORT}`);

})
