'use strict';

function calculatePobability(dice, eye, sample) {
  let got_sum = 0;
  for (let i = 0; i < sample; i++) {
    let sum = 0;
    for (let j = 0; j < dice; j++) {
      let roll = Math.floor(Math.random() * 6) + 1;
      sum += roll;
    }
    if (sum === eye) {
      got_sum += 1;
    }
  }
  let result = (got_sum / sample) * 100;
  result.toFixed(2);
  return result;
}

let dice_number = parseInt(prompt('How many dices?'));
let eye = parseInt(prompt('What sum to get?'));
document.querySelector(
    'body').innerText = `Probability to get sum ${eye} with ${dice_number} dice is ${calculatePobability(
    dice_number, eye, 10000)}%`;


