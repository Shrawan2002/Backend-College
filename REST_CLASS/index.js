const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const {v4: uuidv4} = require("uuid");
const methodOverride = require('method-override')

app.use(methodOverride('_method'));

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"/views"));

app.use(express.static(path.join(__dirname,"public")));

app.use(express.urlencoded({extended:true}));
app.use(express.json());


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

//implement patch

app.get("/posts/:id/edit",(req,res)=>{
     let {id} = req.params;
      let post = posts.find((p)=>p.id === id);
      res.render("edit.ejs",{post});
})

app.patch("/posts/:id",(req,res)=>{
    let {id} = req.params;
     let newContent = req.body.content;
    //  console.log(newContent);
    // console.log(id);
    let post = posts.find((p)=>p.id === id);
    post.content = newContent;
    console.log(post);
    // res.send("receive patch request");
    res.redirect("/posts");
})



//delete post

app.delete("/posts/:id",(req,res)=>{
     let {id} = req.params;
    //  let post = posts.find((p)=>p.id === id);
     posts = posts.filter((p)=>p.id != id);
     res.redirect("/posts");
})

app.listen(port,()=>{
    console.log("listening to por:",port);
})

//CRUD -> C->POST, R->GET, U->PUT,PATCH, D->DELETE