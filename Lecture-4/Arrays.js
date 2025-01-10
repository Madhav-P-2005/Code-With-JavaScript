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
console.log(marks.length)    // Property

console.log(typeof marks)  // Output :-  object


// Array Indices  :-  You can access elements in an array using the index notation
let fruits = new Array("Apple", "Banana", "Cherry");

console.log(fruits[0])   // Output :-  Apple
console.log(fruits[3]);  // Output :- undefined

fruits[0] = "Mango"
console.log(fruits)  // Output :- [ 'Mango', 'Banana', 'Cherry' ]     .  Here the Original value will be changed not like Array . 



// Looping Over Array :- 

let heros = ["Spiderman" , "The Dark Knight ", "Thor" , "Iron Man", "Ant Man"]
for(let element of heros){
    console.log(element)
}
// Output :- 
/*
Spiderman
The Dark Knight
Thor
Iron Man
Ant Man
*/

//or

for(let element in heros){
    console.log(element)
}
// Output :- 
/*
0
1
2
3
4
*/

//or

for(i=0;i<heros.length;i++){
    console.log(heros[i])
}
// Output :- 
/*
Spiderman
The Dark Knight
Thor
Iron Man
Ant Man
*/


