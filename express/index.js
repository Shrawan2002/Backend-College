const express = require("express");
const app = express();

// console.dir(app);

//port -> 3000,8080-> custome server banane ke liye use karte hai

let port = 3000;

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
})

// app.use((req,res)=>{  -> sare ke sare request par kam karta hai
//     console.log("request is received");
    // console.log(req);
    // res.send("this is a basic response");
    // res.send({
    //     name:"apple",
    //     color:"red"
    // })
    //  let code = "<h1>Fruits</h1> <ul><li>apple</li><li>Orange</li></ul>"
    // res.send(code);
   // express convert kar deta hai koi bhi data ko javaScript representation me
// })

app.get("/",(req,res)=>{
    res.send("you contact root path");
})

app.get("/apple",(req,res)=>{
    res.send("you contact apple path");
})

app.get("/orange",(req,res)=>{
    res.send("you contact orange path");
})

//If it's a very new version, downgrade to a stable one: -> npm install express@4.18.2
//  Wildcard Route ->This catch-all route matches any GET request not matched by previous routes.
// app.get("*",(req,res)=>{
//     res.send("this path does not exist");
// })
// console.log("Running current index.js");

app.post("/" , (req,res)=>{
    res.send("you send a post request");
})

// Path Parameter

app.get("/:username/:id",(req,res)=>{
    // console.log(req.params);
    let {username,id} = req.params;
    // res.send(`welcome to the page of ${username}`);
    let htmlStr = `<h1>welcome to the page of @${username}!</h1>`
    res.send(htmlStr);
})

// query string

// loclhost:3000/search?q=apple&color=green
app.get("/search",(req,res)=>{
    let {q} = req.query;
    console.log(q);
    if(!q){
        res.send("<h1>nothing searched</h1>");
    }
    res.send(`<h1>search result for query: ${q}`);
})
