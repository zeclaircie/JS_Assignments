'use strict'
function isPrime (num, i=2) {
  if (num <=1) {
    return false;
  }
  if (num===i) {
    return true;
  }
  if (num%i === 0) {
    return false;
  }
  return isPrime(num, ++i)
}

let input = parseInt(prompt('Please enter an integer.'));
document.querySelector('body').innerText = `${isPrime(input)}`;