const mongoose = require('mongoose');

// let url = "https://localhost:8080/users";

// mongoose.connect("mongodb://127.0.0.1:27017/test");

main()
.then((res)=>{
    console.log("connection successful");
}).catch((err)=> {
    console.log(err);
})

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
})

const User = mongoose.model("User",userSchema);

// const user1 = new User({
//     name: "Adam",
//     email: "adam@yahoo.in",
//     age: 48,
// }); // CLI -> node -> .load index.js

const user2 = new User({
    name: "Eve",
    email: "eve@yahoo.in",
    age: 48
})

// user1.save();

user2.save()
.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})