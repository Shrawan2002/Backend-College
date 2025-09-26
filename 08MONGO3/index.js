const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./config/db.js");
const Chat = require("./models/chat.js");
const path = require("path");
const app = express();

connectDB();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req,res)=>{
    res.send("i am root");
})

const chat1 = new Chat({
    from: "Neha",
    to: "Riya",
    msg:"send me your exam sheets",
    created_at: new Date()
});

chat1.save().then((res)=>{console.log(res)})
.catch((er)=> {console.log(err)})


app.listen(8080, ()=>{
    console.log("app listening on port 8080");
}) 