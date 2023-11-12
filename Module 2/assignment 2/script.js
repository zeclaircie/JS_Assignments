'use strict'
const num = parseInt(prompt('How many participants?'));
let people = prompt('Enter names, separate them with comma.');
people = people.split(',');
document.querySelector('body').innerHTML = '<ol></ol>';
for (let i = 0; i<num; i++) {
  let li = document.createElement('li');
  li.innerText = `${people[i]}`;
  document.querySelector('ol').appendChild(li);
}
