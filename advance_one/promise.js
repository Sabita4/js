
const promiseOne = new Promise(function(resolve,reject){
      //do an async task
//Database calls,cryptography,network(yo duita kam huna sakcha)
setTimeout(function(){
    console.log('Async task is compelete');
    resolve()
   // reject()
},1000);

})
promiseOne.then(function(){ //then has connection with resolve
    console.log("Promise consumed")
})   

new Promise(function(resolve,reject){ //variable ma store garnu isnt neccessary
    setTimeout(function(){
     console.log('ASYNC 2')
     resolve()
    },1000);
}).then(function(){
    console.log('ASYNC OK')
})

   const promiseThree = new Promise(function(resolve,reject){
          setTimeout(function(){
      resolve({username:"Sab" ,email:"sab@example.com"}) //obj pass ,paramtetr pass
          },1000)
})
    promiseThree.then(function(user){  //how to consume
      console.log(user);//data lene
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
    let error = true
    if(!error){
        resolve({username:"Sab" ,password:"1234"})
    }
    else{
        reject('ERROR:SOMETHINNG WENT WRONG')
    }
    },1000)
})
   promiseFour
   .then((user) => {
 console.log(user);
 return user.username
}).then((username)=>{
    console.log(username);

}).catch(function(error){
     console.log(error);
}).finally(()=> console.log("The promise is either resolved or rejected"))


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"jab" ,password:"345"})
        }
        else{
            reject('ERROR:JS WENT WRONG')
        }
      },1000)
});
//   async  function consumePromiseFive(){
//     const response = await promiseFive
//     console.log(response);
//   } 
//esari use gareni vayo 
async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    }catch (error){
        console.log(error);
    }
}
  consumePromiseFive()

//   async function getAllUsers(){
//     try{
//         const response= await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response); yo garyo vane aaucha but format diff
//          const data =await response.json()
//          console.log(data);//it takes time also
//     }catch(error){
//         console.log("E:",error);
//     }
   
//   }
//   getAllUsers()  


//   fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response) => {
//    return response.json()
//   })
//   .then((data) => {
//     console.log(data);
//   })
