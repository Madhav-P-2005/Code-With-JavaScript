// Types of DOM Manipulation Properties ? 


// 2) Attribute Manipulation Properties :-  Used to modify element attributes like src, href, alt, etc.


/*  

  Property                  |    Description  
  -----------------------------------------------------  
  getAttribute(attr)       -   Gets the
                               value of an attribute.  

  setAttribute(attr, value) -  Sets or 
                               updates an attribute.  

  removeAttribute(attr)    -   Removes 
                               an attribute from an element.  
  
*/


let link = document.getElementById("myLink");

console.log(link.getAttribute("href")); // Gets the href value

link.setAttribute("href", "https://example.com"); // Changes href

link.removeAttribute("target"); // Removes the 'target' attribute




// 3) Style Manipulation Properties :-    Used to change CSS styles dynamically.


/*  

  Property              |  Description  
  ---------------------------------------------------  
  a) style.property        -  Modifies an
                           inline CSS property.  

  b) className             -  Assigns a 
                           class to the element.  

  c) classList.add()       -  Adds a new
                           class.  

  d) classList.remove()    -  Removes a 
                           class.  

  e) classList.toggle()    -  Toggles a 
                           class on and off.  

*/


//  a) style.property   :-  The style property in JavaScript allows you to modify CSS styles dynamically for an element. It updates inline styles, meaning changes are directly applied to the style="" attribute of the element.


// Example :- 

let divstyle = document.querySelector("div");


divstyle.style         // Output :-  CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}


divstyle.style.backgroundColor  = "pink"       // Output :-  <div id="box" name="JS" style="background-color: pink; font-size: 30px;">Hello!</div>


divstyle.style.fontSize = "30px"        // Output :-  <div id="box" name="JS" style="background-color: pink; font-size: 30px;">Hello!</div>


divstyle.innerText = "Hello!"           // Output :-   <div id="box" name="JS" style="background-color: pink; font-size: 30px;">Hello!</div>






// b) className – Assigning a Class    :-  Replaces all existing classes with the new class.


// Example :- 

let para = document.querySelector("p");

para.className = "newClass";             



// 🔹 Before Execution (HTML) :-     <p class="para">This is a simple para line</p>


/*

Output :-  After Execution (HTML) :-     <p class="newClass">This is a simple para line</p>

*/

["📌 Note :-  This overwrites any existing classes."]





// c) classList.add()  –  Adding a Class     :-   Appends a new class without removing existing ones.


// Example :- 
para.classList.add("highlight");         


// 🔹 Before Execution (HTML) :-    <p class="para">This is a simple para line</p>

/*

Output :-  After Execution (HTML) :-  <p class="para highlight">This is a simple para line</p>

*/

["Note :- 📌 Both para and highlight classes exist now."];





//  d) classList.remove()  :-   Removing a Class   


// Example :-
para.classList.remove("para");


// 🔹 Before Execution (HTML) :-   <p class="para highlight">This is a simple para line</p>


/*

Output :- After Execution (HTML) :-  <p class="highlight">This is a simple para line</p>

*/

["Note :- 📌 Both para and highlight classes exist now."];




//  e) classList.toggle() :-   Adding/Removing a Class Dynamically

/*

    a) If the class exists, it gets removed.

    b) If the class doesn't exist, it gets added

*/


// Example :- 

para.classList.toggle("para");

["Note :-   If hidden is present, it's removed. If not, it's added."];






// 4) Element Manipulation Properties :- Used to create, append, or remove elements dynamically.

/*

  Property/Method                         |   Description  
  -------------------------------------------------------------  
  a) createElement(tag)                   -   Creates a new HTML element.  

  b) appendChild(element)                 -   Adds a child element inside a parent.
  
  c) node.append(el)                      -   Adds at the end of node (inside).

  d) removeChild(element)                 -   Removes a child element from a parent.  

  e) node.prepend(el)                     -   Adds at the start of node(inside). 

  f) node.remove()                        -   Removes the node.

  g) replaceChild(newElement, oldElement) -   Replaces an existing element with a new one.

  h) node.before(el)                      -   Adds before the node(outside). 

  i) node.after(el)                       -   Adds after the node(outside).

*/



// a) createElement(tag)  :-    The document.createElement(tag) method is used to create a new HTML element dynamically, but it does not automatically add it to the DOM. You need to append it manually.


