'use strict'

function rollDice (side){
  return Math.floor(Math.random()*side) + 1;
}
let dice_side = parseInt(prompt('How many sides does your dice have?'));

document.querySelector('body').innerHTML = '<ul></ul>'
let roll = rollDice(dice_side)
while (roll !== dice_side) {
  let li = document.createElement('li');
  li.innerText = roll;
  document.querySelector('ul').appendChild(li);
  roll = rollDice(dice_side);
}
let lastli = document.createElement('li');
lastli.innerText = roll;
document.querySelector('ul').appendChild(lastli);
