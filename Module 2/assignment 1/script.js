'use strict'
let array = prompt('Enter five numbers, separate them with comma');
array = array.split(',')
for (let i = array.length; i>=0; i--) {
  console.log(array[i]);
}