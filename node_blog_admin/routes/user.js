var express=require('express');
var router=express.Router();
var userContrller=require('../controllers/user');


//  登陆
router.post('/login',userContrller.login);

module.exports=router;