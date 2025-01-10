/*

Conditional Statements :-  Conditional statements, also known as control flow statements, are used to perform different actions based on different conditions. They allow you to execute certain pieces of code based on the evaluation of a condition.

*/



/*

Types of Conditional Statements ?

1) if - Statement 
2) if - else Statement 
3) if - else - if - else statement 
4) Switch Statement 


*/

// Prompt function :- To take from the user ?
// alert("hello")

let a = prompt("Hey whats you age ? ");
a = Number.parseInt(a); // Converting the string to a Number
// console.log(typeof a)



// If Statement :-  Executes a block of code if a specified condition is true.


// Syntax :- 

if (condition) {
    // Code to be executed if condition is true
}


// Example :-

let age = 18;
if (age >= 18) {
    console.log("You are an adult.");
}




// If - else Statement :-   Executes one block of code if a specified condition is true, and another block if the condition is false.


// Syntax :- 

if (condition) {
  // Code to be executed if condition is true
} else {
  // Code to be executed if condition is false
}


// Example :- 

let Age = 16;
if (Age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are not an adult.");
}




// If - else - If Statement :-   Executes different blocks of code for multiple conditions.


// Syntax :-

 if (condition1) {
    // Code to be executed if condition1 is true
} else if (condition2) {
    // Code to be executed if condition2 is true
} else {
    // Code to be executed if neither condition1 nor condition2 is true
}



// Example :-  

if (a < 0) {
  alert("This is an invalid age ");
} else if (a < 9) {
  alert("You are a kid and you cannot even think of driving ");
} else if (a < 18 && a >= 9) {
  alert("You are a kid and you can think of driving after 18");
} else {
  alert("You can now drive as you are above 18");
}
console.log("Done");




// 4) Switch Statement :-  Selects one of many blocks of code to be executed.


// Syntax :- 

switch (expression) {
  case value1:
    // Code to be executed if expression === value1
    break;
  case value2:
    // Code to be executed if expression === value2
    break;
  default:
  // Code to be executed if expression does not match any case
}


// Example :- 

let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}



// 5) Ternary Operator   :-   The ternary operator, also known as the conditional operator, is a shorthand for the if-else statement. It is used to assign a value to a variable based on a condition. The ternary operator is the only JavaScript operator that takes three operands.


// Syntax :-  condition ? expressionIfTrue : expressionIfFalse;



/* 

Condition: This is the condition to be evaluated.

ExpressionIfTrue: This expression is executed if the condition is true.

ExpressionIfFalse: This expression is executed if the condition is false.

*/



// Example 1 :-   Basic Usage :- 

let age1 = 18;
let canVote = (age1>=18) ? "Yes" : "No";
console.log(canVote);   // Output : "Yes"



// Example 2 :-  Assigning Variable Based on Condition :- 

let speed = 90;
let speedCheck = (speed > 80) ? "Over Speeding" : "Within Limit";
console.log(speedCheck);  // Output :- "Over Speeding"



// Example 3 :-  Nested Ternary Operators :- 


let marks = 85;
let grade = (marks>=90) ? "A":
            (marks>=80) ? "B":
            (marks>=70) ? "C": "D";
console.log(grade);   // Output : "B"



// Example 4 :-  Inline Ternary Operator :-

let isMember = true;
console.log(isMember ? "Welcome , member! " : "Sign up to become a memeber. "); // Output :-  "Welcome , member !"
