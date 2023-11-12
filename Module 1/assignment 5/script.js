let year = prompt('Enter a year:')
year = parseInt(year)
if (year % 100 === 0) {
  if (year % 400 === 0){
    document.querySelector('body').innerHTML = `<p>${year} is a leap year.</p>`
  }
  else {
    document.querySelector('body').innerHTML = `<p>${year} is not a leap year.</p>`
  }
}
else if (year % 4 ===0) {
  document.querySelector('body').innerHTML = `<p>${year} is a leap year.</p>`
}
else {
  document.querySelector('body').innerHTML = `<p>${year} is not a leap year.</p>`
}