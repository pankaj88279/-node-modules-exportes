const express=require('express');
const { adminRoute } = require('./routes/admin/admin');
const app=express();
require('dotenv').config();


app.use(adminRoute);

let port=process.env.PORT || 4000

app.listen(port,()=>{
    console.log('this surver is port',port)
})