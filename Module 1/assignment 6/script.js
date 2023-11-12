'use strict'
let select = confirm('Should I calculate the square root?');
if (select === true) {
  let number = parseInt(prompt('Enter the number.'));
  try{
    if (number < 0) throw 'The square root of a negative number is not defined.'
    let result = Math.sqrt(number);
    document.querySelector('body').innerHTML = `<p>The square root is ${result}.</p>`;
  }
  catch(err) {
    document.querySelector('body').innerHTML = `<p>${err}</p>`
  }
}
else {
  document.querySelector('body').innerHTML = '<p>The square root is not calculated.</p>'
}