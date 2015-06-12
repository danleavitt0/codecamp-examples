var prompt = require('sync-prompt').prompt
var listLength = prompt('How many numbers in the list? ')
var numList = []

for (var i = 0; i < listLength; i++) {
  numList.push(parseInt(prompt('number: ')))
}

function getAverage(list) {
  var total = 0
  var length = list.length
  for(var i = 0; i < length; i++)
    total += list[i]
  var avg = total/length
  return avg
}

console.log(getAverage(numList))
// Code goes here
