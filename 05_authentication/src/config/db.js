const dotenv=require('dotenv');
const mongoose=require('mongoose');
dotenv.config();


async function connectToDatabase(){
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to Database..");
    } catch (err) {
        console.log("Database connection error: ",err);
    }
}

module.exports=connectToDatabase;