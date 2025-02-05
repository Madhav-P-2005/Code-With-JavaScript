/*

Functions are a fundamental aspect of JavaScript, allowing you to write reusable blocks of code that can be executed multiple times.

>> 1) Definition :-   A function is a block of code designed to perform a particular task, which is executed when it's called or invoked.

*/


// 2) Syntax :- 

function functionName(parameters) {
  // Code to be executed
}


/*

    >> functionName :-  The name of the function.

    >> parameters :-  A list of parameters or arguments the function takes.

*/



// 3)  Usage :-   Functions can be called or invoked to execute the code defined within them.


function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet('Alice'));           // Output :-  Hello, Alice!



// 4)  Working  :-  When a function is called, the control of the program passes to the function. Once the function's code executes, the control returns to the point from where the function was called.



// Q1) To calculate sum of two numbers ? 
function sum(num1 ,num2){
    let result = num1 + num2
    // console.log("Sum of two numbers are  :- ",result)
    //or 
    return result
    // return  num1 + num2;

}

// let num1 = prompt("Enter the value of num1 :- ")

let num1 = 5

let num2 = 10

// let num2 = prompt("Enter the value for num2 :- ")

sum(num1 , num2)

console.log(sum(num1 , num2))             // Output :- 15




// Local Parameters :-  Local parameters (or variables) are those that are declared within a function. They are accessible only within that function and cannot be accessed outside of it. Each time you call the function, new instances of these local parameters are created.


// Example :-   In the example below , localVar is a local parameter only accessible within the localScopeExample function.


function localScopeExample(){

  let localVar = "I am local";

  console.log(localVar); // Accessible inside the function

}

localScopeExample()          // Output :-  I am local

console.log(localVar)     // Throws a ReferenceError because localVar is not defined outside the function


/*

  Note :-  function params :-   like local variables  --> block scope of function . 

*/





// Global Variables :-    Global parameters (or variables) are those that are declared outside of any function. They are accessible from any part of the code, including inside functions. Because of this wide accessibility, global variables should be used sparingly to avoid unintended modifications and make debugging easier.


// Example :-  In this example, globalVar is a global variable accessible both inside the globalScopeExample function and outside in the global scope.


let globalVar = 'I am global';

function globalScopeExample() {
    console.log(globalVar);             // Accessible inside the function
}

globalScopeExample();                     // Output :-  I am global

console.log(globalVar);            // Accessible outside the function



/* 

# Best Practices :- 
 
   1) Minimize the Use of Global Variables: Overuse of global variables can lead to code that is difficult to debug and maintain. Use local variables whenever possible.

   2) Use const and let :-  They help to define variables with block scope, reducing potential issues with variable hoisting and re-declaration.

   3) Naming Conventions :-  Clearly distinguish global variables (e.g., using uppercase or specific prefixes) to avoid conflicts with local variables.

*/




// Types of Functions 

// 1)  Function Declaration  :-  A standard way to define a function, hoisted to the top of their scope.

function greet(name) { 

    // parameter -> input (name)

    return `Hello, ${name}!`;

}

console.log(greet('Alice'));          // Output :-  Hello, Alice!   ->  Argument('Alice')




// 2) Function Expression :-   Defined within an expression and not hoisted.


const greet = function(name) {

    return `Hello, ${name}!`;

};

console.log(greet('Bob'));              // Output :- Hello, Bob!



// NaN -> Not a number .



// b) Calling Functions  :- Invoke functions using parentheses.

greet('David');                  // Call the function with an argument 'David'

// or 

// Without Paraentheses.
greet() 





// 3) Arrow Functions :- Introduced in ES6, provide a shorter syntax for writing function expressions. They also come with the benefit of having a lexical this binding. This means that this inside an arrow function refers to the value of this in the surrounding lexical context, making them particularly useful in cases where you want to maintain the this value from the surrounding scope.

/*

Syntax :- 

     const functionName = (param1 , param2 ...) => {
       
    }

*/




// Key Features of Arrow Functions :-

// 1) Shorter Syntax :-  
const add1 = (a, b) => a + b;



// This example achieves the same as this longer function expression :-

const add2 = function (a, b) {
  return a + b;
};




// 2) Lexical this :-  Arrow functions do not have their own this; they inherit this from the parent scope.

