var user = {
  name:'Daniel',
  userName:'danleavitt0',
  birthYear:1990
}

function getAge(year) {
  var age = 2015-year
  return (age + ' years old')
}

function getUser(user) {
  console.log(user.name + ' aka ' + user.userName + ' is ' + getAge(user.birthYear))
}
getUser(user)