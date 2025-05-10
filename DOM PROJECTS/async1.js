//generate a randomcolor
 const randomColor = function(){
   const hex = "0123456789ABCDEF"

   let color ="#"
   for(i=0;i<6;i++){
    color += hex[Math.floor(Math.random()*10)]
   }
   return color
 };
//  console.log(randomColor());

let intervalId;
const startChangingColor = function(){
    // setInterval(changeBgColor,1000)
    if(!intervalId){ //conditional check
    intervalId=setInterval(changeBgColor,1000);
}
    function changeBgColor(){
document.body.style.backgroundColor=randomColor();//randomly chai change hudaina
    }
};


 const stopChangingColor = function(){
    clearInterval(intervalId);
    // intervalId = null; stop huncha comment garesi
};

document.querySelector('#start').addEventListener('click',startChangingColor)
 document.querySelector('#stop').addEventListener('click',stopChangingColor)