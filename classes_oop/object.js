
// function addBy5(num){
//     return num+95
// }
//  console.log(addBy5(5));
//  console.log(addBy5.prototype); //null

function createUser(username,score){
  this.username = username
  this.score = score
}
 createUser.prototype.increment = function(){
    this.score++
 }//cant take hardcored like teacore++;

 createUser.prototype.printMe = function(){
    console.log(`price is {this.score}`);
    
 }
const tea =  new createUser("tea",22)
const chai = createUser("chai",250)

chai.printMe()