/*

Qs 3) . Create an array to store companies -> “Bloomberg”, “Microsoft”, “Uber”, “Google”, “IBM”, “Netflix”

a. Remove the first company from the array
b. Remove Uber & Add Ola in its place
c. Add Amazon at the end

*/


let companies = ["Bloomberg", "Microsoft" , "Uber" , "Google" , "IBM" , "Netflix"];



companies.shift()
console.log("a) First company removed ",companies)  // Output :-  a) First company removed  [ 'Microsoft', 'Uber', 'Google', 'IBM', 'Netflix' ]




companies.splice(1,1,"Ola")

console.log("b) Removed Uber and replaced with Ola :-  ",companies)  // Output :-  b) Removed Uber and replaced with Ola :-   [ 'Microsoft', 'Ola', 'Google', 'IBM', 'Netflix' ]




companies.push("Amazon")

console.log("c) Added Amazon at the end :-  ",companies)   // Output :- c) Added Amazon at the end :-   [ 'Microsoft', 'Ola', 'Google', 'IBM', 'Netflix', 'Amazon' ]