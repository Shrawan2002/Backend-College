const mongoose = require("mongoose");


main()
.then((res)=>{
    console.log("connecting successful");
}).catch((err)=>{
    console.log(err);
})
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = new mongoose.Schema({
    title : {
      type: String,
      require : true,
      maxLength: 20
    },
    author : {
        type: String,
    },
    price : {
        type: Number,
        min: [1, "price is too low for Amazon selling"],
    },
    discount : {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        enum: ["fiction","non-fiction"],
    },
    genre: [String],
});

const Book = mongoose.model("Book",bookSchema);

// let book1 = new Book({
//     title : "Mathematics XII",
//     author: "RD Sharma",
//     price: 1200
// })

// book1.save()
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// let book1 = new Book({
//     title : "Mathematics VIII",
//     price: 1200
// })

// book1.save()
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })


// let book1 = new Book({
//     title : "HGone Girl",
//     // author : "Harper Lea",
//     price: "399"
// })

// book1.save()
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })


// let book1 = new Book({
//     title : "Marvel Comics",
//     price: 500,
//     category : "fiction"
// });


// let book1 = new Book({
//     title: "Marvel Comics V2",
//     price: 500,
//     genre: ["comics", "superheroses", "fiction"]
// });

// book1.save()
// .then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })


// Book.findByIdAndUpdate('6892efbbc34995634f7978e0', {price: -500})
// .then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// }) // update Time Collection ke schema ke rule ko check nhi karta hai

Book.findByIdAndUpdate('6892efbbc34995634f7978e0', {price: -500},{runValidators: true}) // update ke time schema ke validators ke check karega
.then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err.errors.price.properties.message)
})