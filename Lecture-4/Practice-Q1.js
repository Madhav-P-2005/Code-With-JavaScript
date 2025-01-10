/*

Qs1) For a given array with marks of students -> [85, 97, 44, 37, 76, 60] . Find the average marks of the entire class ?

*/

let student_marks = [85, 97, 44, 37, 76, 60]

Total=0
let Average

for(let element of student_marks){
        Total = Total + element
}


console.log("Total Marks of Students are :- ",Total)

Average = Total/student_marks.length
console.log("Average Marks of Students are :- ",Average)