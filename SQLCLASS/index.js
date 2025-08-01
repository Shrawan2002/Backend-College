const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');



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

let q = "SHOW TABLES";

 try{
    connection.query(q,(err,result)=>{
    if(err) throw err;
    console.log(result);
    //  console.log(result.length);
     console.log(result[0]);
})
 }catch(err){
    console.log(err);
 }

 connection.end();

  let getRandomUser = ()=> {
   return {
    Id: faker.string.uuid(),
    username: faker.internet.userName(), // before version 9.1.0, use userName()
    email: faker.internet.email(),
    password: faker.internet.password(),
    
  };
}

// console.log(getRandomUser());