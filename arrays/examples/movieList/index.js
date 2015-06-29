var prompt = require('sync-prompt').prompt

var favoriteMovies = [
  'Spiderman',
  'Batman',
  'The Avengers',
  'The Green Lantern',
  'Captain America'
]

function listMovies (movies) {
  for (var i = 0; i < movies.length; i++) {
    console.log('Your number ' + (i+1) + ' movie is ' + movies[i])
  }
}

listMovies(favoriteMovies)
