let button1 = document.querySelector("#firstButton");

button1.onclick = (evt) => {

    console.log("Event Object Value :- ",evt);   


    console.log("Event type :- ",evt.type);


    console.log("Event Target :- ",evt.target);

    console.log("Event client X  :- ",evt.clientX);

    console.log("Event Client Y:- ",evt.clientY);
};



/*

Output :- 

Event Object Value :-   PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}


Event type :-  click


Event Target :-    <button id=​"firstButton" onclick=​"alert('first button Hello')​">​ Button 1 ​</button>​


Event client X  :-  45


Event Client Y :-  11

*/


let divBox = document.querySelector("div");


divBox.onmouseover = (event) => {


    console.log("Mouse Event Object Value :- ", event);

    console.log("Mouse Event type :- ", event.type);

    console.log("Mouse Event Target :- ", event.target);

    console.log("Mouse Event client X  :- ", event.clientX);

    console.log("Mouse Event Client Y:- ", event.clientY);


}



/*


Output :- 

Mouse Event Object Value :-  MouseEvent {isTrusted: true, screenX: 145, screenY: 265, clientX: 115, clientY: 120, …}

Mouse Event type :-  mouseover

Mouse Event Target :-  <div>​ This is a div ​</div>​

Mouse Event client X  :-  115

Mouse Event Client Y:-  120


*/




// b) KeyboardEvent - Triggered on key actions (press, release).


let keyboard  = document.querySelector("textarea");

keyboard.onkeydown = (event) =>{

     console.log("Keyboard Event Object Value :- ", event);

     console.log("Keyboard Event type :- ", event.type);

     console.log("Keyboard Event Target :- ", event.target);

     console.log("Keyboard code :- ", event.code);

     console.log("Keyboard  Pressed  :- ", event.key);
}



/*

Output :- 

Keyboard Event Object Value :-    KeyboardEvent {isTrusted: true, key: 'ArrowUp', code: 'ArrowUp', location: 0, ctrlKey: false, …}

Keyboard Event type :-   keyup

Keyboard Event Target :-   <textarea id=​"textArea" placeholder=​"Please fill your details " rows=​"5" cols=​"40">​ Please fill your details ​</textarea>​

Keyboard code  :-   ArrowDown

Keyboard  Pressed  :-   ArrowDown

*/



// or



/*

Output :- 

Keyboard Event Object Value :-  KeyboardEvent {isTrusted: true, key: 'Delete', code: 'Delete', location: 0, ctrlKey: false, …}

Keyboard Event type :-  keydown

Keyboard Event Target :-  <textarea id=​"textArea" placeholder=​"Please fill your details " rows=​"5" 
cols=​"40">​</textarea>​

Keyboard code :-  Delete

Keyboard  Pressed  :-  Delete

*/