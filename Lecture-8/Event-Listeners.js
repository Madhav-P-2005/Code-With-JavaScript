let Button1  = document.querySelector("#Button1");

let Button2  = document.querySelector("#Button2");



Button1.addEventListener("click", () =>{
    console.log("Button 1 was Clicked ");
})



// Accessing with the Object 
Button1.addEventListener("click", (event) =>{
    console.log("Button 1 was Clicked 2nd Time  ");

    console.log("Event Type :- ",event.type);

    console.log("Event Target :- ",event.target);

    console.log("Event  :- ",event);
})



// Now we have given a single name for the 3rd button in the memory .
const Button3 = () =>{
    console.log("Button3 was clicked which is Button 1 .")
}


// Calling Remove Event Listener .   Now we are passing it as a variable . 

Button1.addEventListener("click", Button3)



Button1.addEventListener("click" , () =>{
    console.log("Button 1 was clicked Fourth  time")
})





// Calling Remove Event Listener 

Button1.removeEventListener("click", Button3);


["Note :-  the callback reference should be same to remove. "]


// ["Note :- With the same Event Listeners we can do multiple work "]


Button2.addEventListener("click", () =>{
    console.log("Button 2 was Clicked ");
})