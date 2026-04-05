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


app.get("/notes", async (req,res)=>{

    const existingTitle = await noteModel.findOne({
        title:"demo_title_1"
    });

    res.status(200).json({
        message:"Note Found Successfully!!",
        title:existingTitle.title
    })

})



//no need
// app.delete("/notes/:id", async (req,res)=>{})
// app.patch("/notes/:id", async (req,res)=>{})





module.exports=app;