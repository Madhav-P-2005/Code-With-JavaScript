/*

Qs 2) . For a given array with prices of 5 items -> [250, 645, 300, 900, 50]. All items have an offer of 10% OFF on them. Change the array to store final price afterapplying offer.

*/


let prices = [250, 645, 300, 900, 50];

let offer =  0.1

let Final_Price

let Discounted_Array =[]


for(let price of prices){
    
    Discount_price= price * offer;
    console.log(Discount_price)

    Discounted_Array.push(Discount_price)
    
}


console.log("Discounted Items Prices :- ",Discounted_Array)


for(let index=0;index<prices.length;index++){

    Final_Price = prices[index] - Discounted_Array[index];

    prices[index] = Final_Price;

    console.log(`Final Price for item ${index+ 1} : ${Final_Price}`)
    
}


console.log("Updated Prices Array :- ",prices)    // Output :- Updated Prices Array :-  [ 225, 580.5, 270, 810, 45 ]   



/*

Output :- 


25
64.5
30
90
5

Discounted Items Prices :-   (5) [25, 64.5, 30, 90, 5]

Final Price for item 1 : 225
Final Price for item 2 : 580.5
Final Price for item 3 : 270
Final Price for item 4 : 810
Final Price for item 5 : 45

Updated Prices Array :-  (5) [225, 580.5, 270, 810, 45]


*/



// or 




let items = [250, 645, 300, 900, 50];

let i = 0

for(let val of items){

    let offer = val/10;

    items[i] = items[i] - offer;

    console.log(`value after offer   =  ${items[i]}`)

    i++;

}




/*

Output :- 


value after offer   =  225
value after offer   =  580.5
value after offer   =  270
value after offer   =  810
value after offer   =  45

*/



// or



for(let i=0;i<items.length;i++)
{
    let offer = items[i] / 10;
    items[i] -= offer;

}

console.log(items)   // Output :-  [ 225, 580.5, 270, 810, 45 ]