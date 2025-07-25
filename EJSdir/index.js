const { render } = require("ejs");
const express = require("express");
const { rename } = require("fs");
const { get } = require("http");
const path = require("path");
 const app = express();

 const port = 8000;

 app.set("view engine", "ejs");
 //jab roote directory se run hota hai to ham set kar dete hai ki views directory ko 
 app.set("views", path.join(__dirname,"/views"));
// express by default views directory ke andar ja ke hi check karta hai file ko

//serving  static files
// app.use(express.static("public"));
// server -> bahar se run kar rahe hai to 
app.use(express.static(path.join(__dirname,"/public")));

 app.get("/",(req,res)=>{
    res.render("home.ejs");
 })

 app.listen(port,()=>{
    console.log(`listening on port ${port}`);
 })

 app.get("/rolldice",(req,res)=>{
   let diceVal = Math.floor(Math.random()*6)+1;
   // res.render("rolldice.ejs");
    res.render("rolldice.ejs",{diceVal});
 })

 // agar key->value same ho to direct ham {diceVal:diceVal}->{diceVal}

//  app.get("/ig/:userName",(req,res)=>{
//    let followers = ["adam","bob","stev","antem"];
//    let {userName} = req.params;
//    console.log(userName);
//    res.render("instagram.ejs",{userName,followers});
//  })

    app.get("/ig/:username",(req,res)=>{
      const instaData = require("./data.json");
      console.log(instaData);
      let {username} = req.params;
      const data = instaData[username];
      console.log(data)
      // console.log(data.name);
      if(data){
         res.render("instagram.ejs",{data});
      }else{
         res.render("error.ejs")
      }
    })






