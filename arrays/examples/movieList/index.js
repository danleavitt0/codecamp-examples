// Code goes here
var movieList = [
  "Spiderman",
  "Batman",
  "The Avengers",
  "The Dark Knight",
  "The Lego Movie"
]

function listMovies(list) {
  for (var i = 0; i < list.length; i++){
    console.log('Your number ' + (i+1) + " movie is " + list[i])
  }
}

listMovies(movieList)
