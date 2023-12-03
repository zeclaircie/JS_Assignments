'use strict'

fetch("https://api.chucknorris.io/jokes/random")
  .then(response => response.json())
  .then(joke => {
    console.log(joke.value);
  })
  .catch(error => {
    console.error('Error fetching joke:', error);
  });