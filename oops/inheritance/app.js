class Person{
    constructor(name,age){
        console.log("person class constructor");
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hi, my name is ${this.name}`);
    }
}

class Student extends Person{
    constructor(name,age,mark){
        console.log("student class constructor called");
        super(name,age);//parent class constructor is being called
        this.mark = mark;
    }
}

class Teacher extends Person{
    constructor(name,age,subject){
        console.log("teacher constructor called");
        super(name,age);
        this.subject = subject;
    }
}

s1 = new Student("flip",26);

class Mammal{
    constructor(name){
        this.name = name;
        this.type = "warm-blooded";
    }

    eat(){
        console.log("i am eating");
    }
   
}

class Dog extends Mammal{
    constructor(name){
        super(name);
    }
    eat(){
        console.log("dog is eatig");
        // override kar dega function ko
    }
     bark(){
        console.log("wooff..");
    }
}

class Cat extends Mammal{
    constructor(name){
        super(name);
    }
   
     meow(){
        console.log("meow...");
    }
}

let dog1 = new Dog("tuffie");
