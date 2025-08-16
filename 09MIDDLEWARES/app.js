const express = require("express");
const app = express();

// middleware 

// app.use((req,res)=>{
//     console.log("Hi, I am middleware");
//     res.send("middleware finished");
// });

//next() -> middleware
// app.use((req,res,next)=>{
    // console.log("Hi, I am 1st middleware");
    // next()
    // console.log("this is after next");

    //or
    // return next();  // aage ka line execute nahi hoga
    // console.log("this is after next");
// })


// app.use((req,res,next)=>{
//     console.log("Hi, I am 2nd middleware");
//     next()
// })


//Path, callback -> particular path ke liye bhi middleware define kar skte hai

app.use("/random",(req,res,next)=>{
    console.log("I, am only for random");
    next();
})


//logger 

app.use((req,res,next)=>{
    req.time =  new Date(Date.now()).toString();
    console.log(req.method, req.hostname, req.path, req.time);
    next();
})

app.get("/",(req,res)=>{
    res.send("Hi, I am root..");
})

app.get("/random",(req,res)=>{
    res.send("this is a random page");
})

// page do not exist (4040)

app.use((req,res)=>{
    res.status(404).send("Page not found");
})

app.listen(8080,()=>{
    console.log("server is run on port 8080");
})