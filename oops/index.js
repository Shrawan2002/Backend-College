// factory function

function personMaker(name,age){
    const person = {
        name:name,
        age:age,
        talk(){
         console.log(`Hi, my name is ${this.name}`);
        }
    }
    return person;
}

let p1 = personMaker("adam",25);
let p2 = personMaker("antam",23);
// p1.talk === p2.talk -> false

