'use strict'

let element = document.getElementById('target');

let item1 = document.createElement('li');
item1.innerText = 'First item';

let item2 = document.createElement('li');
item2.innerText = 'Second item';

let item3 = document.createElement('li');
item3.innerText = 'Third item';

element.appendChild(item1);
element.appendChild(item2);
element.appendChild(item3);
element.className = 'my-item';