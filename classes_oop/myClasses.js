
// //ES6
// // console.log("start");

// class User{
//     constructor(username,email,password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }
//     encryptPassword() {        //method add garne
//         return `${this.password}abcd`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }   
// }
// const maria = new User("maria","mar@fb.com","1234") //naya user banako

// console.log(maria.encryptPassword());
// console.log(maria.changeUsername());

//behind the scene edi class navaideko bhaye
  
// function User(name,email,password){
//     this.name = name;
//     this.email = email;
//     this.password = password;
// }
// User.prototype.encryptPassword = function(){
//     return `${this.password}efgh`
// }
// User.prototype.changename= function(){
//     return `${this.name.toUpperCase()}`
// }
// const mia = new User("mia","mia@fb.com","6789") //naya user banako

// console.log(mia.encryptPassword());
// console.log(mia.changename());