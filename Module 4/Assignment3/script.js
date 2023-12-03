'use strict'

const search = document.getElementById('search')
let results = document.createElement('div');
results.id = 'results'
document.querySelector('body').appendChild(results)

search.addEventListener('submit', async function(evt) {
  evt.preventDefault();
  const keyword = document.querySelector("input[id=query]").value;
  document.getElementById('results').innerHTML = ''
  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${keyword}`);
    const data = await response.json();
    for(const s of data) {
      const oneShow = document.createElement('article')
      const showName = document.createElement('h2')
      showName.innerText = s.show.name
      const showURL = document.createElement('a')
      showURL.href = s.show.url
      showURL.target = '_blank'
      const showImage = document.createElement('img')
      showImage.src = s.show.image?.medium
      showImage.alt = s.show.name
      const showSummary = document.createElement('div')
      showSummary.innerHTML = s.show.summary;
      oneShow.appendChild(showName)
      oneShow.appendChild(showURL)
      oneShow.appendChild(showImage)
      oneShow.appendChild(showSummary)
      document.getElementById('results').appendChild(oneShow)
    }
  } catch (error) {
    console.log(error.message)
  }
})