const person = {

    name: 'Alice',

    sayName() {

        setTimeout(() => {

            console.log(this.name);  // `this` refers to `person`

        }, 1000);

    }
};


person.sayName();                    // Output :-   Alice after 1 second





// 3) No arguments object :- Arrow functions do not have their own arguments object, but you can use rest parameters (...args) if needed.


// Regular Function (function keyword)   ? 

/*

   a) arguments is a special object available inside regular functions that holds all the arguments passed to the function.

   b) It behaves like an array (but isn’t exactly an array) and allows you to access function parameters even if they aren’t explicitly defined.

*/


function regularFunction() {

  console.log(arguments);             // Arguments object available

}

regularFunction()                     // Output :-   {}



function regularFunction(a, b) {

  console.log(arguments);             // ✅ Works! Logs all passed arguments

}

regularFunction(10, 20, 30);          // Output :- Arguments(3) [10, 20, 30, callee: ƒ, Symbol(Symbol.iterator): ƒ]




// 💡 Why does it work ?

/*

>>> Regular functions automatically get the arguments object, even if no parameters are explicitly declared.

*/


const arrowFunction = () => {

  console.log(arguments);      // ❌ Throws ReferenceError

};


// ❌ Error :-  "arguments is not defined"


// 💡 Why does it fail?

/*

  a) Arrow functions do not have their own arguments object.

  b) If you try to use arguments inside an arrow function, JavaScript will throw an error.

*/


// Example 2 :- 
const arrowFunction2 = (a, b) => {

  console.log(arguments);         // ❌ Throws ReferenceError

};

arrowFunction(10, 20, 30);



// Example 3 :- 
const arrowSum = (a,b) => {

    console.log(a + b)

}
console.log(arrowSum)             // Output :-  Returns defination :- [Function: arrowSum]

arrowSum(11,20)                   // Output :- 31




// Multiplicaton of two numbers using arrow functions ? 
const arrowMultiply = (a,b) => {

    // console.log(a*b)

    //or 

    return a*b;
}

console.log(arrowMultiply(5,2))     // Output :- 10

arrowMultiply(5,2)                   // Output :- 10 




// Without Arguments 
const printHello = () =>{

    console.log("Hello its me Madhav !")

}

printHello()     // Output :-  Hello its me Madhav !





// forEach Loop in Arrays :- 

/*

The forEach loop is a powerful array method in JavaScript that allows you to iterate over each element in an array and execute a provided function once for each element. It’s commonly used for its simplicity and readability.

*/

[" Note :-  A Callback is a function passed as an argument to another function ."]


// 1) Definition :-  The forEach method executes a provided function once for each array element. It doesn't return anything (undefined), making it ideal for side effects such as manipulation of the DOM or logging to the console.  They are called as Higher Order Function / methods 


// 2) Syntax :-   array.forEach(callback(currentValue, index, array), thisArg);


// Parameters :- 

/*

  1) callback :- A function to execute on each element. It takes three arguments:

    a) currentValue :-  The current element being processed in the array.

    b) index (optional) :-  The index of the current element being processed.

    c) array (optional) :-  The array forEach is being applied to.

  2) thisArg (optional): A value to use as this when executing the callback function.

*/


// Example :- 

let arr = [1,2,3,4,5];

arr.forEach(function printVal(val){   // value at each index 

    console.log(val)
})


/*

Output :- 
1
2
3
4
5

*/




// Using Arrow Function 

let cities = ["Bangaluru" , "Chennai" , "Mumbai", "Hyderbad", "Kochi"]

cities.forEach((val , index , cities) => {

  console.log(val.toUpperCase() , index , cities);

});



/*

Output :- 

BANGALURU 0 [ 'Bangaluru', 'Chennai', 'Mumbai', 'Hyderbad', 'Kochi' ]
CHENNAI 1 [ 'Bangaluru', 'Chennai', 'Mumbai', 'Hyderbad', 'Kochi' ]
MUMBAI 2 [ 'Bangaluru', 'Chennai', 'Mumbai', 'Hyderbad', 'Kochi' ]
HYDERBAD 3 [ 'Bangaluru', 'Chennai', 'Mumbai', 'Hyderbad', 'Kochi' ]
KOCHI 4 [ 'Bangaluru', 'Chennai', 'Mumbai', 'Hyderbad', 'Kochi' ]

*/