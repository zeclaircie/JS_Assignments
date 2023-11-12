'use strict'
let dogs = prompt('Enter dog names, separate them with comma.');
dogs = dogs.split(',');
dogs.sort().reverse()
document.querySelector('body').innerHTML = '<ul></ul>'
for (let i=0; i<dogs.length; i++) {
  let li = document.createElement('li');
  li.innerText = `${dogs[i]}`;
  document.querySelector('ul').appendChild(li);
}