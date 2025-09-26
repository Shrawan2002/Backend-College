const Chat = require("./models/chat.js");
const connectDb = require("./config/db.js");

connectDb();

let allChats = [
     {
        from: "neha",
        to: "preeti",
        msg: "send me notes for the exam",
        created_at: new Date()
    },
       {
        from: "rohit",
        to: "mohit",
        msg: "teach me JS callback",
        created_at: new Date()
    },
       {
        from: "amit",
        to: "sumit",
        msg: "all the best!",
        created_at: new Date()
    },
       {
        from: "tony",
        to: "peter",
        msg: "love you 3000",
        created_at: new Date()
    },
];

Chat.insertMany(allChats);