// Syntax :-   let newElement = document.createElement("tagName");

/*
 
  ⭐) tagName → The name of the HTML element you want to create (e.g., "div", "p", "span", etc.).

*/


// Example :- 

let newBtn = document.createElement("button");


console.log(newBtn);


newBtn.innerText;                               // Output :-   <button></button>


newBtn.innerText = "Click me"                   // Output :- 'Click me'




// b) appendChild(element)  :-  Adds a child element inside a parent (at the end).


// Syntax :-   parentNode.appendChild(element);


/*

  a) parentNode → The parent element where the new child will be added.

  b) element → The child element that will be appended inside parentNode

*/


// Example :- 

let parentDiv = document.querySelector("div");


// Create a new element 
let childPara = document.createElement("p");

childPara.innerText = "This is a new paragraph added using appendChild ! ";


// Append it inside the div 
parentDiv.appendChild(childPara);


/*

Output :- 

<body>
    <div id="box" name="JS"> this is a div
     <ul>
        List
        <li>item 1 </li>
        <li>item 2 </li>
        <li>item 3 </li>
     </ul>
    
     <p>This is a new paragraph added using appendChild ! </p>
    </div>
     <p class="para">
        This is a simple para line 
     </p>
     <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"></a>
     <script src="DOM-2.js"></script>
     <!-- Code injected by live-server -->
   <script>...</script>
</body>

*/




// c) node.append(el)   :-     Adds at the end of node (inside).


// Syntax :-   node.append(...nodesOrText);

/*

  a) node → The parent element where content will be appended.

  b) ...nodesOrText → One or more elements or text strings to append.

*/


// Example :- 

let divadd = document.querySelector("div");

divadd.append(newBtn);           


/*

Output :- 

  <div id="box" name="JS"> this is a div
       <ul>
          List
         <li>item 1 </li>
         <li>item 2 </li>
         <li>item 3 </li>
       </ul>
    <button>Click me</button>
  </div>

*/

 


// d) removeChild(element)  :-  Removes a child element from a parent.


// Syntax :-   parentNode.removeChild(element);

/*

  a) parentNode → The parent element that contains the child to be removed.

  b) element → The specific child element to be removed from the parent

*/


// Example :- 

let parentul1 = document.querySelector("ul");     // Selecting the <ul>


let childli = document.querySelector("ul li:nth-child(2)");  // Selecting "item 2"


parentul1.removeChild(childli);         // Removes "item 2"


/*

Output :- 

<body>
    <div id="box" name="JS"> this is a div
      <ul>
        List
        <li>item 1 </li>    
        <li>item 3 </li>
      </ul>
      <p>This is a new paragraph added using appendChild ! </p>
    </div>
      <p class="para">
        This is a simple para line 
      </p>
      <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"></a>
      <script src="DOM-2.js"></script>
      <!-- Code injected by live-server -->
   <script>...</script>
</body>

*/




// e) node.prepend(el)   :-  Adds at the start of node(inside). 


// Syntax :-   node.prepend(element);

/*

  a) node → The parent element inside which the element will be inserted.

  b) element → The new element (or text) that will be inserted at the beginning of node.

*/


// Example 1 :- 

// adding button to the start 

divadd.prepend(newBtn);


/* 

Output :- 

   <div id="box" name="JS"><button> Click me </button> this is a div
      <ul>
          List
          <li>item 1 </li>
          <li>item 2 </li>
          <li>item 3 </li>
      </ul>
    </div>

*/


// Example 2 :- 

// Adding a heading !

let newheading = document.createElement("h1");


newheading.innerHTML  = "<i> Hi , I am a new Heading 1 </i>"


document.querySelector("body").prepend(newheading);


/*

Output :- 

<body>
   <h1>
     <i> Hi , I am a new Heading 1 </i>
   </h1>
   <div id="box" name="JS"> this is a div
     <ul>
        List
        <li>item 1 </li>
        <li>item 2 </li>
        <li>item 3 </li>
     </ul>
   </div>
   <p class="para">
        This is a simple para line 
   </p><button> Click me </button>
   <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"></a>
   <script src="DOM-2.js"></script>
   <!-- Code injected by live-server -->
  <script>...</script>
</body>

*/




//  f) node.remove()   :-  Removes the node   


