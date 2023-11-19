'use strict'
function change_picture() {
  let pic = document.getElementById('target');
  pic.src = 'img/picB.jpg';
}

function change_back() {
  let pic = document.getElementById('target');
  pic.src = 'img/picA.jpg';
}

let text = document.getElementById('trigger');
text.addEventListener('mouseover', change_picture);
text.addEventListener('mouseleave', change_back);