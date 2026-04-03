// server create yahi krte hai 
const express= require("express");
const authRoutes=require('./routes/auth.routes');
const cookieParser = require("cookie-parser");


const app=express();
app.use(express.json());
app.use(cookieParser());



//api --> created in r outesfolder


app.use("/api/auth", authRoutes );




module.exports=app;
