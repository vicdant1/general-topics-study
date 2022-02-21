"use strict";
// Basic types
let id = 5;
let company = "Traversy Media Inc";
let isPublished = true;
let x = "Hello";
// if u set x to anything it will not throw an error
x = 3;
x = "hello again";
// Arrays
let ids = [1, 2, 3, 4, 5];
// ids.push("Hello world"); -> it'll complain
let arrAny = ["hello", 123, true];
// Tuple
let person = [1, "brad"];
// array of tuple
let employees;
employees = [
    [1, "brad"],
    [2, "pitt"],
    [3, "abluble"]
];
// if some order has been broken, it will throw an error for sure
// union -> mixing types
let product_id;
product_id = 22;
product_id = "333";
//Enum
var DirectionOne;
(function (DirectionOne) {
    // values from zero to x
    DirectionOne[DirectionOne["Up"] = 1] = "Up";
    DirectionOne[DirectionOne["Down"] = 2] = "Down";
    DirectionOne[DirectionOne["Left"] = 3] = "Left";
    DirectionOne[DirectionOne["Right"] = 4] = "Right";
})(DirectionOne || (DirectionOne = {}));
console.log(DirectionOne.Down);
var DirectionTwo;
(function (DirectionTwo) {
    DirectionTwo["Up"] = "Up.txt";
    DirectionTwo["Down"] = "Down.txt";
    DirectionTwo["Left"] = "Left.txt";
    DirectionTwo["Right"] = "Right.txt";
})(DirectionTwo || (DirectionTwo = {}));
console.log(DirectionTwo.Down);
const user = {
    id: 1,
    name: 'John'
};
// type assertion
let cid = 1;
// let costumerId = <number> cid;
// costumerId = '1'; -> complaining about type
// another way to do this, is using the "as" keyword
let costumerId = cid;
// costumerId = '1'; -> complaining about type
// Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
function log(message) {
    console.log(message);
}
log(32);
log("32");
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        // we can have methods running inside the constructor, everytime a person is created, the constructor will be running everything is inside of it.
        this.id = id;
        this.name = name;
    }
    // creating methods in this classe:
    register() {
        return `${this.name} is now registred`;
    }
}
const brad = new Person(1, "Brad");
const mike = new Person(2, "Mike");
console.log(brad.register());
// Inheritance -> superclasses and subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name),
            this.position = position;
    }
}
const emp = new Employee(1, "John", "Developer");
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArr = getArray([1, 2, 3, 4, 5]);
let strArr = getArray(["John", "Brad", "Jill"]);
strArr.push("abluble");
numArr.push(1);
// pretty the same we use it in c#
