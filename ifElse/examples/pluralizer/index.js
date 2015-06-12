var prompt = require('sync-prompt').prompt

var number = Math.floor(Math.random()*8 + 1)
var animal = prompt('animal: ')
var place = prompt('place: ')

function pluralizer (word, number) {
  if (number > 1 || number == 0)
    return word + 's'
  else {
    return word
  }
}

function areOrIs (number) {
  if (number > 1 || number == 0)
    return "are "
  else {
    return "is "
  }
}

var sentence1 = 'There ' + areOrIs(number) + number + ' ' + pluralizer(animal, number) + ' at the ' + place

console.log(sentence1)
