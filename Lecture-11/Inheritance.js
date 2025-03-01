/*

💡) Inheritance in JavaScript is a mechanism where one class (or object) can inherit properties and methods from another class (or object). It promotes code reusability and allows you to create hierarchies of objects or classes.


💡) If Child & Parent have same method , child's method will be used . [Method Overriding].

*/


// Types of Inheritance in JavaScript  ? 

/*


💡) JavaScript supports the following types of inheritance :- 

A)  Classical Inheritance (ES6 Classes)
Inheritance using the class and extends keywords.


*/



// Syntax :- 
class Parent {

}

class child extends Parent{

}




// Example 
class Parent{
    hello(){
        console.log("hello");
    }
}

class Child extends Parent{

}


let obj = child()

// How Does It Work ? 

/*

⭐) Classical Inheritance

    a) The extends keyword specifies that a child class is inheriting from a parent class.

    b) The super keyword calls the constructor or methods of the parent class.

    c) The child class can override parent methods by redefining them.

*/





// Example :- 


class Person{
  constructor(){
    this.species = "homo sapiens"
  }
    eat(){
      console.log("eat")
    }

    sleep(){
      console.log("sleep")
    }

    work(){
      console.log("Do Nothing")
    }
}

class Engineer extends Person{

   work(){
    console.log("Solve problems.  Build Something !. ")
   }
}

class Doctor extends Person{

   work(){
    console.log("Treat Patients . ")
   }
}


let Madhav =  new Engineer()

console.log(Madhav)               // Output :- Engineer {species: "homo sapiens"}


let p1 = new Person();

console.log(p1)                  // Output :- Person {species: "homo sapiens"}





/*

B)  Prototypal Inheritance :- Inheritance using prototype chaining, where objects inherit directly from other objects.

*/ 


// Example :- 
let parent = {
    greet: function() {
        return "Hello from Parent!";
    }
};

let child = Object.create(parent); // child inherits from parent
child.sayHello = function() {
    return `${this.greet()} Hello from Child!`;
};

console.log(child.sayHello());     // Output :- Hello from Parent! Hello from Child!



/*

⭐) Prototypal Inheritance  

      a) Objects are linked through the prototype chain.

      b) A child object inherits methods and properties from the parent object via the prototype.

      c) If a property or method is not found in the child object, JavaScript looks up the prototype chain.

*/



/*

⭐) Usage of Inheritance

A)  Code Reusability :- Inheritance allows shared functionality across different classes or objects.

B) Building Object Hierarchies :-  For example, creating parent-child relationships like Animal → Dog, Cat.

C) Overriding :- The child class can redefine the parent’s methods to provide specific implementations.

*/




// ⭐) Super Keyword  ? 

class Person{
  constructor(){
    this.species = "homo sapiens"
  }
    eat(){
      console.log("eat")
    }

  
}

class Engineer extends Person{
   constructor(branch){
      super();
      this.branch = branch;
   }

   work(){
    console.log("Solve problems.  Build Something !. ")
   }
}



let EngineerObj =  new Engineer("Chemical engg")

console.log(EngineerObj)               

/*

Output :- 

{
  Engineer: {},
  species: "homo sapiens",
  branch: "Chemical engg",
  constructor: ƒ Engineer(),
  work: ƒ work(),
  eat: ƒ eat(),
  [[Prototype]]: {}
}

*/



// Example 2  :- 


class Person {
  constructor() {
    console.log("enter parent constructor")
    this.species = "homo sapiens";
  }
  eat() {
    console.log("eat");
  }
}

class Engineer extends Person {
  constructor(branch) {
    console.log("Entered Child Constructor ")
    super();     // to invoke parent class constructor 
    this.branch = branch;
    console.log("Exits the Child Constructor")
  }

  work() {
    console.log("Solve problems.  Build Something !. ");
  }
}

let EngineerObj1 = new Engineer("Chemical engg");

console.log(EngineerObj1);   


/*

Output :- 

Entered Child Constructor 

enter parent constructor

Exits the Child Constructor

*/



// Example 3 :- 

class Person {
  constructor(name) {
    console.log("enter parent constructor");
    this.name = name;
    this.species = "homo sapiens";
  }
  eat() {
    console.log("eat");
  }
}

class Engineer extends Person {
  constructor(name){
    console.log("Entered Child Constructor ");

    super(name);          // to invoke parent class constructor

    this.branch = branch;

    console.log("Exits the Child Constructor");
  }

  work() {
    super.eat()
    console.log("Solve problems.  Build Something !. ");
  }
}

let EngineerObj2 = new Engineer("Madhav");

console.log(EngineerObj1);   


/*

Output :- 

{
  Engineer: {},
  name: "Madhav",
  species: "homo sapiens",
  constructor: ƒ Engineer(),
  work: ƒ work(),
  eat: ƒ eat(),
  [[Prototype]]: {}
}

*/



console.log(EngineerObj2.work())


/*

Output :-


eat

Solve problems.  Build Something !.

*/