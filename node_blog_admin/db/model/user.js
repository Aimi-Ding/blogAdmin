var mongoose=require("../mongoose")
var userSchema=new mongoose.Schema({
    userName:{type:String,required:true},
    passWord:{type:String,required:true},
    createTime:{type:String,required:true},
    createdBy:{type:String,required:true},
    updateTime:{type:String,required:true},
    isDeleted:{type:Number,default:0}
})
var user=mongoose.model("user",userSchema);
module.exports=user;
