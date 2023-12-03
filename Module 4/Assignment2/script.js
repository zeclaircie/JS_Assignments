'use strict'

const search = document.getElementById('search')
search.addEventListener('submit', async function(evt) {
  evt.preventDefault();
  const keyword = document.querySelector("input[id=query]").value;
  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${keyword}`);
    const data = await response.json();
    for (const s of data) {
      console.log(s.show.name)
    }
  } catch (error) {
    console.log(error.message)
  }
})

