const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"/views"));

app.use(express.static(path.join(__dirname,"public")));

app.use(express.urlencoded({extended:true}));

let posts = [
    {
        username: "apnacollege",
        content : "I love coding"
    },
    {
        username: "shrawankumar",
        content: "Hard work is important to achieve success"
    },
      {
        username: "rahulkumar",
        content : "I got selected for my 1st internship!"
    },
]
//index Route
app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
})

//create route

app.get("/posts/new",(req,res)=>{
    res.render()
})

app.listen(port,()=>{
    console.log("listening to por:",port);
})