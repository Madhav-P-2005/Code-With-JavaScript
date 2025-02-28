/*

⭐) Async Function always returns a promise .   Await pauses the execution of its surrounding async function until the promise is settled . 

*/

// Syntax :-   async function myFunc(){...}


// Example :- 
async function hello(){
    console.log("hello")
}


/*

Output :- 

hello 

Promise {<fulfilled>: undefined}
  [[Prototype]]: Promise,
  [[PromiseState]]: "fulfilled",
  [[PromiseResult]]: undefined

*/


function api(){
    return new Promise((resolve , reject) =>{
        setTimeout(() =>{
                console.log("Weather data");
                resolve(200);
        },2000)
        
    })
}



async function getWeatherData() {
    await api();      // 1st 
    await api();      // 2nd
}



/*

Output :- 

Promise {<pending>}
  [[Prototype]]: Promise,
  [[PromiseState]]: "pending",
  [[PromiseResult]]: undefined

2 Weather data

*/


// Async-Await 

function getData(dataId){
    return new Promise((resolve , reject) =>{
        setTimeout(() =>{
            console.log("Data " , dataId)
            resolve("Success")
        },2000)
    })
}



async function getAllData(){
    await getData(1);
    await getData(2);
    await getData(3);
}


/*

Output :- 

Promise {<pending>}
  [[Prototype]]: Promise,
  [[PromiseState]]: "fulfilled",
  [[PromiseResult]]: undefined

Data 1
Data 2
Data 3

*/



["Note :- Maximum scenarios we use Async - Await only but we will use .then and .catch some times  !! "]



// 💡) In Async - Await  we call the function then only its runs to solve this we use :- 


/*

⭐) IIFE :- Immediately Invoked Function Expression 

⭐) IIFE is a function that is called immediately as soon as it is defined . 

*/


(async function getAllData() {
  await getData(1);
  await getData(2);
  await getData(3);
})();


["Note :- Automatically executes ... it no need to call ."]

/*

Output :- 

Promise {<pending>}
  [[Prototype]]: Promise,
  [[PromiseState]]: "fulfilled",
  [[PromiseResult]]: undefined

Data 1
Data 2
Data 3

*/