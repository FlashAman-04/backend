//server create iss file m hota h 

const express = require("express");

const app = express();
app.use(express.json()) //middleware to parse the json data sent from postman or frontend


const notes = []


app.post("/notes", (req, res) => {


    // req.body me data aata h jo hm postman se bhejte h, postman se data bhejna mtlb frontend se test-data bhejna

    notes.push(req.body) //pushes the data in the array notes


    /* sends the status code and the message in postman for the success */


    res.status(201).json({
        message: "Note created successfully!",
        // notes:notes
    })
})



app.get("/notes", (req, res) => {
    res.status(200).json({
        message: "Current Notes in the App",
        notes: notes
    })
})



app.delete("/notes/:id", (req,res)=>{
    const index= req.params.id;
    delete notes[index];
    res.status(200).json({
        message:"Note deleted Successfully"
    })
})


app.patch("/notes/:id",(req,res)=>{
    const id= req.params.id;
    const {title,description}=req.body;
    notes[id].title=title;
    notes[id].description=description;

    res.status(200).json({
        message:"Note updates successfully"
    })
})



module.exports = app;

