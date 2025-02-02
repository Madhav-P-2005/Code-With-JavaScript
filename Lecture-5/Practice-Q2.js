/*

Q2) Create an arrow function to perform the same task  as Question 1  ?

*/


// Using Arrow Functions :- 

const Countvowels1 = (string1) =>{
    count = 0;
    let vowels = ["a" , "e" , "i" , "o" ,"u"];
    for(let i of string1){
        if(vowels.includes(i))
        {
            count++
        }
    }
    console.log("Count of Vowels are :- ", count)
}

let string1 = "Madhav P"
Countvowels1(string1)



/*

Output :- 

Count of Vowels are :- 2

*/


// or 



const Countvowels = (string) =>{
  count = 0;
  for (let char of string) {
    if(char=="a" || char=="e" || char=="i" || char=="o" || char=="u")
    {
        count++
    }
  }
  console.log("Count of Vowels are :- ", count);
}


let string = "Madhav P";
Countvowels(string);




/*

Output  :-   

Count of Vowels are :-  2

*/