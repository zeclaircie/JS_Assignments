'use strict'

function calculate() {
  let n1 = parseFloat(document.getElementById('num1').value);
  let n2 = parseFloat(document.getElementById('num2').value);
  let choice = document.getElementById('operation').value;
  switch (choice) {
    case 'add':
      document.getElementById('result').innerText = `${n1 + n2}`;
      break;
    case 'sub':
      document.getElementById('result').innerText = `${n1 - n2}`;
      break;
    case 'multi':
      document.getElementById('result').innerText = `${n1 * n2}`;
      break;
    case 'div':
      document.getElementById('result').innerText = `${n1 / n2}`;
      break;
  }
}

let button = document.getElementById('start');
button.addEventListener('click', calculate);
