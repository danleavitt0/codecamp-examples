var prompt = require('sync-prompt').prompt

var name1 = prompt('What is the first person\'s name? ')
var speed1 = prompt('What was the first person\'s speed? ')
var distance1 = prompt('What is the first person\'s distance? ')
var name2 = prompt('What is the second person\'s name? ')
var speed2 = prompt('What was the second person\'s speed? ')
var distance2 = prompt('What is the second person\'s distance? ')
var name3 = prompt('What is the third person\'s name? ')
var speed3 = prompt('What was the third person\'s speed? ')
var distance3 = prompt('What is the third person\'s distance? ')

function getTimeMinutes (distance, speed) {
  var time = distance/speed
  var minutes = time*60
  return minutes
}

function makeSentence (name, minutes) {
  var sentence = 'It took ' + name + ' ' + minutes + ' minutes.'
  return sentence
}

var sentence1 = makeSentence(name1, getTimeMinutes(distance1, speed1))
var sentence2 = makeSentence(name2, getTimeMinutes(distance2, speed2))
var sentence3 = makeSentence(name3, getTimeMinutes(distance3, speed3))

console.log(sentence1)
console.log(sentence2)
console.log(sentence3)
