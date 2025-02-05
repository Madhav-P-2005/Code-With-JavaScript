let div1 = document.querySelector("body").children[0].innerText = "Modified  Div 1 Successfully 🥳"

console.dir(div1)      // Output :-  Modified  Div 1 Successfully 🥳



let div2 = document.querySelector("body").children[1].innerHTML = "Modified Div 2 Successfully 🥳";


console.dir(div2);       // Output :- Modified  Div 2 Successfully 🥳



let div3 = document.querySelector("body").children[2].innerHTML = "Modified Div 3 Successfully 🥳";


console.dir(div3);        // Output :- Modified  Div 3 Successfully 🥳




/*

Madam's Method 1 :- 

let divs = document.querySelectorAll(".box");

divs[0].innerText = "new unique value 1";

divs[1].innerText = "new unique value 2";

divs[2].innerText = "new unique value 3";




Madam's Method 2 :- 

let index = 1;
for(div of divs){
    div.inneText = `new unique value ${index}`;
    index++;
}

*/