'use strict'

function concat(arr) {
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}

const myArray = ['Leon', 'Ada', 'Claire', 'Chris', 'Jill', 'Barry']
document.querySelector('body').innerText = concat(myArray)
