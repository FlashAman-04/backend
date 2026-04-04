const mongoose=require('mongoose');


const userSchema=new mongoose.Schema({
    // a bit more complex schema can be created with more properties and validations but for now,taking simplicity in mind we are keeping it basic
    username:{
        type:String,
        unique:true,
        required:true
    },
    email:String,
    password:String
});


const userModel=new mongoose.model("user",userSchema);

module.exports=userModel;