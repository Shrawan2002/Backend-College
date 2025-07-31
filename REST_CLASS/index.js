const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const {v4: uuidv4} = require("uuid");

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"/views"));

app.use(express.static(path.join(__dirname,"public")));

app.use(express.urlencoded({extended:true}));

let posts = [
    {
        id : uuidv4(),
        username: "apnacollege",
        content : "I love coding"
    },
    {
        id : uuidv4(),
        username: "shrawankumar",
        content: "Hard work is important to achieve success"
    },
      {
        id : uuidv4(),
        username: "rahulkumar",
        content : "I got selected for my 1st internship!"
    },
]
//index Route
app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
})

//create route-> add new posts
// serve the form
app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
})

//add the new post
app.post("/posts",(req,res)=>{
    // console.log(req.body);
    let {username,content} = req.body;
    let id = uuidv4();
    posts.push({id,username,content});
    // res.send("post request working");
    res.redirect("/posts");
})

app.get("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=>p.id ===id);
    // console.log(post);
    res.render("show.ejs",{post});
})

app.listen(port,()=>{
    console.log("listening to por:",port);
})