'use strict';
const names = ['John', 'Paul', 'Jones'];
let element = document.getElementById('target')
let nameList = ``
for (let i = 0; i<names.length; i++) {
  nameList += `<li>${names[i]}</li>`;
}
element.innerHTML = nameList;