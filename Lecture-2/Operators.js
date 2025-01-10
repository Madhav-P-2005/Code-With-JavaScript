// Operators :- Operators are symbols that perform operations on variables and values. Here’s a comprehensive overview of operators in JavaScript.


// Types of Operators in JavaScript ?



// 1) Arithmetic Operators :- These operators are used to perform arithmetic calculations.

// Example :- 

let a = 5;
let b = 2;
console.log("a  = ", a, " & b  = ", b);
console.log("Sum : - ", "a + b  =   ", a + b); // 7
console.log("Difference : - ", "a - b  =   ", a - b); // 3
console.log("Product : - ", "a * b  =   ", a * b); // 10
console.log("Division : - ", "a / b  =   ", a / b); // 2.5
console.log("Modules : - ", "a % b  =   ", a % b); // 1
console.log("Exponentiation : - ", "a ** b  =   ", a ** b); // 25




// Unary Operators :- Unary operators are operators that take a single operand and perform an operation on it. Types :- 

// 1) Increment :-  Increases its operand by one.
// 2) Decrement  :-  Decreases its operand by one.

console.log("Post-Increment :-  ", a++);   // Output: 5 -> a is now 6
console.log("Pre-Increment  :-  ", ++a);   // Output: 7 -> a is now 7
console.log("Post-Decrement :-  ", a--);   // Output: 7 -> a is now 6
console.log("Pre-Decrement  :-  ", --a);   // Output: 5 -> a is now 5

console.log(" :-  ", a++);
console.log(":-  ", a++);




// 2) Comparison Operators :-  These operators compare two values and return a boolean (true or false).

// Example :- 
a = 5;
b = '5';
let c = 10;

console.log("Equal (a == b):", a == b); // Output: true
console.log("Not Equal (a != b):", a != b); // Output: false
console.log("Strict Equal (a === b):", a === b); // Output: false
console.log("Strict Not Equal (a !== b):", a !== b); // Output: true
console.log("Greater Than (c > a):", c > a); // Output: true
console.log("Less Than (a < c):", a < c); // Output: true
console.log("Greater Than or Equal (c >= a):", c >= a); // Output: true
console.log("Less Than or Equal (a <= c):", a <= c); // Output: true




// 3) Logical Operators :- These operators are used to perform logical operations.

let isAdult = true;
let hasID = false;

console.log("Logical AND (isAdult && hasID):", isAdult && hasID); // Output: false
console.log("Logical OR (isAdult || hasID):", isAdult || hasID); // Output: true
console.log("Logical NOT (!isAdult):", !isAdult); // Output: false

// Complex Condition
let age = 25;
let hasDrivingLicense = true;
let canRentCar = (age >= 21 && hasDrivingLicense) || (age >= 18 && !hasDrivingLicense);
console.log("Can Rent Car (complex condition):", canRentCar); // Output: true




// 4) Assignment Operators :- These operators are used to assign values to variables.

// Example :- 
a = 5;
b = 2;

console.log("Assignment (a = b) : ", a = b); // Output: 2
console.log("Addition Assignment (a += b) : ", a += b); // Output: 4
console.log("Subtraction Assignment (a -= b) : ", a -= b); // Output: 2
console.log("Multiplication Assignment (a *= b) : ", a *= b); // Output: 4
console.log("Division Assignment (a /= b) : ", a /= b); // Output: 2
console.log("Modulus Assignment (a %= b) : ", a %= b); // Output: 0
console.log("Exponentiation Assignment (a **= b) : ", a = 2, a **= b); // Output: 4




// 5) Bitwise Operators  :- These operators are used to perform bitwise / bit - level  calculations on binary numbers.

// Example :- 
a = 5;  // Binary: 0101
b = 3;  // Binary: 0011

console.log("Bitwise AND (a & b):", a & b); // Output: 1
console.log("Bitwise OR (a | b):", a | b); // Output: 7
console.log("Bitwise XOR (a ^ b):", a ^ b); // Output: 6
console.log("Bitwise NOT (~a):", ~a); // Output: -6
console.log("Left Shift (a << 1):", a << 1); // Output: 10
console.log("Right Shift (a >> 1):", a >> 1); // Output: 2
console.log("Unsigned Right Shift (a >>> 1):", a >>> 1); // Output: 2




