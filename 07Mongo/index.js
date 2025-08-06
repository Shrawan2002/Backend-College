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

// const user2 = new User({
//     name: "Eve",
//     email: "eve@yahoo.in",
//     age: 48
// })

// user1.save();

// user2.save()
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// insert many data

// User.insertMany([
//     {name: "Tony", email: "tony@gmail.com",age: 50},
//     {name: "Peter", email: "peter@gmail.com",age: 30},
//     {name: "Bruce", email: "bruce@gmail.com",age: 47},
// ]).then((res)=> {
//     console.log(res)
// })


// User.find({})
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// User.find({age:{$gt:48}})
// .then((res)=>{
//     console.log(res[0].name);
// }).catch((err)=>{
//     console.log(err);
// })

// find one

// User.findOne({age:{$gt:47}})
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// find by id

// User.findById("68922019652ff2b954b14c1c")
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// update one

// User.updateOne({name:"bruce"},{age:49})
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// update many

// User.updateMany({age: {$gt:48}},{age:55})
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// User.findOneAndUpdate({name:"Bruce"},{age:42})
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

User.findOneAndUpdate({name:"Bruce"},{age:42},{new:true})
.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})


