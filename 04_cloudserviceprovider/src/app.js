// server  create krta h

const express= require('express');
const multer =require('multer');


const app=express();
app.use(express.json());

const upload= multer({storage:multer.memoryStorage()}); //memoryStorage() --> file ko memory me store krta h, diskStorage() --> file ko disk me store krta h


app.post("/create-post", upload.single('image'), async (req,res)=>{

    console.log(req.body);
    console.log(req.file); //req.file --> multer se aayega, file ke details ko store krta h req.file me


    res.status(201).json({
        message:"File Transmission Successful"
    })
})




module.exports=app;