const mongoose=require("mongoose");

const postSchema=new mongoose.Schema({
    image:String,
    Caption:String //{} iss object m bhi multiple properties ek field k liye store kr skte h

});

const postModel=mongoose.model("post",postSchema); //mediator
//mediator  ka use nahi kiya gya h to database m abhi database bhi nahi show ho rha h 

module.exports=postModel;
