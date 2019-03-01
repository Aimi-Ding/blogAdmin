const path=require('path');
var logger=require('../config/log4js').logger;

class configs{
   Environment(option){
       this.option=option;
       if(this.option == 'prod'){
         return {
            mongodbURL:'mongodb://10.16.33.91/home',
         }
       }else if(this.option == 'sit'){
           return{
            mongodbURL:'mongodb://10.16.33.91/home',
           }
       }else{
           return {
            mongodbURL:'mongodb://localhost/aimiBlog',
           }
       }
   } ;
   SET_ENV(option){
    this.ENVIROMENT_INFO = this.Environment(option);
}
}

const _configs=new configs();
logger.info('当前环境为'+process.env.NODE_ENV);
_configs.SET_ENV(process.env.NODE_ENV);
module.exports=_configs