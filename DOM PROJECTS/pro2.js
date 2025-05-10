const form = document.querySelectorAll('form');
form.addEventListerner('submit' ,function(a){
   a.preventDefault()
 
   const height = parseFloat(document.querySelector('#height').value);
   const weight = parseFloat(document.querySelector('#weight').value);
   const results = document.querySelector('#results');

   if(height === '' || height <0 || isNaN(height)){
    results.innerHTML= 'please give me a valid height ';
   }
   
   else if(weight === '' || weight <0 || isNaN(weight)){
    results.innerHTML= 'please give me a valid weight ';
   }
   else{
    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
    //show the result
    let status = '';
    if (bmi < 18.5) status = 'Underweight';
    else if (bmi < 24.9) status = 'Normal weight';
    else if (bmi < 29.9) status = 'Overweight';
    else status = 'Obese';

    results.innerHTML = `Your BMI is <strong>${bmi}</strong> (${status})`;
  
   }
})  