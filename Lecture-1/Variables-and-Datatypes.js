// In Browser :-   Ctrl + R :- Refresh 
// alert("Apna College")  // A pop up window will come.

console.log("Apna College");   // To print something 

// Variables  :- 

let a = 67 // a = 67
console.log(a);

a  = "string"
console.log(a);

price = 150.8
console.log(price);

// let 8harry = 7 // Not allowed this will throw an error 


/*
 
## Datatypes :- 7 types 

>> 1) Null  :- Represents the intentional absence of any object value; it is one of JavaScript's primitive values.

a) Syntax :- let value = null;

b) Usage :-  Often used to initialize variables that may later hold an object value.

c) How it Works :- When a variable is assigned null, it explicitly indicates "no value."

d) Example :-  

let user = null; // user has no value
if (user === null) {
    console.log("No user found");
}


>> 2) Number  :-  Represents both integer and floating-point numbers.

a) Syntax :- 

let age = 30;
let price = 99.99;


b) Usage :-  Used for arithmetic operations and numerical calculations.

c) How it Works :- JavaScript handles numbers using the double-precision 64-bit format IEEE 754.

d) Example :-  

let sum = 10 + 20; // 30
let product = 10 * 2.5; // 25



>> 3) String  :-  Represents a sequence of characters.

a) Syntax :- let greeting = "Hello, world!";

b) Usage :-  Used for text manipulation, such as creating and modifying text.

c) How it Works :- Strings can be concatenated, split, and manipulated using various methods.

d) Example :-  

let name = "John";
let message = "Hello, " + name + "!"; // Concatenation
let template = `Hello, ${name}!`; // Template literals



>> 4) Symnbol :-  Represents a unique, immutable identifier.

a) Syntax :-  let sym = Symbol("description");

b) Usage :-  Used to create unique property keys for objects.

c) How it Works :- Symbols are unique and do not conflict with any other properties.

d) Example :-  

let obj = {};
let sym1 = Symbol("key1");
obj[sym1] = "value1";
console.log(obj[sym1]); // "value1"



>> 5) Boolean :-  Represents a logical entity that can have only two values: true or false.

a) Syntax :- 
let isActive = true;
let isComplete = false;


b) Usage :-  Used in conditional testing to execute different code based on true/false values.

c) How it Works :- Booleans result from comparisons and logical operations."


d) Example :-  

let isAdult = age >= 18; // true or false
if (isAdult) {
    console.log("User is an adult.");
} else {
    console.log("User is a minor.");
}



>> 6) BigInt  :-  Represents integers with arbitrary precision.

a) Syntax :- let bigInt = 1234567890123456789012345678901234567890n;


b) Usage :-  Used for large integers beyond the safe integer limit of the Number type.

c) How it Works :- BigInt can safely represent and manipulate large integers.

d) Example :-  

let bigIntSum = 1234567890123456789012345678901234567890n + 1n;
console.log(bigIntSum); // 1234567890123456789012345678901234567891n



>> 7) Undefined  :-  Indicates that a variable has been declared but has not been assigned a value.

a) Syntax :- let notAssigned;


b) Usage :-  Automatically assigned to variables that have just been declared.

c) How it Works :- When a variable is declared but not assigned any value, it holds undefined.

d) Example :-  

let x; // x is undefined
console.log(x); // "undefined"

*/


// Data Types - Two  Types :- 

// 1) Primitive Datatypes :-  Primitive data types are the most basic types of data. They are immutable, meaning their values cannot be changed.

// let a = null;
let b = 345;
let c = true;         // can also be false 
let d = BigInt("567")  + BigInt("5")
let e = "Harry"
let f = Symbol("I am a nice symbol")
let g = undefined     // or let g  also works 
console.log(a,"\n",b ,"\n",c ,"\n",d ,"\n",e,"\n",f,"\n",g)

// To find type of data stored ? 
console.log(typeof d)


// 2) Non - Primitive Datatypes :-  Non-primitive data types are more complex types of data. They can store multiple values and are mutable.


// a) Objects :- A collection of properties, where each property is defined as a key-value pair.


// KeyValue pairs :- "Harry" , "Subh " etc ... 

// Example :- 

const student = {

    name : "Rahul Kumar",
    age : 20,
    cgpa : 8.2,
    isPass : true
}

console.log(student["name"])    // Output :- Rahul Kumar
console.log(student["age"])     // Output :- 20
console.log(student.age)        // Output :- 20

// To update age ? Here const obj can be updated so key can also be updated 
student["age"] = student["age"] + 1;
console.log(student)


// b) Array :-  An ordered collection of elements.

// Syntax :- 
let numbers = [1, 2, 3, 4, 5];

// Example :- 
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]); // Output: Apple


// b) Array :-  A block of code designed to perform a particular task.

// Syntax :- 
function greet(name) {
  return `Hello, ${name}!`;
}

// Example :- 
function sum(a, b) {
    return a + b;
}
console.log(sum(5, 3)); // Output: 8


// Let or Var or Const 


/*  

1)  Var should be avoided dont use it 
var a = 45;
var a = "gone"
So in modern days we use  let and const 

*/


/*


  >> 1)  Var is globally scoped while let & const are block Scoped .

  >> 2) Var can be updated & re- declared within its scope .

  >> 3) let can be updated but not re - declared .

  >> 4) Const can neither be updated nor be re- declared .

  >> 5) var variables are initalized with undefined whereas let and const varables are not initialized .

  >> 6) Const must be initialized during declaration unlike let and var . 

*/

// Block-Scoped 

{
  let a = 5;
//   let a = 10; // SyntaxError: Identifier 'a' has already been declared
  console.log(a);
}

{
    let a = 10;
    console.log(a);
}