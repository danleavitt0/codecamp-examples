var movies = {
	"Spiderman":{
		"title":"Spiderman",
		"year":"2012",
		"description":"Spiderman versus the Green Goblin",
		"starring":["Tobey Maguire", "James Franco"]
	},
	"Jello-man":{
		title:"Jello-man",
		year:"1942",
		description:"Jello-man fighting for his rights as a man made of Jello",
		starring:["John Stevens","Bob Nugent"]
	}
}

function describeMovie(movieTitle) {
  var movie = movies[movieTitle]
  if(movie) {
  	console.log("The movie " + movie.title + " from the year " + movie.year + " was about " + movie.description +
  		". It starred " + movie.starring.join(' and ') + ".")
  }
  else console.log(movieTitle + " is not in the database.")
}

describeMovie('Spiderman')
describeMovie("Jello-man")
describeMovie("Adventure guy")

document.body.innerHTML = "Open your browser console!"