// Bitwise Operators  Detailed Explanation :-


// a) Bitwise AND (&) :-  Performs a bitwise AND operation, where each bit in the result is set to 1 if the corresponding bits of both operands are 1.

// Example :- 

let num1 = 5;  // Binary: 0101
let num2 = 3;  // Binary: 0011
let result = num1 & num2; // Binary: 0001
console.log(result); // Output: 1


/*

Explanation :- 

0101   (binary for 5)
AND
0011   (binary for 3)
----
0001   (result: 1 in decimal)

*/



// b) Bitwise OR (|)  :-  Performs a bitwise OR operation, where each bit in the result is set to 1 if at least one of the corresponding bits of the operands is 1.



// Example :- 

a = 5;  // Binary: 0101
b = 3;  // Binary: 0011
result = a | b; // Binary: 0111
console.log(result); // Output: 7



/*

Explanation :- 

0101   (binary for 5)
OR
0011   (binary for 3)
----
0111   (result: 7 in decimal)

*/




// c) Bitwise XOR (^)   :-  Performs a bitwise OR operation, where each bit in the result is set to 1 if at least one of the corresponding bits of the operands is 1.


// Example :- 

a = 5;  // Binary: 0101
b = 3;  // Binary: 0011
result = a ^ b; // Binary: 0110
console.log(result); // Output: 6


/*

Explanation :- 

0101   (binary for 5)
XOR
0011   (binary for 3)
----
0110   (result: 6 in decimal)


*/




// d) Bitwise NOT (~)  :-  Performs a bitwise NOT operation, inverting the bits of its operand.

// Example :- 

a = 5;  // Binary: 0101
result = ~a; // Binary: 1010 (inverted)
console.log(result); // Output: -6 (in two's complement form)



/*

Explanation :- 

0101   (binary for 5)
NOT
----
1010   (inverted result: -6 in decimal, two's complement form)

*/




// e) Left Shift (<<)  :-  Shifts the bits of its operand to the left by the specified number of positions. The leftmost bits are filled with zeros.


// Example :- 

a = 5;  // Binary: 0101
result = a << 1; // Binary: 1010
console.log(result); // Output: 10



/*

Explanation :- 

0101   (binary for 5)
<< 1  (left shift by 1 bit)
----
1010   (result: 10 in decimal)

*/



// f) Right Shift (>>)   :-  Shifts the bits of its operand to the right by the specified number of positions. The leftmost bits are filled with the original sign bit (sign-propagating).

// Example :- 

a = 5;  // Binary: 0101
result = a >> 1; // Binary: 0010
console.log(result); // Output: 2



/*

Explanation :- 

0101   (binary for 5)
>> 1  (right shift by 1 bit)
----
0010   (result: 2 in decimal)

*/



// g) Unsigned Right Shift (>>>) :-   Shifts the bits of its operand to the right by the specified number of positions. The leftmost bits are filled with zeros (zero-filling).


// Example :- 

a = -5;  // Binary: 11111111111111111111111111111011 (32-bit representation)
result = a >>> 1; // Binary: 01111111111111111111111111111101
console.log(result); // Output: 2147483645


/*

Explanation :- 

11111111111111111111111111111011   (binary for -5, 32-bit representation)
>>> 1  (unsigned right shift by 1 bit)
----
01111111111111111111111111111101   (result: 2147483645 in decimal)


*/




// 6) String Operators  :- String operators in JavaScript are primarily used to manipulate and handle string values . 


// a) Concatenation (+) :-  Joins two or more strings together.


// Syntax :- let result = string1 + string2;


// Example :- 
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName); // Output: "John Doe"


// b) Concatenation Assignment (+=) :-   Appends a string to another string and assigns the result to the first string. 


// Syntax :-  string1 += string2;


// Example :-

message = "Hello";
message += ", world!";
console.log(message); // Output: "Hello, world!"




