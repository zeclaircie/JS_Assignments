'use strict'
let numbers = [];
let newnum = parseFloat(prompt('Enter numbers, or enter "0" to end.'));
while (newnum !== 0) {
  numbers.push(newnum);
  newnum = parseFloat(prompt('Enter numbers, or enter "0" to end.'));
}
numbers.sort(function(a, b){return b - a});
for (let i=0; i<numbers.length; i++) {
  console.log(`${numbers[i]}`);
}