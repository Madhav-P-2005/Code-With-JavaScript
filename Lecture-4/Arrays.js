/*

💡) Arrays are a fundamental data structure in JavaScript used to store and manipulate collections of items, such as numbers, strings, objects, or even other arrays.

#  They are Mutable in Nature Not like Strings . 


💡) Definition :-  An array is an ordered collection of items, which can be of any type. Each item in an array is called an element, and each element has an index, starting from 0.

Syntax :-    You can create an array using the array literal syntax or the Array constructor.

   Array Literal:-   let fruits = ['Apple', 'Banana', 'Cherry'];


   Array Constructor :- let fruits = new Array('Apple', 'Banana', 'Cherry');

*/


// Example :- 
let marks = [97,82,75,64,36]

console.log(marks)

console.log(marks.length)       // Property

console.log(typeof marks)       // Output :-  object



// Array Indices  :-  You can access elements in an array using the index notation
let fruits = new Array("Apple", "Banana", "Cherry");

console.log(fruits[0])          // Output :-  Apple

console.log(fruits[3]);         // Output :- undefined

fruits[0] = "Mango"

console.log(fruits)             // Output :- [ 'Mango', 'Banana', 'Cherry' ]     .  Here the Original value will be changed not like Array . 



// Looping Over Array :- 

let heros = ["Spiderman" , "The Dark Knight ", "Thor" , "Iron Man", "Ant Man"]

for(let element of heros){

    console.log(element)

}


/*

Output :- 

Spiderman
The Dark Knight
Thor
Iron Man
Ant Man

*/


// or


for(let element in heros){

    console.log(element)

}


/*

Output :- 

0
1
2
3
4

*/


// or


for(i=0;i<heros.length;i++){

    console.log(heros[i])

}


/*

Output :- 

Spiderman
The Dark Knight
Thor
Iron Man
Ant Man

*/


// Array Methods :- 

// 1) push() :-  Adds one or more elements to the end of an array and returns the new length.

// Example :- 

let fruits1 = ["apple", "banana"];

fruits1.push("orange"); 

console.log(fruits1)               // Output :-  ["apple", "banana", "orange"]




// 2) pop() :-  Removes the last element from an array and returns that element.


// Example :- 

let fruits2 = ["apple", "banana", "orange"];

fruits2.pop();  

console.log(fruits2)                // Output :-  ["apple", "banana"]




// 3) shift() :-  Removes the first element from an array and returns that element.


// Example :- 

let fruits3 = ["apple", "banana", "orange"];

fruits3.shift();                 

console.log(fruits3);               // Output :-  ["banana", "orange"]




// 4) unshift() :-   Adds one or more elements to the beginning of an array and returns the new length.


// Example :- 

let fruits4 = ["banana", "orange"];

fruits4.unshift("apple");   

console.log(fruits4);              // Output :-  ["apple", "banana", "orange"]




// 5) splice() :-  Changes the contents of an array by removing, replacing, or adding elements.


// Syntax :- splice(startIdx , delCount , newElement1....)


// Example :- 

// Replace Element 
let fruits5 = ["apple", "banana", "orange"];

fruits5.splice(1, 1, "mango"); 

console.log("After Deletion ", fruits5);        // Output :- After Deletion  [ 'apple', 'mango', 'orange' ]


// Add Element 
fruits5.splice(0,0,"Grapes","PineApple")

console.log("After Addition ", fruits5)         // Output :- After Addition  [ 'Grapes', 'PineApple', 'apple', 'mango', 'orange' ]


// To Delete an element
fruits5.splice(1,1)

console.log("After Deleting :- ",fruits5)       // Output :- After Deleting :-  [ 'Grapes', 'apple', 'mango', 'orange' ]


fruits5.splice(2);   

console.log("Elements are :- ",fruits5)        // Output :- Elements are :-  [ 'Grapes', 'apple' ]



/*

Output :- 

After Deletion  (3) ['apple', 'mango', 'orange']

After Addition  (5) ['Grapes', 'PineApple', 'apple', 'mango', 'orange']

After Deleting :-  (4) ['Grapes', 'apple', 'mango', 'orange']

Elements are :-  (2) ['Grapes', 'apple']

*/




// 6) slice() :-   Returns a shallow copy of a portion of an array into a new array object


// Example :- 

let fruits6 = ["apple", "banana", "orange"];

let newFruits = fruits6.slice(1, 3); 

console.log("Slice :- ",newFruits);            //  Output:-  ["banana", "orange"]




// 7) concat() :-  Merges two or more arrays into a new array.


// Example :- 

let fruits7 = ["apple", "banana"];

let moreFruits = ["orange", "mango"];

let allFruits = fruits7.concat(moreFruits);  

console.log(allFruits);                       // Output :-  ["apple", "banana", "orange", "mango"]




// 8) indexOf() :-  Returns the first index at which a given element can be found in the array, or -1 if it is not present.


// Example :- 

let fruits8 = ["apple", "banana", "orange"];

console.log(fruits8.indexOf("banana"));       // Output :-  1




// 9) includes() :- Determines whether an array includes a certain value, returning true or false.


// Example :- 

let fruits9 = ["apple", "banana", "orange"];

console.log(fruits9.includes("banana"));     // Output :-  true




// 10) toString() :- This  method converts an array to a string, with array elements separated by commas.


// Example :- 

let fruits10 = ["apple", "banana", "orange"];

console.log(fruits10.toString())            // Output :- apple,banana,orange




// 11) sort() :-  Sorts the elements of an array in place and returns the array.


// Example :- 

let fruits11 = ["banana", "apple", "orange"];

console.log(fruits11.sort());               // Output :-   ["apple", "banana", "orange"]




// 9) includes() :- Determines whether an array includes a certain value, returning true or false.

// Example :- 

let fruits = ["apple", "banana", "orange"];

fruits.includes("banana");                 // Output :-  true