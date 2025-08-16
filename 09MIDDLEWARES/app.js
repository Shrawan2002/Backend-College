const express = require("express");
const app = express();

// middleware 
app.use((req,res)=>{
    console.log("Hi, I am middleware");
    res.send("middleware finished");
});

app.get("/",(req,res)=>{
    res.send("Hi, I am root..");
})

app.get("/random",(req,res)=>{
    res.send("this is a random page");
})

app.listen(8080,()=>{
    console.log("server is run on port 8080");
})