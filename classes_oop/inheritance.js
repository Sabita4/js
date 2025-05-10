console.log("start");

class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}
class Teacher extends User{
    constructor(username,email,password){
        super(  username)  //superkeyword used
        this.email = email;
         this.password = password;
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}
 const tea = new Teacher("tea","tea@fb.com","9089")
 tea.addCourse();

 const masalatea = new User("masakatea")
 masalatea.logMe()

//  console.log(tea === masalatea);
 console.log(tea instanceof Teacher);