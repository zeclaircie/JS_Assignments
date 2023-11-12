'use strict'
let input = prompt('Enter three integers, separate them with ","')
const arr = input.split(",")
let sum = 0
let prod = 1
for (let i=0; i<arr.length; i++) {
  let number = parseInt(arr[i]);
  sum+=number;
  prod = prod * number;
}
let avg = sum / arr.length

document.querySelector('body').innerHTML = `<p>The sum is ${sum}</p><p>The product is ${prod}</p><p>The average is ${avg}</p>`
