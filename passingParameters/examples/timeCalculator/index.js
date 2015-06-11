var prompt = require('sync-prompt').prompt

function getTimeMinutes(distance, speed) {
  var time = distance/speed
  var minutes = time * 60
  return minutes
}

function makeSentece(name, time) {
  return 'It took ' + name + " " + time + " minutes."
}

var name1 = prompt('What is the first persons name? ')
var distance1 = prompt('What is ' + name1 + "'s distance? " )
var speed1 = prompt('What is ' + name1 + "'s speed? " )
var name2 = prompt('What is the second persons name? ')
var distance2 = prompt('What is ' + name2 + "'s distance? " )
var speed2 = prompt('What is ' + name2 + "'s speed? " )
var name3 = prompt('What is the third persons name? ')
var distance3 = prompt('What is ' + name3 + "'s distance? " )
var speed3 = prompt('What is ' + name3 + "'s speed? " )

var sentence1 = makeSentece(name1, getTimeMinutes(distance1, speed1))
var sentence2 = makeSentece(name2, getTimeMinutes(distance2, speed2))
var sentence3 = makeSentece(name3, getTimeMinutes(distance3, speed3))

console.log(sentence1)
console.log(sentence2)
console.log(sentence3)
