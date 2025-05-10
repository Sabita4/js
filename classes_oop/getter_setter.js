
// class User {   class declare
//     constructor(email,password){
//         this.email = email;
//         this.password = password
//     }
//     get password(){
//     return this._password.toUpperCase()
//     }
//     get email(){
//         return this._email.toUpperCase()
//     }
//     set email(value){
//         this._email = value
//     }
//     set password(value){
//     this._password = value //_new variable is used
//     }
//}
// const sabita = new User("sab@s.com","333")
// console.log(sabita.email);

class User {
    constructor(firstname,lastname){
        // firstname :"joya",
        // lastname : "yadav"
        this.firstname = firstname;
        this.lastname = lastname 
    }
    get firstname(){
        return this._firstname.toUpperCase()
    }
    set firstname(value){
        this._firstname = value
    }
}
const sabita = new User("joya","yadav")
console.log(sabita.firstname);

object.defineProperty  //function used garera
function User(email,password){
    this._email = email;
    this._password = password
    Object.defineProperty(this,'email',{
        get:function(){
            return this._email.toUpperCase()
        },
        set:function(value){
            this._email = value
        }   
    })
    Object.defineProperty(this,'password',{
        get:function(){
            return this._password.toUpperCase()
        },
        set:function(value){
            this._passsword = value
        }   
    })
    
}
const chai = new User("chai@fb.com","098")
console.log(chai.email);

//OBJECT BASED

const User = {
    _email:'kon@jm.com', //_  for private
    _password : 'asi',

    get email(){
     return this._email.toUpperCase()
    },
    set email(value){
        this._email.toUpperCase()
    }
}
const tea = Object.create (User) // (factory function)
console.log(tea.email);
