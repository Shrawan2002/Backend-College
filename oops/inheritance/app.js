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
