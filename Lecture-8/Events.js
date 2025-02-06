/*

⭐) Events in JavaScript are actions or occurrences that happen in the browser, which JavaScript can respond to. These can be user actions like clicking a button, hovering over an element, pressing a key, or even loading a webpage

*/


// Syntax :-   Events can be handled in multiple ways :-


// a) Inline Event Handling (Not Recommended)   :-   

<button onclick="alert('Button Clicked')"> </button>



// b) Using Event Properties (Recommended)  :- 

let btn = document.querySelector("button");
btn.onclick = function () {
  alert("Button Clicked!");
};



// c) EVENT LISTENERS :-   An event listener is a method that waits for an event (e.g., click, keypress, mouse movement) to occur on an element and executes a specified function when the event happens. It allows JavaScript to respond to user interactions dynamically.


// a)  Using addEventListener() (Best Practice) :-   

// 📜) Syntax :-  element.addEventListener(event, function, useCapture);


/*

🔹 Parameters :-   

    a) element →  The HTML element to which the event listener is attached.

    b) event →  The name of the event (e.g., "click", "keydown").

    c) function →  The function to be executed when the event occurs.

    d) useCapture (optional) →  A boolean that determines event propagation mode (true for capturing phase, false for bubbling phase, default is false).

*/



// 🔥 How it Works ?

/*

1️⃣ Select the target element.

2️⃣ Attach an event listener using addEventListener().

3️⃣ When the specified event occurs, the associated function executes.

*/


// Example :- 

let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  alert("Button Clicked!");
});




// 💡) How Events Work in JavaScript ?

/*

⭐) When an event occurs (e.g., a click), JavaScript detects it and executes the corresponding event handler function. Events follow a specific propagation mechanism :-

Event Propagation Model  :- 

📌) There are three phases in event handling :- 

   1) Capturing Phase – The event moves from the root to the target element.

   2) Target Phase – The event reaches the target element.

   3) Bubbling Phase(default) – The event propagates back up the DOM tree.

*/



// 🔹 Advantages of addEventListener() Over Inline Events  ? 

/* 

✔️ Allows multiple handlers on the same event.

✔️ Separates JavaScript from HTML for 
cleaner code.

✔️ Can remove event listeners when needed.

✔️ Supports event propagation control (bubbling/capturing).

*/



// Removing Event Listeners  ? 

["Note :-   To remove an event listener, use removeEventListener()."];


// Syntax :-   element.removeEventListener("event", function, useCapture);



function greet() {
  alert("Hello!");
}

let btn = document.getElementById("btn");
btn.addEventListener("click", greet);

// Remove the event listener
btn.removeEventListener("click", greet);


/*

Parameters :- 

    a) element → The target element from which the event listener will be removed.

    b) event → The event type (e.g., "click", "keydown").

    c) function → The same function reference that was used in addEventListener().

    d) useCapture (optional) → Must match the value used in addEventListener() (default is false).

*/


// 🔹 Usage of Event Listeners ? 

/* 

✔️ Handling user interactions (clicks, inputs, navigation).

✔️ Form validation and submission handling.

✔️ Keyboard shortcuts and navigation.

✔️ Dynamically updating UI elements.

✔️ Preventing default actions and customizing behavior.

*/



// Example :-  

document.querySelector("div").addEventListener("click", function () {
    alert("Div Clicked!");
}, true); // 'true' enables capturing phase



