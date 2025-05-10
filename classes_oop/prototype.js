
let myName = "sabita"
console.log(myName.truelength) //byDefault value 


let myHeros= ["thor","spiderman"]
let heroPower = {  //obj banako
    // thor: "hammer",
    spidernam : "sling",

    getSpiderPower:function(){
        console.log(`spidey power is $(this.spidername)`);
        
    }
}
 Object.prototype.sabita = function(){
    console.log(`sabita is present in all objects`);
    
 }

 Array.prototype.heySabita = function(){
    console.log('sabita says hello');
    
}
// // heroPower.sabita()
// myHeros.sabita()
// myHeros.heySabita()
// heroPower.heySabita();

//inheritance
 const User = {
    name: "Sab",
    email : "google@gmail.com"
 }
const Teacher = {
    makeVideo : true
}
const TeachingSupport = {
    isAvailable : false
}
const TASupport = {
    makeAssignment : `JS assignment`,
    fullTime : true,
    __proto__ :TeachingSupport
}
Teacher.__proto__ = User

//modernsyntax
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "SabwithDesign"
String.prototype.truelength = function(){
    console.log(`$(this)`); //esma sabwith design aaucha
    console.log(`$(this.name)`);
    console.log(`True length is : ${this.trim().length})`);
    
}
anotherUsername.Truelength()
"sab".truelength()


  