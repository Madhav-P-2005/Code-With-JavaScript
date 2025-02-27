/*

⭐) The Fetch API provides an interface for fetching (sending / receiving) resources .  It uses Request and Response objects .    The fetch() method is used to fetch a resource (data).

*/


// Syntax :-   let promise = fetch(url , [options])



const URL = "https://cat-fact.herokuapp.com/facts";

let promise = fetch(URL);

// console.log(promise);


/*

Output :-

Promise {<pending>}
[[Prototype]]: Promise
[[PromiseState]] : "fulfilled"[[PromiseResult]] : Response

*/


let factPara = document.querySelector("#fact")

let button1  =  document.querySelector("#btn")


// const getFacts = async () =>{
//   console.log("Getting Data .... ");
//   let response = await fetch(URL);
//   console.log(response); // JSON format
//   console.log(response.status); // Output :- 200

//   let data = await response.json();
//   console.log(data[0].text); //  Output :-   Owning a cat can reduce the risk of stroke and heart attack by a third.


 
//   factPara.innerText =  data[0].text;
// }

// button1.addEventListener("click", getFacts);

// console.log(getFacts())


/*

Output :- 

Getting Data ...
Promise {<pending>}

Response {
  type: 'cors',
  url: 'https://cat-fact.herokuapp.com/facts',
  redirected: false,
  status: 200,
  ok: true,
  ...
}

*/



function getFacts(){
    fetch(URL)
    .then((response) =>{
        return response.json();
    })
    .then((data) =>{
        console.log(data);
        factPara.innerText = data[2].text;
    });
}

button1.addEventListener("click", getFacts);


/*

Output :- 

Domestic cats spend about 70 percent of the day sleeping and 15 percent of the day grooming.

*/ 


