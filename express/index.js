const express = require("express");
const app = express();

// console.dir(app);

//port -> 3000,8080-> custome server banane ke liye use karte hai

let port = 3000;

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
})

app.use((req,res)=>{
    console.log("request is received");
    // console.log(req);
    res.send("this is a basic response");
})