// c) Template Literals (Backticks `) :-   Allows embedding expressions within strings.


// Syntax :-  let result = `String text ${expression}`;


// Example :-

let name = "John";
let greeting = `Hello, ${name}!`;
console.log(greeting); // Output: "Hello, John!"




// d) String Methods (for manipulation) :-    String methods are not operators, but they are essential for handling string values effectively.


// i) length()   :-  Returns the length of the string.

// Syntax :-   string.length;

// Example :-

let Text = "Hello";
console.log(Text.length); // Output: 5




// ii) toUpperCase()   :-  Converts all characters in the string to uppercase.


// Syntax :-   string.toUpperCase();


// Example :-

text = "Hello";
console.log(text.toUpperCase()); // Output: "HELLO"




// iii) toLowerCase()   :-  Converts all characters in the string to lowercase.


// Syntax :-  string.toLowerCase();


// Example :-

text = "Hello";
console.log(text.toLowerCase()); // Output: "hello"




// iv) slice()   :-  Extracts a part of a string and returns it as a new string.

// Syntax :-  string.slice(start, end);


// Example :-

text = "Hello, world!";
let slicedText = text.slice(7, 12);
console.log(slicedText); // Output: "world"




// v) substring() :-  Extracts characters from a string, between two specified indices.


// Syntax :-   string.substring(start, end);


// Example :- 

text = "Hello, world!";
let substringText = text.substring(7, 12);
console.log(substringText);   // Output: "world"

// vi) substr() :-  Extracts characters from a string, starting at a specified index, and returns the specified number of characters.

// Syntax :-  string.substr(start, length);

// Example :- 

text = "Hello, world!";
let substrText = text.substr(7, 5);
console.log(substrText); // Output: "world"




// vii) replace() :-  Searches for a match between a regular expression and a string, and replaces the matched substring with a new substring.


// Syntax :-  string.replace(searchValue, newValue);


// Example :- 

text = "Hello, world!";
newText = text.replace("world", "JavaScript");
console.log(newText); // Output: "Hello, JavaScript!"




// viii) concat() :-  Joins two or more strings, and returns a new string.


// Syntax :-  string.concat(string2, string3, ..., stringX);



// Example :- 

let text1 = "Hello";
let text2 = "world";
let text3 = text1.concat(", ", text2, "!");
console.log(text3); // Output: "Hello, world!"




// ix) trim() :-  Removes whitespace from both ends of a string.


// Syntax :-  string.trim();


// Example :- 

let text = "   Hello, world!   ";
let trimmedText = text.trim();
console.log(trimmedText); // Output: "Hello, world!"



// x) split() :-  Splits a string into an array of substrings, and returns the array.


// Syntax :-  string.split(separator, limit);


// Example :- 

text = "Hello, world!";
arrayOfStrings = text.split(" ");
console.log(arrayOfStrings); // Output: ["Hello,", "world!"]


// xi) includes() :-  Checks if a string contains a specified substring.


// Syntax :-  string.includes(substring, start);


// Example :- 

text = "Hello, world!";
result = text.includes("world");
console.log(result); // Output: true



// xii) startsWith() :-  Checks if a string begins with a specified substring.


// Syntax :-  string.startsWith(substring, start);



// Example :- 

text = "Hello, world!";
result = text.startsWith("Hello");
console.log(result); // Output: true



// xiii) endsWith() :-  Checks if a string ends with a specified substring.


// Syntax :-  string.endsWith(substring, length);


// Example :- 

text = "Hello, world!";
result = text.endsWith("world!");
console.log(result); // Output: true

// xiv) charAt() :-  Returns the character at a specified index in a string.

// Syntax :-  string.charAt(index);


// Example :- 

text = "Hello, world!";
char = text.charAt(7);
console.log(char); // Output: "w"



// xv) charCodeAt() :-  Returns the Unicode of the character at a specified index in a string.


// Syntax :-  string.charCodeAt(index);



// Example :- 

text = "Hello, world!";
let unicode = text.charCodeAt(7);
console.log(unicode); // Output: 119 (Unicode of 'w')








// 8) Type Operators :- 



