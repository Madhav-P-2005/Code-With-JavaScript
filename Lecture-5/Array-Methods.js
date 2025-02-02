/*

A Map object in JavaScript is a collection of elements where each element is stored as a key-value pair. Unlike objects, Map allows keys of any type, including functions, objects, and primitive types.


*/


// Map Object :- 

// 1) Definition :- A Map object iterates its elements in insertion order, meaning it retains the order in which the elements were added.  


// Syntax :-    let map = new Map();


// 3) Usage  :-   You can add elements to a Map using the set() method .


// Example :- 

let map = new Map();
map.set("a", 1);
map.set("b", 2);
map.set("c", 3);


// a) Accessing Elements :-  Retrieve elements using the get() method.


// Example :- 

let value = map.get('a');            // Output :-  1



// b)  Checking for Elements :-  Check for the existence of a key using the has() method.


// Example :- 
let exists = map.has('b');          // Output :-  true


// c) Deleting Elements :-  Remove elements with the delete() method.


// Example :- 
map.delete("c");


// d) Size of the Map :-  Get the number of elements in a Map with the size property.


// Example :- 
let size = map.size; // 2


// e) Clearing the Map :- Remove all elements using the clear() method.


// Example :- 
map.clear();





// Map Method in Arrays :- 

// 1) Definition :-  Its very similar to forEach() but the only difference is that map() returns a new array so creates a new array .   The map() method is used to create a new array populated with the results of calling a provided function on every element in the calling array.


// Syntax :-    arr.map(callbackFunction(currentValue, index, array), thisArg);


/*

1) currentValue :-  The current element being processed in the array.

2) index (optional) :-  The index of the current element being processed.

3) array (optional) :-  The array on which map was called.

4) thisArg (optional) :-  Value to use as this when executing the callbackFunction.

*/


// Example :- 
let nums1 = [67, 87 ,99]

nums1.map((val) => {

    console.log(val);

})



/* 

Output :- 

67
87
99

*/




// Returns a new Array :- 
let nums = [67, 87, 99];

let newArr = nums.map((val) => {
//   return val

  // or 

  return val*val

  
});


 
console.log(newArr)             // output  :-  [ 67, 87, 99 ]

console.log(newArr)             // Output :-  [ 4489, 7569, 9801 ]


console.log("Original Array :-  ",nums)       // Output :-   Original Array :-   [ 67, 87, 99 ]




//  Where to Use forEach() and Map() ? 

/*

>> ForEach() is used when you want to do some normal Calculations  and to print something normally .

>> Map() is used when you want to use the values to create a new Array .

*/




// 2) Filter() Method :-  The filter() method in JavaScript is a powerful tool for creating a new array that includes only the elements that pass a given test provided by a callback function.


// a) Definition  :-  The filter() method creates a new array with all elements that pass the test implemented by the provided function.  Creates a new array of elements that give true for a condition/filter. 


// Syntax :-   array.filter(callback(element, index, array), thisArg);


// Parameters :- 

/*

1) callback :-  A function that is called for every element in the array. It takes three arguments:

     a) element :-  The current element being processed in the array.

     b) index (optional) :-  The index of the current element being processed.

     c) array (optional) :-  The array filter was called upon.

     d) thisArg (optional) :-   A value to use as this when executing the callback function . 

*/


// Example :- 
let arr = [1, 2 , 3 , 4 , 5 , 6 , 7];

let evenArr = arr.filter((val) =>{

  return val%2==0;

  //or

  return val > 3;             // Output will come :-  [ 4, 5, 6, 7 ]
  
});


console.log(evenArr)                 // Output :-   [ 2, 4, 6 ]

console.log("Original Array :-  ", arr)   


/*

Output :- Original Array :-   [
  1, 2, 3, 4,
  5, 6, 7
]

*/




// 3) Reduce() Method :- The reduce() method in JavaScript is a powerful array method used for accumulating a single result from an array. It applies a function against an accumulator and each element in the array to reduce it to a single value.


// 1) Definition :-  The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.  Perfoms some operations and reduces the array to a single value . It returns that single value . 



// Syntax :-   array.reduce(callback(accumulator, currentValue, index, array), initialValue);



// Parameters :- 

/*

1) callback :-  The function to execute on each element in the array, taking four arguments:

   a) accumulator/result :-  The accumulated value previously returned in the last invocation of the callback, or the initialValue, if supplied.

   b) currentValue  :-   The current element being processed in the array.

   c) index (optional) :-   The index of the current element being processed in the array.

   d) array (optional): The array reduce was called upon.

   e) initialValue (optional): A value to use as the first argument to the first call of the callback. If not supplied, currentValue will start from the first element, and accumulator will be the first element.

*/



// Example :-   

let arr1 = [1,2,3,4];

const output = arr1.reduce((resultValue  , currentValue ) =>{
    return resutltValue + currentValue
})


console.log(output)                // Output :- 10




//  Find the greatest value from the array  ?
let array = [5, 6 ,2 ,1 ,3];
const Ans = array.reduce((previousValue , curr) =>{
  if (curr > previousValue) {
    previousValue = curr;   // Only update if curr is greater.
  } 
  return previousValue;    // Always return the previousValue for next iteration
})

console.log(Ans)                  // Output :-   6


// or


let array2 = [5 , 6 ,2 , 1 ,3];
const Ans2 = array2.reduce((previousValue2 , curr2 ) =>{
    return  previousValue2 > curr2  ? previousValue2 : curr2;
})

console.log(Ans2)                // Output :- 6
 