/*  

🎯 JavaScript Event Listeners  


1️⃣ Mouse Events:  

   a) "click"       →  Fires when an element is clicked.  

   b) "dblclick"    →  Fires when an element is double-clicked.  

   c) "mouseover"   →  Fires when the mouse hovers over an element.  

   d) "mouseout"    →  Fires when the mouse leaves an element.  

   e) "mousemove"   →  Fires when the mouse moves within an element.  

   f) "mousedown"   →  Fires when a mouse button is pressed.  

   g) "mouseup"     →  Fires when a mouse button is released.  



2️⃣ Keyboard Events:  

   a) "keydown"     →  Fires when a key is pressed.  

   b) "keyup"       →  Fires when a key is released.  

   c) "keypress"    →  Fires when a key is pressed (deprecated).  



3️⃣ Form Events:  

   a) "submit"      →  Fires when a form is submitted.  

   b) "change"      →  Fires when an input value changes.  

   c) "focus"       →  Fires when an element gains focus.  

   d) "blur"        →  Fires when an element loses focus.  



4️⃣ Window & Document Events:  

   a) "load"        →  Fires when the page is fully loaded.  

   b) "scroll"      →  Fires when the page is scrolled.  

   c) "resize"      →  Fires when the window is resized.  

   d) "contextmenu" →  Fires when the right-click menu is opened.  



5️⃣ Clipboard Events:  

   a) "copy"        →  Fires when content is copied.  

   b) "cut"         →  Fires when content is cut.  

   c) "paste"       →  Fires when content is pasted.  



6️⃣ Drag & Drop Events:  

   a) "dragstart"   →  Fires when dragging starts.  

   b) "dragend"     →  Fires when dragging ends.  

   c) "dragover"    →  Fires when a dragged element is over a valid drop target.  

   d) "drop"        →  Fires when a dragged element is dropped.  



7️⃣ Media Events (For Audio/Video):  

   a) "play"        →  Fires when media starts playing.  

   b) "pause"       →  Fires when media is paused.  

   c) "ended"       →  Fires when media playback ends.  



8️⃣ Touch Events (For Mobile Devices):  

   a) "touchstart"  →  Fires when a touch is detected.  

   b) "touchmove"   →  Fires when a finger moves across the screen.  

   c) "touchend"    →  Fires when a touch is removed.  



9️⃣ Mutation Events (For DOM Changes - Deprecated):  

   a) "DOMNodeInserted" →  Fires when a node is added (deprecated).  

   b) "DOMNodeRemoved"  →  Fires when a node is removed (deprecated).  

*/




// 💡) Event Object (event)  ? 

/*

1️⃣ Definition  :- 

    a) The Event Object in JavaScript is an automatically passed object that contains details about the event that occurred, such as the type of event, target element, mouse position, key pressed, etc.

    b) It is available inside event handler functions and allows us to access and manipulate event properties.

*/



// 2️⃣ Syntax :- 

element.addEventListener("eventType", function (event) {
  // event refers to the event object
});

// Or

element.addEventListener("eventType", (e) => {
  // e is the event object
});




// Example :- 

document.querySelector("button").addEventListener("click", function (event) {
  console.log(event); // Logs the event object details
  console.log("Event Type:", event.type); // Output: "click"
  console.log("Target Element:", event.target); // Logs the button element
});



// 3️⃣ How It Works ?

/*

   a) When an event occurs (e.g., click, keydown, etc.), the browser automatically creates an Event Object.

   b) This object contains useful properties and methods to get details about the event.

   c) It is passed as an argument to the event handler function.

*/




// 4️⃣ Types of Event Objects ?

/*

💡) Different types of events generate different event objects. Each type has unique properties relevant to the event.

*/


// a) MouseEvent - Generated for mouse actions (click, move, hover, etc.).

document.addEventListener("click", function (event) {
  console.log("Mouse X :- ", event.clientX, "Mouse Y :- ", event.clientY);
});



// b) KeyboardEvent - Triggered on key actions (press, release).

document.addEventListener("keydown", function (event) {
  console.log("Key Pressed:", event.key, "Code:", event.code);
});



// c) FocusEvent - Occurs when an element gains or loses focus.

document.querySelector("input").addEventListener("focus", function (event) {
  console.log("Input focused:", event.target);
});



// d) FormEvent - Fires on form actions (submit, change, reset).

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevents form submission
  console.log("Form submitted!");
});



// e) ClipboardEvent - Handles copy, cut, paste actions.

document.addEventListener("copy", function (event) {
  console.log("Text copied!");
});




// 5️⃣ Common Properties of Event Object ? 

/*

a) type → Returns the type of event (e.g., "click", "keydown").

b) target → Returns the element that triggered the event.

c) currentTarget → Returns the element the event listener is attached to.

d) clientX, clientY → Provides the X and Y coordinates of the mouse relative to the viewport.

e) key, code → Returns the key pressed and its corresponding code (for keyboard events).

f) preventDefault() → Stops the default action of an event (e.g., prevents form submission).

g) stopPropagation() → Prevents the event from bubbling up the DOM tree.

*/




// 6️⃣  When to Use JavaScript Events ?

/*

✅ Handling user interactions (clicks, hovers, key presses)

✅ Validating form inputs before submission

✅ Creating dynamic UI effects (sliders, modals, tooltips)

✅ Tracking user behavior (analytics, logging interactions)

✅ Building interactive applications (games, drag & drop, etc.)

*/