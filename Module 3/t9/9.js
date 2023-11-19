'use strict'

function calculate () {
  let input = document.getElementById('calculation').value;
  if (input.includes('+')) {
    let numbers = input.split('+');
    document.getElementById('result').innerText = `${parseFloat(numbers[0]) + parseFloat(numbers[1])}`;
  }
  else if (input.includes('-')) {
    let numbers = input.split('-');
    document.getElementById('result').innerText = `${parseFloat(numbers[0]) - parseFloat(numbers[1])}`;
  }
  else if (input.includes('*'))  {
    let numbers = input.split('*');
    document.getElementById('result').innerText = `${parseFloat(numbers[0]) * parseFloat(numbers[1])}`;
  }
  else {
    let numbers = input.split('/');
    document.getElementById('result').innerText = `${parseFloat(numbers[0]) / parseFloat(numbers[1])}`;
  }
}

document.getElementById('start').addEventListener('click', calculate);
