// 💡 What is DOM ?

/*

   1) DOM (Document Object Model) is a programming interface for web documents. It represents the structure of an HTML or XML document as a tree of objects, where each element in the document is a node that can be manipulated using JavaScript.


   2) The DOM (Document Object Model) is a standard that allows JavaScript to interact with and modify HTML and XML documents dynamically. It provides a structured representation of the document and allows scripts to update content, structure, and styles.


   3) In simple terms: The DOM lets JavaScript change HTML and CSS dynamically.

*/



// Syntax :-   The DOM represents the document as a tree structure. You can access and manipulate elements using JavaScript methods like document.getElementById, querySelector, etc.


//  Difference between console.dir(window.document) and console.log(window.document)  ? 

/*

>>> Both console.dir() and console.log() can be used to inspect JavaScript objects in the console, but they behave differently when dealing with the document object.

*/


// 1) console.log(window.document)  :- 

/*


a) Displays the HTML representation of the document object.

b) It renders the document as an expandable tree structure of elements, similar to what you see in the "Elements" tab of DevTools.

c) Clicking on elements allows you to navigate through the DOM tree visually.

*/



// Example :-  

console.log(window.document);


/*

Output :-  

<!DOCTYPE html>
<html>
<head>...</head>
<body>...</body>
</html>


*/

["Note :-  Shows the actual HTML source code of the document."];




// 2) console.dir(window.document) :- 

/*

a) Displays the JavaScript object representation of the document object.

b) It lists all properties, methods, and metadata associated with the document.

c) This is useful when you want to inspect or debug JavaScript-related properties of the document.

*/


// Example :- 

console.dir(window.document);



/*

Output :- 

#document

  URL: "https://example.com"
  title: "Example Page"
  head: {...}
  body: {...}
  forms: HTMLCollection []
  images: HTMLCollection []
  querySelector: function querySelector()
  getElementById: function getElementById()
  ...

*/

// When to Use What ?

/*

1) Use console.log(document) when you want to see the HTML structure.

2) Use console.dir(document) when you want to debug the JavaScript properties and methods of the document.

*/


// Example :- 

console.log(document); // To see the actual HTML
console.dir(document); // To see JavaScript object properties




// How Does DOM Work ?

/*

   1) When a web page loads, the browser parses the HTML and creates a DOM tree.

   2) Each element in the HTML document is represented as a node in the DOM.

   3) JavaScript can access these nodes using methods like getElementById(), querySelector(), etc.

   4) JavaScript can manipulate these nodes dynamically to update content, add or remove elements, modify styles, etc.

   5) The browser automatically updates the display when changes are made to the DOM.

*/




// Usage of DOM ? 

/*

The DOM is used for :-

    1) Modifying HTML elements (content, attributes, styles).

    2) Handling events (clicks, mouse movements, keyboard inputs).

    3) Creating and deleting elements dynamically.

    4) Validating form inputs before submission.

    5) Building interactive web applications.

*/




// DOM Manipulation ? 


/*

⭐) DOM Manipulation refers to the process of dynamically changing the structure, content, and style of an HTML document using JavaScript. This allows developers to create interactive and dynamic web applications by modifying HTML elements, attributes, and CSS styles.

*/



// How Does DOM Manipulation Work ?

/*

1) Parsing the HTML :-  The browser reads the HTML and creates a DOM tree.

2) JavaScript Accesses the DOM :- JS uses methods like document.getElementById() to select elements.

3) Modifications are Made :-  JS changes content, attributes, or styles of selected elements.

4) Browser Updates the Page :-  The UI reflects changes instantly without reloading the page.

*/



// 1) Selecting Elements  :- 

document.getElementById("demo");         // Select an element by ID

document.getElementsByClassName("box");  // Select elements by class

document.getElementsByTagName("p");      // Select elements by tag name

document.querySelector(".box");          // Select first matching element

document.querySelectorAll(".box");       // Select all matching elements



// 2. Modifying Content  :- 


document.getElementById("demo").innerText = "Hello, World!";            // Changes text


document.getElementById("demo").innerHTML = "<b>Bold Text</b>";         // Changes HTML



// 3) Changing Attributes  :- 


document.getElementById("image").src = "new-image.jpg";          // Change image source


document.getElementById("link").href = "https://example.com";    // Change hyperlink



// 4) Modifying CSS Styles  :- 


document.getElementById("demo").style.color = "blue";                 // Change text color


document.getElementById("demo").style.backgroundColor = "yellow";     // Change background



// 5) Creating & Removing Elements :- 


let newElement = document.createElement("p");         // Create a new element

newElement.innerText = "New Paragraph"; 

document.body.appendChild(newElement);               // Append to body

document.getElementById("demo").remove();            // Remove an element



// 6)  Event Handling   :- 

document.getElementById("btn").addEventListener("click", function () {
  alert("Button Clicked!");
});




