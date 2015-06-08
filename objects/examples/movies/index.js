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

function describeMovie(movie) {
	console.log("The movie " + movie.title + " from the year " + movie.year + " was about " + movie.description +
		". It starred " + movie.starring.join(' and ') + ".")
}


for (var movie in movies) {
	describeMovie(movies[movie])
}

document.body.innerHTML = "Open your browser console!"