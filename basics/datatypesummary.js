
//primitive types
 //7 types :string,num,boolean,null,undefined,symbol,bigInt

//typescript is the cousin of javascript

// const name = "isha"
// const scoreValue = 100.3
// const insideTemp = null
//  let userEmail;

//  const roll = Symbol('123') //value pass
//  const anotherRoll = Symbol('123')
//  console.log(roll===anotherRoll);
//  const bigNumber = 90929292n;
//  const insideTemp = null
 


//  Reference(non-primitive)
//  Array ,object ,functions

//  const flowers = ["rose","lily","sunflower"]
// //  console.log(flowers);  //curly braces ko bhitra obj define huncha
// let myObj ={

//   name : "sitasma",
//   age : 12
// }
// console.log(myObj);
 
// //functions
// const myFunction = function(){
//     console.log("HELLO BEAUTIES");
// }
    

// console.log(myFunction);

//STACK(primitive)yo use vako bela copy chai jancha ,HEAP(non-primitive) original value ko reference aaucha

let myClass = "Highstandard"
let anotherClass = "Lowerstandard"
anotherClass = "Higheststandadrd"
console.log(myClass);
console.log(anotherClass);

let userOne={
    name:"jasmine"
}
let userTwo = userOne
userTwo.name= {
    name :"zora",
   
}
console.log(userOne.name);
console.log(userTwo.name);