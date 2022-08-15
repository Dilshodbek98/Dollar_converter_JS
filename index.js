let input = document.querySelector('.input')

input.addEventListener('input', (e) => {
  let dollar = e.target.value
  
  document.querySelectorAll("p")[0].innerHTML = `Sum : ${dollar*11000}`
  document.querySelectorAll('p')[1].innerHTML = `Funt sterling : ${dollar*0.98}`
  document.querySelectorAll("p")[2].innerHTML = `Ruble : ${dollar * 61}`;

})