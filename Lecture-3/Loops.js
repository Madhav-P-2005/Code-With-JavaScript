/*

Loops are used in JavaScript to repeatedly execute a block of code as long as a specified condition is true. They are essential for performing repetitive tasks efficiently.

*/


// Types of Loops :- 

// 1) for Loop :- Executes a block of code a specific number of times.

// Syntax :- 
// for (initialization; condition; increment) {
//   // Code to be executed
// }


// Example :- 

for (let i = 0; i < 5; i++) {
  console.log(i, "\t", " "); // Output: 0 1 2 3 4
}
console.log()


// 2) while Loop  :-  Executes a block of code as long as a specified condition is true.

// Syntax :- 
// while (condition) {
    
//   // Code to be executed
// }



// Example :- 

let i = 0;
while (i < 5) {
  console.log(i); // Output: 0 1 2 3 4
  i++;
}
console.log();


// 3) do...while Loop  :-  Executes a block of code at least once, and then repeatedly executes it as long as a specified condition is true.

// Syntax :- 

// do {
//   // Code to be executed
// } while (condition);



// Example :- 

i = 0;
do {
  console.log(i); // Output: 0 1 2 3 4
  i++;
} while (i < 5);




// Q1) Calculate sum of 1 to Numbers  ?
sum = 0
n=5
for(i=0;i<=n;i++){
    sum=sum+i
}

console.log("Sum of 5 numbers is :- ",sum);



// 4) for - of Loop :-  Iterates over iterable objects (like arrays, strings, etc.).  Mostly used in Strings not for Objects .  


// Syntax :- 
// for (let value of iterable) {
//     // Code to be executed
// }


// Example :-

string = "Madhav P"
result = " "
size = 0
for(let i of string){
   result += i + " "
   size++
}
console.log("Result is :- ",result)
console.log("Size is :- ",size)


// 5) for - in Loop :-   Iterates over the properties of an object.


// Syntax :- 
// for (let key in object) {
//     // Code to be executed
// }


// Example :- 
let student = {
    name : "Rahul Kumar",
    age : 20,
    cgpa : 7.5,
    isPass : true
}

for(let key in student){
    console.log("Key = ", key , "Value = " , student[key])
}


// Q1) Print all even numbers from 0 to 100 .
let flag=false
for(i=0;i<=100;i++){
    if(i%2==0){
        console.log(i)
        
    }
}


// Q2) Create a game where you start with any random game number . Ask the user to keep guessing the game number until the user enters correct value ?

function getRandomInteger(min ,max){
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max-min + 1)) + min;
}



/*

// 1) Adding 1 to Include Both min and max :- 

💡) When generating random integers in a range, we need to ensure that both the minimum (min) and maximum (max) values are included in the possible outcomes. Without adding 1, the max value would be excluded because Math.random() generates a number between 0 (inclusive) and 1 (exclusive).

// Example Without Adding 1 :- Let's take a range from 0 to 100 :-

// a)  If we use Math.random() * (max - min), this scales the random value to between 0 and 100 (exclusive).

// b) For instance, if Math.random() returns 0.999, then Math.random() * 100 gives 99.9.

// c) After flooring, it becomes 99, so 100 would never be reached.

// d) Including Both min and max :-
To ensure 100 can be a possible outcome, we add 1:


This makes the effective range size one unit larger :-  

    ⭐) If Math.random() returns 0.999, then Math.random() * 101 gives 100.899.

    ⭐) After flooring, it becomes 100, thus including both 0 and 100.



2)  Why Add min ? :- 


💡) Adding min shifts the range to start from the min value.

Example :-
   Consider generating a random integer between 5 and 10  :-

Step 1 :-  Generate a random number scaled to the range size :-

  ⭐) Math.random() * (max - min + 1)

  ⭐) If Math.random() returns 0.5678 and (max - min + 1) is 6 :-  
  >>  0.5678 * 6 = 3.4068


Step 2 :-  Floor the result to get an integer :-
   
   ⭐) Math.floor(3.4068) = 3


Step 3 :-  Shift by min to get the final result within the desired range :- 
    ⭐) 3 + 5 = 8

*/

let computer = getRandomInteger(0, 100);
console.log("Welcome to the number Guessing Game :-  ")

count = 0
while(true)
    {
    user = prompt("Enter your Number :- ");
    if(user>computer){
        console.log(`${user} is Greater than the actual number :-  ${computer} `);
        count++

    }
    else if(user<computer)
    {
         console.log(`${user} is Lesser than the actual number :- ${computer}  `);
         count++;
    }
    else if(user==computer){
        console.log(`${user} is equal to the  actual number :- ${computer}  . Congrats Guys !! 🥳 `);
        count++;
        break
    }
    else{
        console.log("Invalid Input")
    }
}
