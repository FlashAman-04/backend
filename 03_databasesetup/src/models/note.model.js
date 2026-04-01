const mongoose = require("mongoose");




// Schema determines the Structure Of the document in the collection of the database.


const noteSchema = new mongoose.Schema({
    title: String,
    description:String
})



// Model is used to easily perform CRUD Operations on the database
const noteModel = mongoose.model("note", noteSchema); //mediator between the database and the application



module.exports =noteModel;



