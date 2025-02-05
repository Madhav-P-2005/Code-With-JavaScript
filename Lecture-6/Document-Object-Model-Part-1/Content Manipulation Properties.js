let div = document.querySelector("div");

console.dir(div)      // Output :- div

div.innerText;


/*

Output :- 'Fruits\nmango\norange\nlitchi'

*/





// div.innerHTML;           

/*

Output :- 

'\n        <h3>\n            Fruits\n        </h3>\n        <ul>\n           <li>mango</li>\n           <li>orange</li>\n           <li>litchi</li>\n        </ul>\n    '

*/





console.dir(div.innerHTML);            


/*

Output :- 

        <h3>
            Fruits
        </h3>
        <ul>
           <li>mango</li>
           <li>orange</li>
           <li>litchi</li>
        </ul>

*/





console.dir(div.innerText);            

/*

Fruits
mango
orange
litchi

*/




div.innerText = "Setting the text"

/*

Output :-    'Setting the text'

*/



// div.innerHTML = "<div> inner  div  </div>"


/*

Output :-   '<div> inner  div  </div>'

*/



let heading = document.querySelector("h1");


console.dir(heading);          // Output :-   h1


console.log(heading);          // Output :-   <h1> Old  Heading </h1>



// heading.innerText = "New Heading";        // Output :-   'New Heading'


// heading.innerHTML = "<i> New Heading </i>";        // Output :-   '<i> New Heading </i>'



heading;         

/*

<h1 style="visibility: hidden;"><i> New Heading </i></h1>

*/



heading.innerText;       // Output :-  ''



heading.textContent;       // Output :-   ' Old  Heading '