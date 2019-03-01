let userModel=require('../db/model/user');
let logger=require('../config/log4js').logger;
const config=require('../config/config').ENVIROMENT_INFO;
const userController={};

userController.login=(req,res,next)=>{
    "use strict";
    let data=req.body;
    return res.send({
        code:'SUCC001',
        message: '登陆成功',
        token:'abcdefghjkhhbhjsdbakjsdnjkla'
    });

}
module.exports = userController;