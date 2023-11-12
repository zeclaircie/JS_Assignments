'use strict'

function even (arr) {
  let smallarr = [];
  for (let i = 0; i< arr.length; i++) {
    if (arr[i] % 2 ===0) {
      smallarr.push(arr[i]);
    }
  }
  return smallarr;
}

const array = [2, 9, 24, 77, 53, 56, 87]
const newarray = even(array)
console.log(array)
console.log(newarray)