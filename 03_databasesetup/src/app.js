// server ko create krta hai 

const express = require('express');
const noteModel=require('./models/note.model');


const app=express();

app.use(express.json());



/*
post- data save 
get - data read 
patch - data update
delete - data delete

*/



app.post("/notes", async (req,res)=>{
    const {title, description}=req.body;

    // const data= req.body;
    //

    // await noteModel.create({
    //       title:title,
    //       description:description
    // })


    await noteModel.create({
        title, description
    });

    //try-catch use 


    res.status(201).json({
        message:"Note Created Successfully!!"
    });
    // console.log(title, description);
})




module.exports=app;