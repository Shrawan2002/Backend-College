const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const app = express();

app.set("views", path.join(__dirname,"/views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")))

main()
.then((res)=>{
    console.log("connection is successful")
}).catch((err)=>{
    console.log(err);
})

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp")
}

// let chat1 =  new Chat({
//     from: "neha",
//     to: "priya",
//     msg: "send me your exam sheets",
//     created_at: new Date(),
// });

// chat1.save()
// .then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err);
// })

app.get("/",(req,res)=>{
     res.send("root is working");
})

// Index Route
app.get("/chats", async(req,res)=>{
    let chats = await Chat.find();
    console.log(chats);
    // res.send("working")
    res.render("index.ejs",{chats})
})
app.listen(8080,()=>{
    console.log("server is listening on port 8080");
})