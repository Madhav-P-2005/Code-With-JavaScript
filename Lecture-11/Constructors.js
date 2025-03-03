// Constructor in Js  ?

/*

💡) The constructor() is a special method used to initialize the properties of a class when an object is created.

   ⭐) Automatically  by new 

   ⭐) initializes Object 

*/

// Example
class ToyotaCar {
  constructor(brand, mileage) {
    this.brand = brand;
    this.mileage = mileage;
  }

  start() {
    console.log("start");
  }

  stop() {
    console.log("stop");
  }
}

let fortuner = new ToyotaCar("TATA", 100); // Constructor

console.log(fortuner);     // Output :- ToyotaCar {brand: "TATA", mileage: 100}

let lexus2 = new ToyotaCar("BMW", 200);

console.log(lexus2);    // Output :- ToyotaCar {brand: "BMW", mileage: 200}