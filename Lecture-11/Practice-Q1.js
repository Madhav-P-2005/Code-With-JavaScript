class User
{
    constructor(name , email){
        this.name = name 
        this.email = email
    }

    viewData(){
        console.log(" Website Data :- ")
        return `${this.name} and ${this.email}`
    }
}


let Website = new User("Madhav" , "madhav@gmail.com")


console.log(Website)


/*

Output :-   User {name: 'Madhav', email: 'madhav@gmail.com'}

*/




console.log(Website.viewData())


/*

Output :- 

Website Data :- 

Madhav and madhav@gmail.com

*/