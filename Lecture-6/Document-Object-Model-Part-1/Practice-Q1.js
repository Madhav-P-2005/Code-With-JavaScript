let Append = document.querySelector("h2");
 
console.dir(Append);       // Output :-  h2


console.dir(Append.innerText);       // Output :-  Hello JavaScript


console.log(Append);       // Output :-  <h2> Hello JavaScript </h2>



Append.innerText =  Append.innerText + " " + "from Apna College Students";


/*

Output :-   <h2>Hello JavaScript from Apna College Students</h2>

*/