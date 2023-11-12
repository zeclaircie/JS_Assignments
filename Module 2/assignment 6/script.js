'use strict'

function rollDice (){
  return Math.floor(Math.random()*6) + 1;
}
document.querySelector('body').innerHTML = '<ul></ul>'
let roll = rollDice()
while (roll !== 6) {
  let li = document.createElement('li');
  li.innerText = roll;
  document.querySelector('ul').appendChild(li);
  roll = rollDice();
}
let lastli = document.createElement('li');
lastli.innerText = roll;
document.querySelector('ul').appendChild(lastli);
