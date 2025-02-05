alert("Hello");
console.log("hello");

document.body.style.background = "Blue";

console.dir(document);      // output :- #document

console.dir(document.body);      // Output :- body

console.log(document.body);   // Output :-    <body> ... </body>




console.log(document.body.childNodes[1])       // Output :-  h1



document.style.body.background = "blue";

 
document.body.childNodes[3].innerText = "Madhav";              // Output :-   <h4> content  turned to :-  'Madhav' in the browser window . 





// Accessing elements 


// 1) Selecting with id ---> getElementById()  :- 

let head = document.getElementById("heading");  


console.log(head)      // Output :-   <h1 id="heading"> Document Object Model  Demo by Apna College  </h1>

console.dir(head)       // Output :-   h1#heading


["Note :- When there is no id refered to an element then output will be =>  null "]




// 2) Selecting With Class --->  getElementsByClassName("myClass")  :-   This returns an HTMLCollection very similar to an Array . 


let Class_Example2 = document.getElementsByClassName("myClass");

let Class_Example = document.getElementsByClassName("myClass");

console.dir(Class_Example2)      // Output :-    HTMLCollection(2)


console.log(Class_Example2)     // Output :-   HTMLCollection(2) [h1.myClass, h4.myClass]


["Note :- When there is no class refered to an element then output will be =>    HTMLCollection [0] and  HTMLCollection [] "];





// 3) Selecting with tag ---> document.getElementsByTagName("p")  :- 


let parahs = document.getElementsByTagName("p");

console.dir(parahs);     // Output :-  HTMLCollection(2)


console.log(parahs);     // Output :- HTMLCollection(2) [p, p]


["Note :- Most Prefered way than these three is 'Query Selector' "]




// Query Selectors :- The querySelector() and querySelectorAll() methods in JavaScript allow you to select HTML elements using CSS selectors. These methods provide a more flexible way to find elements compared to older methods like getElementById() or getElementsByClassName().


// ["Note :-  Query Selector returns NodeList "]


/*

Definition  :-    a)  The querySelector() method returns the first matching element based on the specified CSS selector.

                  b) The querySelectorAll() method returns a NodeList of all matching elements.

*/




// Syntax :- 

// 1)  Selecting a Single Element (querySelector()) :-    Returns only the first matching element.  


// let element = document.querySelector("CSS_SELECTOR");


let firstEL = document.querySelector("p");

console.dir(firstEL);     // Output :-  p


firstEL                   // Output :- <p>...</p>


firstEL.tagName           // Output :- 'P'


let firstEL2 = document.querySelector(".myClass");

console.dir(firstEL2);     // Output :-  h1.myClass


let firstEL3 = document.querySelector("#heading");

console.dir(firstEL3);     // Output :-  h1#heading



// 2)  Selecting Multiple Elements (querySelectorAll())  :-   Returns all matching elements as a NodeList (similar to an array).


let elements = document.querySelectorAll("CSS_SELECTOR");

let allEl = document.querySelectorAll("p");        // All elements    


console.dir(allEl);      

/*

Output :- 

NodeList(2) 
        0: p  
        1: p  
        length: 2  
        [[Prototype]]: NodeList  

*/





let allEl2 = document.querySelectorAll(".myClass");        // All elements    


console.dir(allEl2);      

/*

Output :- 

NodeList(2) 
          0: h1.myClass  
          1: h4.myClass  
          length: 2  
          [[Prototype]]: NodeList  

*/





let allEl3 = document.querySelectorAll("#heading");        //  It does make sense as id is unique so does not work 


console.dir(allEl3);      


/*

Output :-  

NodeList(2) 
        0: h1#heading  
        1: button#heading  
        length: 2  
        [[Prototype]]: NodeList


*/





// How Query Selector Works ? 

/* 

1) The browser scans the DOM tree.

2) It finds elements that match the CSS selector.

3) It returns either the first matching element (querySelector) or a NodeList of all matches (querySelectorAll).

*/





// Usage of Query Selector ? 

/* 

   1) Selecting elements dynamically without using getElementById or getElementsByClassName.

   2) Modifying elements (text, styles, attributes, etc.).

   3) Handling events on selected elements.

   4) Selecting nested elements using complex CSS selectors.

   5) Working with multiple elements easily using querySelectorAll().

*/




// Accessing Child Nodes from the DOM Tree (Refer Document-Object-Model.js file)

document.querySelector("button");      // Output :-  <button id="heading"> click me </button>;

document.querySelector("button").children;      

/*

Output :-     HTMLCollection []
                        length: 0
                        [[Prototype]]: HTMLCollection

*/