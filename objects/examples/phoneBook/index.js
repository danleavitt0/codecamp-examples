var phoneBook = {
	Elmo:"555-5555",
	Ernie:"123-4567"
}

function getNumber(name){
	if (phoneBook[name])
		console.log(name + "'s phone number is " + phoneBook[name])
	else console.log(name + " is not listed in this phonebook.")
}

getNumber("Elmo")
getNumber("Big Bird")
getNumber("Ernie")

document.body.innerHTML = "Open your browser console!"