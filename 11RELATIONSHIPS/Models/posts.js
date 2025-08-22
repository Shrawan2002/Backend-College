const mongoose = require("mongoose");
const {Schema} = mongoose;


main()
.then(()=>{
    console.log("connection successfull!");
}).catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo")
}


// instagram post

const userSchema = new Schema({
    username: String,
    email: String
});

const postSchema = new Schema({
    content: String,
    like: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

const User = mongoose.model("User",userSchema);
const Post = mongoose.model("Post",postSchema);



const addData = async ()=>{
    // const user1 = new User({
    //     username: "rahulkumar",
    //     email: "rahul@gmail.com"
    // })

    // let post1 = new Post({
    //     content: "Hello World!",
    //     like: 7
    // })

    // post1.user = user1;

    // await user1.save();
    // await post1.save();


    // Create post 2
     let post2 = new Post({
        content: "Bye Bye !",
        like: 23
    })

    let user = await User.findOne({username: "rahulkumar"});

    post2.user = user;

    let res = await post2.save();
    console.log(res);

}

addData();
