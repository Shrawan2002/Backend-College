const express = require("express");
const app = express();
const mongoose = require("mongoose");

main()
.then((res)=>{
    console.log("connectio is successful")
}).catch((err)=>{
    console.log(err);
})

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/text")
}

app.get("/",(req,res)=>{
     res.send("root is working");
})
app.listen(8080,()=>{
    console.log("server is listening on port 8080");
})