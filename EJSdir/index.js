const express = require("express");
const path = require("path");
 const app = express();

 const port = 8000;

 app.set("view engine", "ejs");
 //jab roote directory se run hota hai to ham set kar dete hai ki views directory ko 
 app.set("views", path.join(__dirname,"/views"));
// express by default views directory ke andar ja ke hi check karta hai file ko
 app.get("/",(req,res)=>{
    res.render("home.ejs");
 })

 app.listen(port,()=>{
    console.log(`listening on port ${port}`);
 })

 app.get("/rolldice",(req,res)=>{
   let diceVal = Math.floor(Math.random()*6)+1;
   // res.render("rolldice.ejs");
    res.render("rolldice.ejs",{num:diceVal});
 })

 // agar key->value same ho to direct ham {diceVal:diceVal}->{diceVal}

