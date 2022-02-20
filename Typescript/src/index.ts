
// Basic types

let id:number = 5;
let company:string = "Traversy Media Inc";
let isPublished:boolean = true;
let x:any = "Hello";

// if u set x to anything it will not throw an error

x = 3;
x = "hello again";

// Arrays

let ids:number[] = [1,2,3,4,5];
// ids.push("Hello world"); -> it'll complain
let arrAny:any[] = ["hello", 123, true];

// Tuple

let person:[number, string] = [1, "brad"];

// array of tuple

let employees:[number, string][];

employees = [
  [1, "brad"],
  [2, "pitt"],
  [3, "abluble"]
];

// if some order has been broken, it will throw an error for sure

// union -> mixing types

let product_id:number|string;

product_id = 22;
product_id = "333";

//Enum

enum DirectionOne{
  // values from zero to x
  Up = 1,
  Down,
  Left,
  Right
}

console.log(DirectionOne.Down);

enum DirectionTwo{
  Up = "Up.txt",
  Down = "Down.txt",
  Left = "Left.txt",
  Right = "Right.txt"
}

console.log(DirectionTwo.Down);





















