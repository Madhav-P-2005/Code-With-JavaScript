/*

⭐) Exception handling in JavaScript refers to managing runtime errors or exceptions in the code gracefully, without crashing the application. It ensures that errors are caught, handled appropriately, and the program continues to function or fails in a controlled manner.

⭐) JavaScript provides the try...catch statement for exception handling. Errors can be thrown manually using the throw statement or caught when they naturally occur during program execution.

*/



// Syntax :- 
try {
  // Code that may throw an error
} catch (error) {
  // Code to handle the error
} finally {
  // Optional block of code that executes regardless of an error
}




// How It Works :-  ? 

/* 


1) try Block :- 

      a) Contains code that might throw an error.

      b) If no error occurs, the catch block is skipped.


2) catch Block :-

       a) Executes when an error occurs inside the try block.

       b) The error object provides information about the error (e.g., name, message).


3) finally Block (optional) :-

       a) Executes regardless of whether an error occurred or not.

       b) Useful for cleanup operations (e.g., closing a file, releasing resources).

4) throw Statement :-

       a) Manually throws an error that can be caught by catch.

*/


//  Example :- 
try {
  let result = 10 / 0; // Code that won't throw an exception
  console.log("Result:", result);

  let value = someUndefinedVariable; // This will throw a ReferenceError
} catch (error) {
  console.log("Error caught!");
  console.log("Error Name:", error.name); // ReferenceError
  console.log("Error Message:", error.message); // someUndefinedVariable is not defined
} finally {
  console.log("Execution completed!");
}




// Throwing Custom Errors :-   You can use the throw statement to throw custom errors.

function validateAge(age) {
  if (age < 18) {
    throw new Error("Age must be 18 or older.");
  }
  return "Age is valid.";
}

try {
  console.log(validateAge(16)); // Throws an error
} catch (error) {
  console.error("Validation Error:", error.message); // Age must be 18 or older.
}




// Common Error Types ? 


// 1)  ReferenceError :-  When referencing a variable that does not exist.


// Example :- 

console.log(someUndefinedVar); // ReferenceError




// 2) TypeError :-  When a variable is not of the expected type.

let num = null;
console.log(num.toString()); // TypeError



// 3) SyntaxError :-  When there's a syntax issue in the code.

try {
  eval("let x = ;"); // SyntaxError
} catch (e) {
  console.error(e.message);
}



// 4) RangeError :-  When a number is out of allowable range.

try {
  let num = 1;
  num.toExponential(101); // RangeError
} catch (e) {
  console.error(e.message);
}



// 5) Custom Error :-  When you define and throw your own error.