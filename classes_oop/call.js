console.log("start");

function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}
function createUser(username,email,password){
    SetUsername.call(this,username) //aaba chai name,email,pass sabai aaucha //for holding reference
    this.email = email  // email pass aaucha but not name when we arenot adding call
    this.password = password
}
const tea = new createUser("tea","tea@fb.com","123");
    console.log(tea);
