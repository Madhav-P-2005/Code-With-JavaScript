let modeButton = document.querySelector("#Button1");

let body = document.querySelector("body");

let currMode = "light";


modeButton.addEventListener("click" , () =>{
    console.log("You are trying to change the state")
    
    if(currMode === "light"){
      currMode = "dark"; 
      
      // document.querySelector("body").style.backgroundColor = "black";

      body.classList.add("dark");
      body.classList.remove("light");
    }
    else{
      currMode = "light"; 
      
      // document.querySelector("body").style.backgroundColor = "white";

      body.classList.add("light");
      body.classList.remove("dark");
    }

    console.log("Current Mode :- ",currMode)
})



/*

Output :- 

You are trying to change the state
Current Mode :-  dark

You are trying to change the state
Current Mode :-  light

You are trying to change the state
Current Mode :-  dark

You are trying to change the state
Current Mode :-  light

*/