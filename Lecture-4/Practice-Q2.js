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


console.log("Updated Prices Array :- ",prices)




  



