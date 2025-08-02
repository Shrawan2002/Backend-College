const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const path = require("path");


// let  createRandomUser = ()=> {
//   return {
//     userId: faker.string.uuid(),
//     username: faker.internet.username(), // before version 9.1.0, use userName()
//     email: faker.internet.email(),
//     avatar: faker.image.avatar(),
//     password: faker.internet.password(),
//     birthdate: faker.date.birthdate(),
//     registeredAt: faker.date.past(),
//   };
// }

// console.log(createRandomUser());

// Create the connection to database
const connection =  mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: "Shrawan@123"
});

// let q = "SHOW TABLES";

 // Using placeholders
// let q = "INSERT INTO user (id, username, email, password) VALUES ?";

// let users = [["123b", "123_newuserb", "abc@gmail.comb", "abcb"],
//             ["123c", "123_newuserc", "abc@gmail.comc", "abcc"]];

//  try{
//     connection.query(q, [users],(err,result)=>{
//     if(err) throw err;
//     console.log(result);
//     //  console.log(result.length);
//     //  console.log(result[0]);
// })
//  }catch(err){
//     console.log(err);
//  }

//  connection.end();

  // let getRandomUser = ()=> {
  //  return {
  //   Id: faker.string.uuid(),
  //   username: faker.internet.userName(), // before version 9.1.0, use userName()
  //   email: faker.internet.email(),
  //   password: faker.internet.password(),
    
  // };
// }


//   let getRandomUser = ()=> {
//    return [
//      faker.string.uuid(),
//      faker.internet.username(), 
//      faker.internet.email(),
//      faker.internet.password(),
//   ];
// }

//  let q = "INSERT INTO user (id, username, email, password) VALUES ?";
//  let data = [];

//   for(let i=1; i<=100; i++){
//     data.push(getRandomUser());
//   }

//   try{
//     connection.query(q, [data], (err,result)=> {
//       if(err) throw err;
//       console.log(result);
//     })
//   }catch(err){
//     console.log(err);
//   }

//   connection.end();

//Home Route
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

  app.get("/",(rq,res)=>{
    let q = `SELECT COUNT(*) FROM user`;
    try{
      connection.query(q, (err,result)=>{
        if(err) throw err;
          // console.log(result[0]["COUNT(*)"]);
          let count = result[0]["COUNT(*)"]
          res.render("home.ejs",{count});
      })
    }catch(err){
      console.log(err);
      res.send("some err in DB");
    }
  
  })

  //show Route

  app.get("/user",(req,res)=>{
    let q = `SELECT * FROM user`;
    try{
      connection.query(q, (err,result)=>{
        if(err) throw err;
        // console.log(result);
        // res.send(result);
        let users = result;
        res.render("showusers.ejs",{users});
      })
      }catch(err){
        console.log(err);
        res.send("some error in DB");
      }
    })

  app.listen(8080,()=>{
    console.log("server is listenning to port 8080");
  })



// console.log(getRandomUser());