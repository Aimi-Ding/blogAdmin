var mongoose =require("mongoose");
var ENVIROMENT_INFO=require('../config/config').ENVIROMENT_INFO;
var DB_URL=ENVIROMENT_INFO.mongodbURL;
var logger=require('../config/log4js').logger;

// 连接
mongoose.connect(DB_URL);

/**
 * 连接成功
 */
mongoose.connection.on('connected',function(){
    logger.info(`Mongoose connection open tp ${DB_URL}`);
})

/**
 * 连接异常
 */
mongoose.connection.on('error',function(err){
    logger.error(`Mongoose connection error : ${err}`);
})

/**
 *连接异常
 */
mongoose.connection.on('disconnected',function(){
    logger.info(`Mongoose connection disconnected`);
})


module.exports=mongoose;