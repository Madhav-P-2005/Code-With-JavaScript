/*

 ⭐)  Promise for "eventual" completion of task. It is an object in JS .  It is a solution to callback hell .

*/

// Syntax
// let promise = new Promise((resolve , reject) => {...})

["Note :-  Resolve and reject are callbacks provided by JS"];

let promise = new Promise((resolve, reject) => {
  console.log("I am a promise");
});

console.log(promise);

/*

Output :- 

Promise {<pending>}
  [[Prototype]]: Promise,
  [[PromiseState]]: "pending",
  [[PromiseResult]]: undefined

*/

/*

Promise has 3 states :-    1) Pending 
                           2) Fulfilled [resolved]
                           3) Rejected 

*/

let promise2 = new Promise((resolve, reject) => {
  console.log("I am a promise");
  resolve(123);
});

console.log(promise2);

/*

Output :- 

Promise {<fulfilled>: 123}
  [[Prototype]]: Promise,
  [[PromiseState]]: "fulfilled",
  [[PromiseResult]]: 123

*/

let promise3 = new Promise((resolve, reject) => {
  console.log("I am a promise");
  resolve(123);
  reject("Some error occured ");
});

console.log(promise3);

/*

Output :- 

Promise {<rejected>: 'Some error occurred'}
  [[Prototype]]: Promise,
  [[PromiseState]]: "rejected",
  [[PromiseResult]]: "Some error occurred"

*/

function getData(dataID, getNextData) {
  //2s
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataID);
      resolve("Success");
      if (getNextData) {
        getNextData();
      }
    }, 5000);
  });
}
let result = getData(123);

result;

/*

Output :- 

Promise {<pending>}
  [[Prototype]]: Promise,
  [[PromiseState]]: "pending",
  [[PromiseResult]]: undefined

  data 123

*/

result;

/*

Output :- 

Promise {<fulfilled>: 'Success'}
  [[Prototype]]: Promise,
  [[PromiseState]]: "fulfilled",
  [[PromiseResult]]: "Success"

*/

function getData(dataID, getNextData) {
  //2s
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataID);
      reject("Some error occured ");
      if (getNextData) {
        getNextData();
      }
    }, 5000);
  });
}
let result2 = getData(123);

result2;

/*

Output :- 

Promise {<pending>}
  [[Prototype]]: Promise,
  [[PromiseState]]: "pending",
  [[PromiseResult]]: undefined

  data 123

*/

result;

/*

Output :- 

Promise {<rejected>: 'Some error occurred'}
  [[Prototype]]: Promise,
  [[PromiseState]]: "rejected",
  [[PromiseResult]]: "Some error occurred"

*/

// How to Use Promises ?

/*

1) promise.then((res) =>{....}) :-   It will be executed only when our promise gets fulfilled. And it has one parameter res. 


2) promise.catch((err) =>{...})  :- It will be executed only when our promise gets Rejected. It has one parameter err . 

*/

const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("I am a promise");
    resolve("success");
  });
};

let promise4 = getPromise();
promise4.then((res) => {
  console.log("Promise fulfilled  :-  ", res);
});

/*

Output :- 

I am a promise 
Promise fulfilled  :- success

Promise {<fulfilled>: undefined}
  [[Prototype]]: Promise,
  [[PromiseState]]: "fulfilled",
  [[PromiseResult]]: undefined

*/

promise5.catch((err) => {
  console.log("Rejected  :- ", err);
});

const getPromise2 = () => {
  return new Promise((resolve, reject) => {
    console.log("I am a promise");
    reject("Some error has occured ");
  });
};


let promise5 = getPromise2();
promise5.then((res) => {
  console.log("Promise fulfilled :- ", res);
});



/*

Output :- 

I am a promise

Promise {<rejected>: 'Some error has occurred'}
  [[Prototype]]: Promise,
  [[PromiseState]]: "rejected",
  [[PromiseResult]]: "Some error has occurred"

*/


promise5.catch((err) => {
  console.log("Rejected :- ", err);
});


/*

Output :-    Rejected :-  Some error has occured 

*/



// Without Promise Chains .. 

function asyncFun1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data1");
      resolve("Success");
    }, 4000);
  });
}

console.log("Fetching Data...");
let p1 = asyncFun1();
p1.then((res) => {
  console.log(res);
});

function asyncFun2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data2");
      resolve("Success");
    }, 4000);
  });
}

console.log("Fetching Data...");
let p2 = asyncFun2();
p2.then((res) => {
  console.log(res);
});


/*

Output :- 

Fetching Data...
Fetching Data...

Promise {<pending>}

data1
Success
data2
Success

*/



/*

⭐) Promise Chains :- 

*/


function asyncFun1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data1");
      resolve("Success");
    }, 4000);
  });
}

console.log("Fetching Data 1...");
let chain1 = asyncFun1();
chain1.then((res) => {
  console.log("Fetching Data 2...");
  let p2 = asyncFun2();
  p2.then((res) => {});
});

// or 

console.log("Fetching Data 1...");
asyncFun1().then((res) =>{
  console.log("Fetching Data 2...");
  asyncFun2().then((res) => {});
});


/*

Output :- 

Fetching Data 1...
Promise {<pending>}
data1
Fetching Data 2...
data2

*/