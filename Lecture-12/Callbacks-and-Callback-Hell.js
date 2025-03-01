/*

⭐) A callback is a function passed as an argument to another function . 

*/

function sum(a , b){
  console.log(a + b);                   // Output :- 30
}


function calculator(a , b , sumCallBack){
         sumCallBack(a ,b)
}


calculator(10 , 20 , sum)


// Or


calculator(1 , 2 ,(a,b) =>{
  console.log(a + b);                   // Output :- 3
})





//   OR 


// const hello = () =>{
//     console.log("Hello")
// };

// setTimeout(hello , 3000)




/*

⭐)  Callback Hell :-  Nested callbacks stacked below one another forming a pyramid structure . (Pyramid of Doom)   .   This Style of programming becomes difficult to understand and manage . 

*/


function  getData(dataID , getNextData){
  //2s
  setTimeout(() =>{
    console.log("data" , dataID)
        if(getNextData){
      getNextData();
    };
  } , 2000)
}


getData(123)

getData(1 , ()=>{
  console.log("Getting data 2 ...")
  getData(2 , ()=>{
    console.log("Getting data 3 ...");
    getData(3 , ()=>{
      console.log("Getting data 4 ...");
      getData(4)
    })
  })
})


/*

Output :-  

data 1
Getting data 2 ...
data 2
Getting data 3 ...
data 3
Getting data 4 ...
data 4

*/


["Note :- To solve this above issue with callaback Hell  we use Promises .  "]


// Using Promise Chain in Callback Hell  !

function getData(dataID, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data ", dataID);
      resolve("Success");
    }, 2000);
  });
}

getData(1).then((res) => {
  return getData(2);
  })
  .then((res) =>{
    return getData(3)
    .then((res) =>{
      console.log(res);
    })
});


/*

Output :- 

data 1
data 2
data 3
Success

*/