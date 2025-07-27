// factory function

// function personMaker(name,age){
//     const person = {
//         name:name,
//         age:age,
//         talk(){
//          console.log(`Hi, my name is ${this.name}`);
//         }
//     }
//     return person;
// }

// let p1 = personMaker("adam",25);
// let p2 = personMaker("antam",23);
// p1.talk === p2.talk -> false

// Constructor - doesn't return anything & start with capital
function Person(name,age){
    this.name = name;
    this.age = age;
    console.log(this);
}

Person.prototype.talk = function(){
    console.log(`Hi my name is ${this.name}`);
}

// let p1 = Person("adam",25);

let p1 = new Person("adam", 25);
let p2 = new Person("eve",23);

//p1.talk === p2.talk-> true
