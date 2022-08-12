
const express=require('express');

const { admincustmorecontrollar, adminordercontrollar } = require('../../controllars/admincontrollers');

 const adminRoute=express.Router();

 
 adminRoute.get('/admin',admincustmorecontrollar)
 adminRoute.get('/order',adminordercontrollar)

module.exports={adminRoute:adminRoute}