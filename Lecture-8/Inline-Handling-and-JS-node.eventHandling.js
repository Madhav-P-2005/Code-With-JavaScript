let button1 = document.querySelector("#firstButton");


button1.onclick = () =>{
    console.log(`${firstButton} was clicked")`);
    let a = 25;
    a++;
    console.log(a);   // 26
}


/*

Output :- 

[object HTMLButtonElement] was clicked")
26

*/




// ondblclick :-  button 3  was clicked 2 times 




let div = document.querySelector("div");

div.onmouseover = () => {
    console.log("You are inside the Div")
}


/*

Output :- (4) You are inside the Div

*/





/*  

📌 JavaScript Event Handling Priorities & Overriding  


1️⃣ **JavaScript Takes Priority Over Inline Handlers**  

   - If an event is handled both **inline (HTML attribute)** and **via JavaScript**,  
     the **JavaScript event handler** will take priority and override the inline handler.  

   - Example:  

     ```html
     <button onclick="alert('Inline Handler')">Click Me</button>
     <script>
         document.querySelector("button").onclick = function () {
             alert("JavaScript Handler");
         };
     </script>
     ```

   - Output: **"JavaScript Handler"** (Inline handler is overridden).  



2️⃣ **Last Event Handler Overrides Previous Handlers**  

   - If the **same event handler** is assigned multiple times to an element,  
     the **last defined handler** will be executed, overriding the previous ones.  

   - Example:  

     ```js
     let btn = document.querySelector("button");

     btn.onclick = function () {
         alert("First Handler");
     };

     btn.onclick = function () {
         alert("Second Handler");
     };
     ```

   - Output: **"Second Handler"** (First handler is overridden).  

   - 🔹 To execute multiple handlers without overriding, use `addEventListener()`:  

     ```js
     btn.addEventListener("click", function () {
         alert("First Handler");
     });

     btn.addEventListener("click", function () {
         alert("Second Handler");
     });
     ```

   - Output: **Both handlers will execute sequentially**.  

*/
