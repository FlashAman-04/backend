const mongoose= require('mongoose');
const dotenv=require('dotenv');
dotenv.config();

async function connectDatabase(){
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Database connected Successfully!!")
    } catch (error) {
        console.log("Database Connection Error:",error)
    }
}

module.exports=connectDatabase;