/* 

 Qs1. Prompt the user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with the fullname length

    eg: user name = “shradhakhapra” , username should be “@shradhakhapra13”


*/



let username = prompt("Enter your Full Name  :-  ")
let new_username = "@" + username;


console.log(`Generated Your Username :- ${new_username}${username.length}`)

