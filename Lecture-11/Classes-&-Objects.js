/*

⭐) Definition  :- A JavaScript object is a complex data structure that stores data in key-value pairs. It is used to represent real-world entities like users, products, or configurations.


*/


["Note :- 📃) Syntax :-  Objects can be created in multiple ways "]


// a) Using Object Literal (Most Common) :- 


let person1 = {
  name: "John", // Key-Value pair
  age: 25,
  isStudent: false,
  greet: function () {
    return "Hello, " + this.name;
  },
};



console.log(person1)

/*

Output :- 

{
  name: "John",
  age: 25,
  isStudent: false,
  greet: ƒ greet(),
  [[Prototype]]: {}
}


*/


console.log(person1.name)      // Output :- John

console.log(person1.greet())      // Output :- Hello, John

console.log(person1.age)      // Output :- 25

console.log(person1.isStudent)      // Output :- false





// b) Using new Object() (Less Common) :- 

let person2 = new Object();
person2.name = "John";
person2.age = 25;
person2.isStudent = false;


console.log(person2)

/*

Output :-  {name: 'John', age: 25, isStudent: false}

*/





// c) Using a Constructor Function :- 

function Person3(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    return `Hello, my name is ${this.name}`;
  };
}


let person4 = new Person3("John", 25);

/*

Output :- 

{
  name: "John",
  age: 25,
  greet: ƒ (),
  constructor: ƒ Person3(),
  [[Prototype]]: {}
}

*/


let person5 = new Person3("Alice", 30);


/*

Output :- 

{
  name: "Alice",
  age: 30,
  greet: ƒ (),
  constructor: ƒ Person3(),
  [[Prototype]]: {}
}

*/




// d) Using Class (ES6)  :- 

class Personn {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Hello, my name is ${this.name}`;
  }
}

let personn = new Personn("John", 25);



/*

Output :-   Personn {name: "John", age: 25}

*/




// How Does It Work ?

/*

   a) Objects store data in key-value pairs.

   b) You can access, modify, and delete object properties.

   c)  Objects can contain functions (methods) that allow actions on data.

*/


// Accessing Object Properties  :- 

console.log(person.name);    // Dot notation → "John"
console.log(person["age"]);  // Bracket notation → 25




// Modifying Object Properties

person.age = 30;  // Modify existing property
console.log(person.age); // 30




// Adding New Properties 

person.city = "New York";
console.log(person.city); // "New York"



// Deleting Properties

delete person.age;
console.log(person.age);       // undefined




// Usage of JavaScript Objects  ? 

/*


JavaScript objects are widely used in :- 

1) Storing and managing data (e.g., user details, product info).

2) Grouping related functionalities (methods inside objects).

3) APIs and JSON Data (objects are the backbone of JSON format).

4) Event handling in web applications.

5) Encapsulating and structuring code (using objects or classes).

*/



// Prototypes in JS ? 

/*

 a) A Javascript object is an entity having state and behavior (properties and method). 

 b) JS Objects have a special property called prototype . 

 c) We can set prototype using __proto__.


 ["Note :- If object and prototype have same method , object's method will be used."]

*/


const employee = {
    calcTax()
    {
      console.log("tax rate is 10 %")
    },

    calctax2 : function(){
      console.log("tax rate is 10 %")
    }
}

const KaranArjun = {
    salary : 50000,
};


// Used to set the prototype 
KaranArjun.__proto__ = employee;


/*

Output :- 

salary: 50000
=> [[Prototype]]: Object
    calcTax: ƒ calcTax()
    calctax2: ƒ ()
    [[Prototype]]: Object

*/


console.log(KaranArjun.calcTax())   // Output :- tax rate is 10 %




// Classes in Js ? 

/*

💡) classes are a blueprint for creating objects. They simplify the creation and management of objects by providing a clear syntax for encapsulating data (properties) and behavior (methods). 

💡) JavaScript classes were introduced in ES6 (ECMAScript 2015) and are built on top of JavaScript's existing prototypal inheritance. 

*/




/*

Syntax :- 

class MyClass{
  constructor(){...}

  myMethod(){...}
}


let myObj = new MyClass();

*/


// Example 
class ToyotaCar{
  start(){
    console.log("start")
  }

  stop(){
    console.log("stop")
  }

}


let T = new ToyotaCar()


/*

Output :- 

{
  ToyotaCar: {},
  constructor: ƒ ToyotaCar(),
  start: ƒ start(),
  stop: ƒ stop(),
  [[Prototype]]: {}
}

*/




// Example 2 :- 

class ToyotaCar {
  start() {
    console.log("start");
  }

  stop() {
    console.log("stop");
  }

  setBrand(brand){
    this.brandName = brand
  }
}
  
let fortuner = new ToyotaCar();
fortuner.setBrand = "TATA"

let lexus = new ToyotaCar();
lexus.setBrand("lexus");



