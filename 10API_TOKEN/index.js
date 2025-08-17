const express = require("express");
const app = express();
const ExpressError = require("./ExpressError.js");

// app.use("/api",(req,res,next)=>{
//     let {token} = req.query;
//     if(token === "giveaccess"){
//         next();
//     }else{
//         res.send("ACCESS DENIED!");
//     }
// })

// app.get("/api", (req,res)=>{
//     res.send("data");
// })

const checkToken = (req,res,next)=>{
    const {token} = req.query;
      if(token === "giveaccess"){
        next();
    }else{
        //Handing Errors
        // res.send("ACCESS DENIED!");
        // throw new Error("ACCESS DENIED!");
        throw new ExpressError(401, "ACCESS DENIED!");
    } 
}

app.get("/api", checkToken,(req,res)=>{
    res.send("data");
})




// ERROR HANDLING MIDDLEWARE

app.get("/err",(req,res)=>{
    abcd = abcd;
})

app.use((err,req,res,next)=>{
    console.log("----ERROR-----");
    let {status = 500, message= "SOME ERROR!"} = err;
    //  res.send(err)
    res.status(status).send(message);

    // next(err)  //express ke defaulr error handling usko tigger kar rahe hai or custom error handler ko 
})

app.use((err,req,res,next)=>{
    console.log("----ERROR2-----");
    next(err) 
})

app.listen(8080,()=>{
    console.log("server is run on port 8080");
})