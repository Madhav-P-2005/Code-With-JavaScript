let modeButton = document.querySelector("#Button1");

let currMode = "light";


modeButton.addEventListener("click" , () =>{
    console.log("You are trying to change the state")
    
    if(currMode == "light"){
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    }
    else{
        currMode = "light"
        document.querySelector("body").style.backgroundColor = "white";
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