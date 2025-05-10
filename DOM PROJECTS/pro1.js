// const buttons = document.querySelectorAll('.button');
// const body = document.querySelector('body');

// buttons.forEach(function (button){
//     console.log(button);
//     buttons.addEventListener('click',function(e){
//         console.log(e);
//         console.log(e.target);
//     })
// });
//         if(e.target.data-color ==='grey'){
//             body.style.backgroundColor = e.target.data-color;
//         }
//         else if(e.target.data-color ==='red'){
//             body.style.backgroundColor = e.target.data-color;
//         }
//         else if(e.target.data-color ==='blue'){
//             body.style.backgroundColor = e.target.data-color;
//         }
//         else if(e.target.data-color ==='green'){
//             body.style.backgroundColor = e.target.data-color;
//         }
//         else if(e.target.data-color ==='yellow'){
//             body.style.backgroundColor = e.target.data-color;
//         }

//     })
// });
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    const color = button.getAttribute('data-color');
    body.style.backgroundColor = color;
  });
});

