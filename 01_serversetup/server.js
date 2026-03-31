const express= require("express");

const app= express();
// console.log(app)


app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.get("/about",(req,res)=>{
    res.send("About World");
})


app.listen(3000,()=>{
    console.log("Server running..")
})