// Usage of DOM Manipulation  ? 

// DOM Manipulation is widely used for :- 

/*

1)  Dynamic Content Updates ;-  Updating text, images, or elements dynamically.

2) Form Validation :–  Checking user input in real-time.

3) Interactive UI :–  Showing/hiding elements, animations, toggling themes.

4) Event Handling :–  Responding to user actions like clicks, key presses, etc.

5) Building Web Apps :–  Modern JavaScript frameworks (React, Vue, Angular) rely on DOM manipulation.

*/



// DOM Manipulation Properties  ? 

/*

   ⭐) DOM Manipulation Properties are built-in JavaScript properties that allow access and modification of HTML elements, their content, attributes, and styles in real time.

*/


// Syntax :-   DOM properties can be used with JavaScript’s document object and various selectors like getElementById() or querySelector().



// Selecting an element
let element = document.getElementById("demo");


// Modifying element properties
element.innerText = "Hello, World!";  

element.style.color = "blue";  

element.className = "newClass";  




// DOM Tree :-  Text Nodes, Comment Nodes, and Element Nodes  ?

/*

   ⭐) The DOM (Document Object Model) Tree represents the structure of an HTML document in a hierarchical format. The three main types of nodes in the DOM are :- 

*/


/*

1) Text nodes (#text) :-    a) These represent spaces, line breaks, or 
                            actual text content.

                            b) Even a simple space or a newline between elements is considered a text node in the DOM.

*/


console.log(document.body.firstChild);       // Output :-   #text  (Whitespace or line break)



/*

2) Comment Nodes (#comment) :-  a) Represent HTML comments (<!-- This is 
                                a comment -->).
                            
                                b) These nodes exist in the DOM but are ignored in rendering.

*/



console.log(document.body.childNodes);


/*

Output :-   NodeList(…)  
            #comment  "This is a comment"

*/



/*

3) Element Nodes  :- a) These are the actual HTML elements like <div>, 
                     <h1>, <p>, etc.

                     b) These are the nodes we usually manipulate with 
                     JavaScript.

                     c) We Always try to work on these  element nodes 
                     only .

*/


console.log(document.body.firstElementChild);


/*

Output :-    <div>...</div>  (First element inside <body>)

*/




// Types of DOM Manipulation Properties ? 

// 1) Content Manipulation Properties  :-   Used to change or retrieve an element’s text or HTML content.


/*  

Element Content Properties:

1) innerText :-   Gets or sets the visible text inside an element.  

2) innerHTML :-   Gets or sets the HTML content inside an element.  

3) textContent :-  Similar to innerText but includes hidden text (ignores display: none).  

4) tagName :-   Returns the tag name of an element in uppercase.  

*/




// Understanding firstChild, lastChild, children[], and More in the DOM  ?  (HomeWork)

/*

⭐) These properties help navigate an element's child nodes in the DOM hierarchy, allowing you to access, modify, or iterate over child elements.

*/



// 1) firstChild :-   Returns the first child node (which can be an element, text, or comment).


// 🔹 Syntax :-   let first = parentElement.firstChild;


/*

🔹 Note :-   1) If there's whitespace before the first child element,   
              firstChild may return a text node instead of an element.

              2) To get the first element, use firstElementChild.

*/




// 2) lastChild  :-   Returns the last child node (which can be an element, text, or comment).


// 🔹 Syntax :-   let last = parentElement.lastChild;


/*

🔹 Note :-   a) Similar to firstChild, it may return a text node if   
              there’s whitespace.

              b) Use lastElementChild to get the last element instead.

*/




// 3) children :-   Returns an HTMLCollection of only child elements (ignores text and comment nodes).


// 🔹 Syntax :-   let allChildren = parentElement.children;


/*

🔹 Key Differences :-   a) Unlike childNodes, which includes text and  
                        comment nodes, children returns only HTML elements.

                        b) It's a live collection (updates dynamically if new elements are added/removed).

*/




// 4) children[index]  :-    Accesses a specific child element using indexing.

/*

🔹 Syntax :-  let firstChildElement = parentElement.children[0];

              let secondChildElement = parentElement.children[1];

*/


/*

🔹 Note :-   a) Works only with element nodes (excludes text/comments).

              b) If the index is out of bounds, it returns undefined.

*/




// 5) firstElementChild & lastElementChild  :-   These properties only return element nodes, skipping text and comments.


/*

🔹 Syntax :-  let firstElement = parentElement.firstElementChild;

               let lastElement = parentElement.lastElementChild;

*/


/*

🔹 Why Use These?

       a) Avoids issues where firstChild or lastChild returns a text node due to whitespace.

*/



// Best Practices   !

/*

✅ Use children if you only need elements.

✅ Use firstElementChild / lastElementChild to avoid text node issues.

✅ Use childNodes if you need all types of nodes (text, comments, elements).

*/