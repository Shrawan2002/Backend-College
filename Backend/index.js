const express = require("express");
const app = express();
const port = 8080;
//express read kar payega body ke data ko-> use middle ware
app.use(express.urlencoded({extended:true}));
//JSON data ko read karneke liye
app.use(express.json());

app.get("/register",(req,res)=>{
    // res.send("standard Get response");
    let {user, password} = req.query;
    res.send(`standard GET response. Welcome ${user}!`);
})

app.post("/register",(req,res)=>{
    // console.log(req.body);
    let {user,password} = req.body;
    res.send(`standard POST response. Welcome ${user}!`);
})

app.listen(port,()=>{
    console.log(`listening on port : ${port}`);
})
