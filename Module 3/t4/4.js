'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

let element = document.getElementById('target');
for (let i = 0; i < students.length; i++) {
  let opt = document.createElement('option');
  opt.value = `${students[i].id}`;
  opt.innerText = `${students[i].name}`;
  element.appendChild(opt);
}
