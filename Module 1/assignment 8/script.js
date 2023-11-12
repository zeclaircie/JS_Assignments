'use strict'
let start = parseInt(prompt('Enter the start year:'));
let end = parseInt(prompt('Enter the end year:'));
document.querySelector('body').innerHTML = '<ul></ul>';
for (let i=start; i <= end; i++) {
  if ((i%100===0 && i%400===0) || i%4===0){
    let li = document.createElement('li');
    li.innerText = `${i}`
    document.querySelector('ul').appendChild(li);
  }
}