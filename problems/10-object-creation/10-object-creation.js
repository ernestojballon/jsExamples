/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

//Object literal
let dog = {
    name:'candy',
    age: 34
}
console.log(dog.name);// candy


//Constructor function
let Dog = (name="",age=0)=>{
    let _name = name ;
    let _age = age ;

    return{
        // getName:()=>{
        //     return _name;
        // },
        // setName:(name)=>{
        //     _name = name;
        // },
        // getAge:()=>{
        //     return _age;
        // },
        // setAge:(age)=>{
        //     _age =age;
        // },
        toString:()=>{
            return `${_name} has ${_age} years`
        }
    }

}
let candy = Dog("candy",4);
console.log(candy.toString());// candy has 4 years

//ES6 Class

class Dog2{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    getAge(){
        return this.age;
    }
}

let candy2 = new Dog2("candy",3);
console.log(candy2.age);// 3
