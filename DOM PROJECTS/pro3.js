
const clock = document.getElementById('clock'); //queryselector used gareni huncha



setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleTimeSting());
    clock.innerHTML = date.toLocaleTimeString();
},1000)