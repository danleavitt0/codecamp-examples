var prompt = require('sync-prompt').prompt

var name1 = prompt('What is the first person\'s name? ')
var birthYear1 = prompt('What is the first person\'s birth year? ')
var name2 = prompt('What is the second person\'s name? ')
var birthYear2 = prompt('What is the second person\'s birth year? ')

function getAgeDays(year) {
  var currentYear = 2015
  var age = currentYear - year
  var days = age * 365
  return days
}

function makeSentence (name, days) {
  return name + ' is around ' + days + ' days old.'
}

var sentence1 = makeSentence(name1, getAgeDays(birthYear1))
var sentence2 = makeSentence(name2, getAgeDays(birthYear2))
console.log(sentence1)
console.log(sentence2)
