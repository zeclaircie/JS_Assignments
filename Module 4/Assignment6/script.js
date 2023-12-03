'use strict'
const article = document.createElement('article');

document.getElementById('submit').addEventListener('click', function(evt) {
  evt.preventDefault();
  article.innerHTML = '';
  const keyword = document.getElementById('keyword').value;
  fetch(`https://api.chucknorris.io/jokes/search?query=${keyword}`)
  .then(response => response.json())
  .then(joke => {
    for (const j of joke.result) {
      const text = document.createElement('p');
      text.innerText = j.value;
      article.appendChild(text);
    }
    document.querySelector('body').appendChild(article);
  })
  .catch(error => {
    console.error('Error fetching joke:', error);
  });
})

