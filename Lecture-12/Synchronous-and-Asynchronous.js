// Synchronous  Programming 


// console.log("First")

// console.log("Second")

// console.log("Third")




// Asynchronous Programming 

/*

💡) Conclusion :-   async await >> promise chains >> callback hell

*/


// Way 1 :- 

// function hello(){
//     console.log("Hello")            // Output :-  Hello
// }

// setTimeout(hello , 2000)           // 2 m  =  2000ms



// Way 2 :- 

// setTimeout(() => {
//     console.log("Hello")          // Output :- Hello 
// }, 2000);



// Way 3
console.log("One")
console.log("Two")
setTimeout(() => {
    console.log("Hello")
}, 4000);
console.log("Three");
console.log("Four");



/*

Output :-  One
           Two
           Three
           Four
           Hello

*/