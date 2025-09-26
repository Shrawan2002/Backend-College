const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./config/db.js");
const Chat = require("./models/chat.js");
const path = require("path");
const methodOverride = require("method-override");
const app = express();

connectDB();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

app.get("/", (req,res)=>{
    res.send("i am root");
})

//index Route
 app.get("/chats", async(req,res)=>{
    const chats = await Chat.find();
    res.render("index.ejs", {chats});
 })

 //new Route
 app.get("/chats/new", (req,res)=>{
    res.render("new.ejs")
 })

 // create route
 app.post("/chats", async(req,res)=>{
    let {from, msg, to,  created_at} = req.body;
    let createdAtDate = created_at ? new Date(created_at) : new Date();
    let chat1 = new Chat({from,msg, to, created_at: createdAtDate});
    let result = await chat1.save()
    console.log(result);
    res.redirect("/chats")
   console.log(createdAtDate);
 })

 //edit route

 app.get("/chats/:id/edit",async(req,res)=>{
   let id = req.params.id;
   const chat = await Chat.findById(id);
   res.render("edit.ejs", {chat});
 })


app.listen(8080, ()=>{
    console.log("app listening on port 8080");
}) 