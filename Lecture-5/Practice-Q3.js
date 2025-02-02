/*

Q3) For a given array of numbers, print the square of each value using the forEach loop

*/

let array_of_numbers = [2,4,5,6,10,9];

array_of_numbers.forEach(function square(num){

    return console.log(num*num);

})



/*

Output :- 

4
16
25
36
100
81

*/


// or 



array_of_numbers.forEach((num) =>{
    console.log(num*num)
})



/*
 
Output :- 

4
16
25
36
100
81

*/



// other way 
let nums = [67 , 53 , 39];

let calcSquare = (num) =>{
    console.log(num*num)
}

nums.forEach(calcSquare)



/*

Output :- 

4489
2809
1521

*/