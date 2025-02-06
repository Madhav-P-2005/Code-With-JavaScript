/*

Q1) Create a function using the “function” keyword that takes a String as an argument &
returns the number of vowels in the string.

*/


// Using  Normal Function :- 

function Countvowels(string){
    count = 0;
   for(let i of string)
   {

        if(i.match("a") || i.match("e") || i.match("i") || i.match("o") || i.match("u"))
        {
            count++
        }

   }

   console.log("Count of Vowels are :- ",count)
   

}

let string = prompt("Enter any string :- ")
Countvowels(string)


/*

Output :-  Enter any string :- Madhav 
           Count of Vowels are :- 2

*/



// or 



function Countvowels(string){
    count = 0;
   for(let i of string)
   {

        if(i.match("a") || i.match("e") || i.match("i") || i.match("o") || i.match("u"))
        {
            count++
        }

   }

   console.log("Count of Vowels are :- ",count)
   

}

let inputstring = prompt("Enter any string :- ")
Countvowels(inputstring)




/*

Output :-  Enter any string :- Madhav 
           Count of Vowels are :- 2

*/