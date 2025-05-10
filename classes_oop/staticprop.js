
class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username:${this.username}`);
    }
    static createId(){
        return `456`;
    }
}
const sabi = new User("sabi")
// console.log(sabi.createId())

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}
const iphone =  new Teacher("iphone","iphon@fb.com")
console.log(iphone.createId());