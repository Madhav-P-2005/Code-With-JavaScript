/*

Q 5)  Take a number n as input from user. Create an array of numbers from 1 to n.


   a)  Use the reduce method to calculate product of all numbers in the array.


   b) Use the reduce method to calculate sum of all numbers in the array.


*/



array = [];
count = parseInt(prompt("Enter the size you want :- ? "));


for (i = 1; i <=count; i++) {

//   n = parseInt(prompt("Enter your number :-  "));

//   array.push(n);

    array[i-1] = i
   
}

console.log("Complete array :- ", array);



/*


Output :- 

Enter the size you want :- ?   5


Complete array :-   (5) ["1", "2", "3", "4", "5"]



*/






// Ans b) :- 



const product = array.reduce((previousValue, currentValue) =>{

    return previousValue*currentValue

})

console.log("Product/Factorial of all the numbers in array is :- ", product)




/*

Output :- 

Product of all the numbers in array is :-  120

*/





// Ans a) :- 



const sum = array.reduce((previousValue, currentValue) => {
  return  previousValue+currentValue
});


console.log("Sum of all the numbers in array is :- ", sum);



/*

Output :-    

Sum of all the numbers in array is :-  15



*/