// Syntax :-   node.remove();


["Note :-  node → The element you want to remove from the DOM."];


// Example 1 :- 

let para = document.querySelector("p");

para.remove();


/*

Output :- 

<body>
    <h1>
      <i> Hi , I am a new Heading 1 </i>
    </h1>
    <div id="box" name="JS"> this is a div
    <ul>
        List
        <li>item 1 </li>
        <li>item 2 </li>
        <li>item 3 </li>
    </ul>
    </div>
     <button>Click me</button>
     <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"></a>
     <script src="DOM-2.js"></script>
     <!-- Code injected by live-server -->
  <script>...</script>
</body>

*/



// Example 2 :- 

newheading.remove();


/* 

Output :-  

<body>
    <div id="box" name="JS"> this is a div
    <ul>
        List
        <li>item 1 </li>
        <li>item 2 </li>
        <li>item 3 </li>
    </ul>
    </div>
    <button>Click me</button>
    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"></a>
    <script src="DOM-2.js"></script>
       <!-- Code injected by live-server -->
    <script>...</script>
</body>

*/





// g) replaceChild(newElement, oldElement) :-  Replaces an existing element with a new one.


// Syntax :-    parentNode.replaceChild(newElement, oldElement);

/*

  a) parentNode → The parent element containing the oldElement that needs to be replaced.
 
  b) newElement → The new element that will replace the oldElement.

  c) oldElement → The existing child element that will be replaced.

*/


// Example :- 

let parentul2 = document.querySelector("ul"); // Selecting the <ul>

let oldItem = document.querySelector("ul li:nth-child(1)"); // Selecting "item 1"

// Create a new replacement element
let newchild = document.createElement("li");
newchild.innerText = "Replaced Item 1";

// Replace oldItem with newItem
parentul2.replaceChild(newchild, oldchild); 


/*

Output :- 

<body>
    <div id="box" name="JS"> this is a div
     <ul>
        List
        <li>Replaced Item 1</li>
        <li>item 2 </li>
        <li>item 3 </li>
     </ul>
    </div>
     <p class="para">
        This is a simple para line 
     </p>
     <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"></a>
     <script src="DOM-2.js"></script>
     <!-- Code injected by live-server -->
   <script>...</script>
</body>

*/




// h) node.before(el)   :-  Adds before the node(outside). 


// Syntax :-   node.before(element);

/*

  a) node → The reference element before which the new element will be inserted.

  b) element → The new element (or text) that will be inserted before the reference node.

*/


// Example  :- 

// adding before the div 

divadd.before(newBtn)


/* 

Output :- 

<body>
    <button>Click me</button><div id="box" name="JS"> this is a div
    <ul>
        List
        <li>item 1 </li>
        <li>item 2 </li>
        <li>item 3 </li>
    </ul>
    </div>
       <p class="para">
        This is a simple para line 
        </p>
      <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"></a>
      <script src="DOM-2.js"></script>
      <!-- Code injected by live-server -->
   <script>...</script>
</body>

*/




// i) node.after(el)   :-  Adds after the node(outside).


// Syntax :- node.after(element);

/*

  a) node → The reference element after which the new element will be inserted.

  b) element → The new element (or text) that will be inserted after the reference node.

*/


// Example 1 :- 

divadd.after(newBtn);


/* 

Output :- 

<body>
    <div id="box" name="JS"> this is a div
    <ul>
        List
        <li>item 1 </li>
        <li>item 2 </li>
        <li>item 3 </li>
    </ul>
    
    </div><button> Click me </button>
    <p class="para">
        This is a simple para line 
    </p>
    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"></a>
    <script src="DOM-2.js"></script>
    <!-- Code injected by live-server -->
   <script>...</script>
</body>

*/


// Example 2 :- 

// after paragraph you need a button then :- 

let divpara = document.querySelector("p");

divpara.after(newBtn)


/*

Output :- 

<body>
    <div id="box" name="JS"> this is a div
    <ul>
        List
        <li>item 1 </li>
        <li>item 2 </li>
        <li>item 3 </li>
    </ul>
    </div>
     <p class="para">
        This is a simple para line 
     </p>
     <button>Click me</button>
     <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"></a>
     <script src="DOM-2.js"></script>
     <!-- Code injected by live-server -->
    <script>...</script>
</body>

*/