'use strict'
let name = prompt("What's your name?");
let num = Math.floor(Math.random()*4) + 1;
switch (num) {
  case 1:
    document.querySelector('body').innerHTML = `<p>${name}, you are Gryffindor.</p>`;
    break
  case 2:
    document.querySelector('body').innerHTML = `<p>${name}, you are Slytherin.</p>`;
    break
  case 3:
    document.querySelector('body').innerHTML = `<p>${name}, you are Hufflepuff.</p>`;
    break
  case 4:
    document.querySelector('body').innerHTML = `<p>${name}, you are Ravenclaw.</p>`;
    break
}
