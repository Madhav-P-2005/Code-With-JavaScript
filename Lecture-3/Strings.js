/*

Strings are a fundamental data type in JavaScript, used to represent textual data. They are immutable and can be manipulated using various methods and properties.


1) Declaration :- Strings can be declared using single quotes ('...'), double quotes ("..."), or backticks (`...`).

// Example :- 

let singleQuote = 'Hello';
let doubleQuote = "World";
let templateLiteral = `Hello, ${doubleQuote}`;



2) Properties :-  Returns the length of the string.

let str = "Hello";
console.log(str.length); // Output: 5




3) Methods :-  Returns the character at the specified index.

 i) length()   :-  Returns the length of the string.

  Syntax :-   string.length;

  Example :-

let Text = "Hello";
console.log(Text.length); // Output: 5




 ii) toUpperCase()   :-  Converts all characters in the string to uppercase.


  // Syntax :-   string.toUpperCase();


  // Example :-
  text = "Hello";
  console.log(text.toUpperCase()); // Output: "HELLO"




 iii) toLowerCase()   :-  Converts all characters in the string to lowercase.


  Syntax :-  string.toLowerCase();


  Example :-

   text = "Hello";
   console.log(text.toLowerCase()); // Output: "hello"




 iv) slice()   :-  Extracts a part of a string and returns it as a new string.

   Syntax :-  string.slice(start, end);


   Example :-
  
    text = "Hello, world!";
    let slicedText = text.slice(7, 12);
    console.log(slicedText); // Output: "world"




 v) substring() :-  Extracts characters from a string, between two specified indices.


   Syntax :-   string.substring(start, end);


   Example :- 

      text = "Hello, world!";
      let substringText = text.substring(7, 12);
      console.log(substringText);   // Output: "world"



 vi) substr() :-  Extracts characters from a string, starting at a specified index, and returns the specified number of characters.

    Syntax :-  string.substr(start, length);

    Example :- 

        text = "Hello, world!";
        let substrText = text.substr(7, 5);
        console.log(substrText); // Output: "world"




 vii) replace() :-  Searches for a match between a regular expression and a string, and replaces the matched substring with a new substring.


  Syntax :-  string.replace(searchValue, newValue);


  Example :- 

     text = "Hello, world!";
     newText = text.replace("world", "JavaScript");
     console.log(newText); // Output: "Hello, JavaScript!"




 viii) concat() :-  Joins two or more strings, and returns a new string.


   Syntax :-  string.concat(string2, string3, ..., stringX);

  
   Example :- 

        let text1 = "Hello";
        let text2 = "world";
        let text3 = text1.concat(", ", text2, "!");
        console.log(text3); // Output: "Hello, world!"




 ix) trim() :-  Removes whitespace from both ends of a string.


  Syntax :-  string.trim();


  Example :- 

      let text = "   Hello, world!   ";
      let trimmedText = text.trim();
      console.log(trimmedText); // Output: "Hello, world!"



 x) split() :-  Splits a string into an array of substrings, and returns the array.


   Syntax :-  string.split(separator, limit);


   Example :- 

        text = "Hello, world!";
        arrayOfStrings = text.split(" ");
        console.log(arrayOfStrings); // Output: ["Hello,", "world!"]



 xi) includes() :-  Checks if a string contains a specified substring.


  Syntax :-  string.includes(substring, start);


  Example :- 

        text = "Hello, world!";
        result = text.includes("world");
        console.log(result); // Output: true



 xii) startsWith() :-  Checks if a string begins with a specified substring.


     Syntax :-  string.startsWith(substring, start);



     Example :- 

         text = "Hello, world!";
         result = text.startsWith("Hello");
         console.log(result); // Output: true



 xiii) endsWith() :-  Checks if a string ends with a specified substring.


   Syntax :-  string.endsWith(substring, length);


   Example :- 
       
        text = "Hello, world!";
        result = text.endsWith("world!");
        console.log(result); // Output: true



 xiv) charAt() :-  Returns the character at a specified index in a string.

    Syntax :-  string.charAt(index);


    Example :- 

         text = "Hello, world!";
         char = text.charAt(7);
         console.log(char); // Output: "w"



  xv) charCodeAt() :-  Returns the Unicode of the character at a specified index in a string.


   Syntax :-  string.charCodeAt(index);

   Example :- 

        text = "Hello, world!";
        let unicode = text.charCodeAt(7);
        console.log(unicode); // Output: 119 (Unicode of 'w')

*/

// Create str :- 
let str = "Shradha Khapra Mam"
let str2 = "Madhav P"


// String Properties ;= 

 
console.log(str2.length)   // Output :-  8


// Indexing :- 

console.log(str2[0])   // Output :- M
console.log(str2[10])  // Output :- undefined



// obj
let obj ={
  item:"pen",
  price:10,
};


let output = `The cost of ${obj.item} is ${obj.price} rupees `;
console.log("The Template Literal Example :- ",output)  // Output :- The Template Literal Example :-  The cost of pen is 10 rupees


console.log("The cost of ",obj.item , "is" , obj.price) // Output :- The cost of pen is 10


// >> This Phenomena is called " String Interpolation ". 

// Template Literals 

let specialString = `This is a template Literal`;
console.log(specialString);  // output :- This is a template Literal

let specialStringNumbers = `This is a template Literal :-  ${1 + 2 + 3}`
console.log(specialStringNumbers)   // Output :-  This is a template Literal :-  6


// Escape Characters :-  Special characters in strings can be escaped using a backslash (\).
let str1 = "Apna\tcollege";   
console.log(str1);   // Output :- Apna    college

console.log(str1.length);   // Output :- 12

let escapedStr = "He said, \"Hello!\"";
console.log(escapedStr); // Output: He said, "Hello!"



// String Methods :-   These are build - in functions to manipulate a String 

let User = "  Why do we Fall ?   ";

// Here Methods will not change the Value of the  Original String . 

console.log("Convert to upperCase()    :-  ",User.toUpperCase());   // Output :- Convert to upperCase :-   WHY DO WE FALL ?


console.log("Convert to lowerCase()   :-  ",User.toLowerCase());  // Output :- Convert to upperCase :-   why do we fall ?


console.log("To Trim()  :-  ",User.trim());   // Output :- Convert to upperCase :-   WHY DO WE FALL ?


let Slice = "abcdefg"

console.log("To Slice()  a String  :-  ",Slice.slice(0 , 4))  // Output :- To Slice a String  :-   abcdefg


let string1 = "Madhav"
let string2 = "P"
let result = string1.concat(string2);
console.log("To Concat() / join  :-    ",result)   // Output :- To Concat / join  :-   MadhavP

console.log(
  "To Replace()  :-   ",
  User.replace("  Why do we Fall ?   ", "The Dark Knight ")
);   // Output :- To Replace :-    The Dark Knight


let  User2 = "Why Why  , Do we Fall ?"
console.log(
  "To ReplaceAll()  :-   ",
  User2.replaceAll("Why", "Bruce")
);   // Output :-  To Replace :-    Bruce Bruce  , Do we Fall ?


console.log("To find CharAt() :-   ",User.charAt(4))   // Output :- Convert to upperCase :-   WHY DO WE FALL ?


User[0] = "S"
console.log("String Manipulation :-  ",User)  // Output :-  Cannot Achieve because Original String will not Change  so Use Replace() method only .

// console.log("Convert to upperCase :-  ",User.())   // Output :- Convert to upperCase :-   WHY DO WE FALL ?


