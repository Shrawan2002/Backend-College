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


// mongo relationships -> one to many Approach 1 one to few
const userSchema = new Schema({
    userName: String,
    addresses: [
        {
            _id: false,
            location: String,
            city: String,
        }
    ]
})

const User = mongoose.model("User",userSchema); 

const addUsers = async ()=>{
    let user1 =  new User({
        userName: "sherlockholmes",
        addresses: [{
            location: "221B Baker Street",
            city: "london"
        }]
    })

    user1.addresses.push({location: "P32 WallStree", city: "london"});

    let result = await user1.save();
    console.log(result);
}

addUsers();