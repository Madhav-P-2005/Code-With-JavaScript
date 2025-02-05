let div  =  document.querySelector("div");

console.log(div);     // Output :-  <div id="box" name="JS"> this is a div</div>   or   div#box


 
// 2) Attribute Manipulation Properties :-  Used to modify element attributes like src, href, alt, etc.


// getAttribute() : -  Gets the  value of an attribute.  


// Example :- 

let id = div.getAttribute("id");

console.log(id);      // Output :-   box


let name = div.getAttribute("name");

console.log(name);      // Output :-   JS


let para1 = document.querySelector("p");

console.log(para1.getAttribute("class"))         // Output :-  para




// setAttribute ()  :-  Sets or updates an attribute.  


// Example :- 

let para2 = document.querySelector("p");


console.log(para2.setAttribute("class" , "newClass"));     // Output :- <p class="newClass">  This is a simple para line </p>


para2.setAttribute("class", "raj");          // Output :-   <p class="raj">  This is a simple para line </p>





// removeAttribute() :-    Removes an attribute from an element.


// Example :- 

let remove = document.querySelector("a");

console.log(remove.removeAttribute("href"));          // Output :-  <a target="_blank" rel="noopener noreferrer"></a>





// 3) Style Manipulation Properties :- 


//  a) style.property   :-  The style property in JavaScript allows you to modify CSS styles dynamically for an element. It updates inline styles, meaning changes are directly applied to the style="" attribute of the element.


// Example :- 

let divstyle = document.querySelector("div");


divstyle.style                            // Output :-  CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}


divstyle.style.backgroundColor  = "pink"       // Output :-  <div id="box" name="JS" style="background-color: pink; font-size: 30px;">Hello!</div>


divstyle.style.fontSize = "30px"        // Output :-  <div id="box" name="JS" style="background-color: pink; font-size: 30px;">Hello!</div>


divstyle.innerText = "Hello!"           // Output :-   <div id="box" name="JS" style="background-color: pink; font-size: 30px;">Hello!</div>





// b) className – Assigning a Class    :-  Replaces all existing classes with the new class.


// Example :- 

let parastyle =  document.querySelector("p");

parastyle.className = "Madhav"         


/*

Output :- 

<p class="Madhav">
        This is a simple para line 
</p>

*/




// c) classList.add()  –  Adding a Class     :-   Appends a new class without removing existing ones.


// Example :- 

parastyle.classList.add("Madhav2");         

/*

   Output :-
   
    <p class="Madhav Madhav2">
        This is a simple para line 
    </p>

*/



// d) classList.remove()  :-   Removing a Class 


// Example :- 

parastyle.classList.remove("Madhav2")      

/* 

Output :- 

    <p class="Madhav">
        This is a simple para line 
    </p>

*/




// e) classList.toggle() :-   Adding/Removing a Class Dynamically   


// Example :- 

parastyle.classList.toggle("para");    

/*

Output :- 

VM10105:1 Uncaught ReferenceError: parastyle is not defined
    at <anonymous>:1:1

*/






// 4) Element Manipulation Properties :- Used to create, append, or remove elements dynamically.


// a) createElement(tag)  :-    The document.createElement(tag) method is used to create a new HTML element dynamically, but it does not automatically add it to the DOM. You need to append it manually.


let newBtn = document.createElement("button");


console.log(newBtn);

newBtn.innerText;                                // Output :-   <button></button>

newBtn.innerText = "Click me"                   // Output :- 'Click me'





// b) appendChild(element)  :-  Adds a child element inside a parent (at the end).


// Example :- 

let parentDiv = document.querySelector("div");


// Create a new element 
let childPara = document.createElement("p");

newItem.innerText = "This is a new paragraph added using appendChild ! ";


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





//  e) node.prepend(el)   :-  Adds at the start of node(inside). 


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





// f) node.remove()   :-  Removes the node  

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





//  g) replaceChild(newElement, oldElement) :-  Replaces an existing element with a new one.


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