const mongoose=require("mongoose");
const dotenv=require("dotenv");



dotenv.config();



//function to connect Databse to the server 
//code yaha likha jayega pr call hoga server.js se
async function connectDatabase(){


    // more professional way is to use .env file and try-catch to connect to mongodb

    await mongoose.connect(process.env.MONGO_URL)


    console.log("Database Connection Successful!")
}


module.exports=connectDatabase;