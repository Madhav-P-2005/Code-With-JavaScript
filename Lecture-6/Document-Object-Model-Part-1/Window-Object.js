// 🌐 Window Object in JavaScript

/*
   🔹 Definition  :- 

    1) The Window object is the global object in JavaScript that represents an open browser window or tab. It provides access to the browser's functionalities, including document manipulation, history, location, alerts, timers, and more.

    2) Every JavaScript script running in a browser has access to the window object by default.

*/


// 📝 Syntax  :-    The window object is implicitly available, meaning you can access its properties and methods without explicitly writing window.


// Explicit usage
window.alert("Hello, World!");

// Implicit usage (window is optional)
alert("Hello, World!");



// // ⚙️ How It Works ?

/*

 ⭐) The window object acts as the global execution context in JavaScript. All global variables and functions become its properties/methods.

*/


// Example :- 

var myName = "John";  
console.log(window.myName);      // Output :-  "John"


["Note :- Here, myName automatically becomes a property of window."]



// 🛠️ Commonly Used Properties & Methods  ? 

/*

// 🔹 Window Object Properties & Methods 🔹

// 1️⃣ window.document     - Accesses the DOM (Document Object Model)

// 2️⃣ window.alert()      - Displays an alert box

// 3️⃣ window.confirm()    - Shows a confirmation box (OK/Cancel)

// 4️⃣ window.prompt()     - Opens an input prompt for user input

// 5️⃣ window.location     - Provides info about the current URL

// 6️⃣ window.history      - Gives access to browser navigation history

// 7️⃣ window.setTimeout() - Executes a function after a delay

// 8️⃣ window.setInterval() - Repeats execution of a function at intervals

// 9️⃣ window.innerHeight  - Returns the viewport height

// 🔟 window.innerWidth   - Returns the viewport width

*/



// 🔥 Usage Examples  !


// 📌 1)  Display an Alert Box :- 

window.alert("Welcome to JavaScript!");



// 📌 2) Redirect to Another Page

window.location.href = "https://www.google.com";




// 📌 3) Set a Timer :- 

window.console.log.setTimeout(function () {
  alert("This message appears after 3 seconds!");
}, 3000);




// 📌 4) Get Browser Window Dimensions :- 

console.log("Width: " + window.innerWidth);

console.log("Height: " + window.innerHeight);


// console is a part of Window Object 
window.console.log("hello");      // Output :-  hello 



// 🏆 Key Takeaways  

/*

✅ The window object is the global object in browser environments.

✅ It provides methods & properties to control the browser window.

✅ It allows interaction with DOM, history, location, alerts, and timers.

✅ It is implicitly available, meaning you can use its methods without window. prefix.

*/