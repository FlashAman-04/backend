// server start krta h
const app=require("./src/app");
const connectDatabase=require("./src/db/db");


connectDatabase()


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});

