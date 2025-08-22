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

//Create an Admin route & send an error with a 403 status code.

app.get("/admin",(req,res)=>{
    throw new ExpressError(403, "Access to admin is Forbidden")
})

app.use((err,req,res,next)=> {
    console.log(err.name);
    next(err);
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


// mongoose Error handler

const handleValidationErr = (err)=>{
    console.log("this was a validation error. please follow rules");
    console.dir(err.message);
    return err;
}

app.use((err,req,res, next)=>{
    console.log(err.name);
    if(err.name === "validationError"){
        err = handleValidationErr(err);
    }
    next(err);
})

app.use((err,req,res,next)=>{
    console.log("----ERROR-----");
    let {status = 500, message= "SOME ERROR!"} = err;
    //  res.send(err)
    res.status(status).send(message);

    // next(err)  //express ke defaulr error handling usko tigger kar rahe hai or custom error handler ko 
})

app.listen(8080,()=>{
    console.log("server is run on port 8080");
})