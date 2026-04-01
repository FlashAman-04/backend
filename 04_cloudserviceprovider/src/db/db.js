// it contains the function which is the connection between database and the server

const mongoose= require('mongoose');
const dotenv=require('dotenv');


dotenv.config();


async function connectDatabase(){
    await mongoose.connect(process.env.MONGODB_URL);

    console.log("Database Connection Successful!");
}


module.exports=connectDatabase;
