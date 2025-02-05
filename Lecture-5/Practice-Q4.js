/*

Q4)  We are given array of marks of students. Filter our of the marks of students that scored 90+ ?

*/


let marks = [45, 77 ,88 ,90 ,23, 97, 100, 99];

let output = marks.filter((val) =>{
    return val>90
})

console.log(output)   // Ouput :- [ 97, 100, 99 ]








