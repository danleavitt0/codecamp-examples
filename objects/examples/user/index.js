var userInfo = {
	name:'Daniel',
	username:'danleavitt0',
	age:25
}

function getUser(user)  {
	console.log(user.name + ' aka ' + user.username + ' is ' + user.age + ' years old.')
}

getUser(userInfo)

document.body.innerHTML = "Open your browser console!"