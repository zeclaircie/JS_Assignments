'use strict'

function print_result() {
  let firstname = document.querySelector("input[name='firstname']").value;
  let lastname = document.querySelector("input[name='lastname']").value;
  document.getElementById('target').innerText = `Your name is ${firstname} ${lastname}`;
}

document.getElementById('source').addEventListener('submit', function(event) {
  event.preventDefault();
  print_result();
})





