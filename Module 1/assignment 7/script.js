'use strict'
let rolls = parseInt(prompt('How many rolls?'));
let sum = 0;
for (let i = 0; i<rolls; i++) {
  let roll = Math.floor(Math.random()*6) + 1;
  sum += roll;
}
document.querySelector('body').innerHTML = `The sum is ${sum}.`;