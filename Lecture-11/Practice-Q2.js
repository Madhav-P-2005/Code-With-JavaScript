class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  viewData() {
    console.log("Website Details :-");
    let details = `${this.name} and ${this.email}`;

    if (this.CollegeName && this.Age) {
      details = ` Studying at ${this.CollegeName} and ${this.Age}`;
    }
    return details;
  }
}

class Admin extends User {
  constructor(name, email, CollegeName, Age) {
    super(name, email);
    this.CollegeName = CollegeName;
    this.Age = Age;
  }
  editData(CollegeName, Age) {
    // Update properties dynamically
    if (CollegeName) this.CollegeName = CollegeName;
    if (Age) this.Age = Age;

    return "Data updated successfully!";
  }
}

let admin = new Admin("Madhav", "madhav@gmail.com");

console.log(admin.viewData()); // Display initial data

console.log(admin.editData("K.L.E P.C Jabins college", 30)); // Edit data

console.log(admin.viewData()); // Display updated data



/*

Output :- 

Website Details :-

Madhav and madhav@gmail.com

Data updated successfully!

Website Details :-
Studying at K.L.E P.C Jabins college and   30

*/




// Getters and Setters in JavaScript   ?

/*

💡) Getters and setters are part of JavaScript's Object-Oriented Programming paradigm. They provide a way to control access to an object's properties while allowing encapsulation and additional logic when accessing or modifying data.


    a) Getters :-  Methods that allow you to access an object’s properties.

    b) Setters :-  Methods that allow you to set or update an object’s properties.

*/



// Example :-
class Person{
  constructor(name , age){
    this._name = name;
    this._age = age;
  }
 

   // Getter for name
   get name(){
    return this._name;
   }


   // Setter for name
   set name(newName){
    if(newName.length>0){
     this._name = newName;
    }
    else{
      console.log("Name cannot be empty")
    }
   }

   // Getter for age
   get age(){
    return this._age;
   }


   // Setter for age
   set age(newAge){
    if(newAge > 0){
      this._age = newAge;
    }
    else{
      console.log("Age must be positive");
    }
   }
}


// Create an instance
let person = new Person("Madhav" , 19)


// Access properties using getters 
console.log(person.name);     // Output :- Madhav
console.log(person.age);      // Output :- 19


// Update properties using setters 
person.name = ""            // Output :-  Name cannot be empty
person.name = "Karan"       
person.age = 30;


// Try setting invalid values 
person.age = -5;                // Output :-  Age must be positive ! 


console.log(person)             // Output :- Person {_name: "Karan", _age: 30}





// Usage of Getters and Setters ? 

/*

1) Validation :-   For example, prevent setting invalid values (e.g., negative age).

2) Transformation :- Modify data before setting or after getting it (e.g., converting units, formatting strings).


3) Read-Only Properties :- Use a getter without a setter to make a property read-only.

4) Data Hiding :- Hide private fields using a naming convention (e.g., _field) and control access via getters/setters.

*/




// How Getters and Setters Work  ? 

/*

1) Encapsulation :-   They allow you to encapsulate internal data (e.g., _name, _age) and define custom logic for accessing or modifying that data.


2) Getter :-   
    
      a) A method that retrieves the value of a property.

      b) Acts like a property, so it is called without parentheses.

console.log(person.name); // Access getter



3) Setter :-   

      a) A method that updates the value of property.

      b) Allows you to add validation or transformation logic before setting the value.

   >>> person.name = "Jane"; // Use setter to update name


4) Behind the Scenes :- Getters and setters internally behave like methods but allow you to use property-like syntax for cleaner code.

*/