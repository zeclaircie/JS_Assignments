'use strict'
let numbers = []
let newnum = parseFloat(prompt('Enter number.'))
while (numbers.includes(newnum) !== true) {
  numbers.push(newnum);
  newnum = parseFloat(prompt('Enter number.'));
}
alert('The number has been given already.')
numbers.sort(function(a, b){return a - b});
for (let i=0; i< numbers.length; i++) {
  console.log(numbers[i]);
}