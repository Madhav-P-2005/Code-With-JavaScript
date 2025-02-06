let display = window.document.querySelector("body")

let newButton = document.createElement("button");


newButton.innerText = "Click Me";


display.prepend(newButton);

newButton.style.backgroundColor = "red";

newButton.style.border = "5px solid black"

newButton.style.borderRadius = "5px"

newButton.style.height = "30px";

newButton.style.width = "100px";

newButton.style.fontSize = "Larger";

newButton.style.fontStyle = "oblique"

newButton.style.fontWeight = "700"

newButton.style.paddingTop = "0px";

newButton.style.paddingLeft = "2px";

newButton.style.marginLeft = "10px";

newButton.style.marginTop = "10px";

newButton.style.textAlign = "center"

newButton.style.alignContent = "center"

newButton.style.paddingRight = "0px";

newButton.style.paddingBottom = "0px";

newButton.style.color = "white"



/*

Output :- 

<body>
    <button style="background-color: red; border: 5px solid black; border-radius: 5px; height: 30px; width: 100px; font-size: larger; font-style: oblique; font-weight: 700; padding: 0px 0px 0px 2px; margin-left: 10px; margin-top: 10px; text-align: center; align-content: center; color: white;">Click Me</button>
    <h1> Hi this is H1 Heading </h1>
    <script src="Practice-Q1.js"></script>
    <!-- Code injected by live-server -->
    <script>...</script>
</body>

*/



// Or 


// Method :- 1 (Madam's)


let newBtn = document.createElement("button");

newBtn.innerText = "click me !";

newBtn.style.color = "white";

newBtn.style.backgroundColor="red";

document.querySelector("body").prepend(newBtn);


/*

Output :- 

<body><button style="color: white; background-color: red;">click me !</button>
    <h1> Hi this is H1 Heading </h1>
    <script src="Practice-Q1.js"></script>
    <!-- Code injected by live-server -->
    <script>...</script>
</body>

*/