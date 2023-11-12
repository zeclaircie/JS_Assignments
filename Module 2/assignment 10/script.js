'use strict'

let candidates = [];

//function for initialize the array of candidate objects
function addCandidate(candidate) {
  candidates.push({name:candidate, votes: 0,})
}

//add vote when name match
function vote(candidate) {
  for (let i = 0; i<candidates.length; i++) {
    if (candidates[i].name === candidate) {
      candidates[i].votes += 1;
    }
  }
}

//ask for candidate name and initialize the data object
let candidateNum = parseInt(prompt('How many candidates?'));
for (let i = 0; i<candidateNum; i++) {
  let candidateName = prompt(`Name for candidate ${i+1}`);
  addCandidate(candidateName);
}

let voterNum = parseInt(prompt('How many voters?'))
for (let i = 0; i<voterNum; i++) {
  let voted = prompt('Who do you vote for?');
  vote(voted);
}

//sort candidates by votes
candidates.sort(function (a, b) {return b.votes - a.votes});
console.log(`The winner is ${candidates[0].name} with ${candidates[0].votes} votes.\nresults:`);
for (let i=0; i<candidates.length; i++) {
  console.log(`${candidates[i].name}: ${candidates[i].votes} votes`);
}