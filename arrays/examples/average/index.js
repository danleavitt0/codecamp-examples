var prompt = require('sync-prompt').prompt

var listLength = parseInt(prompt('How many numbers are in the list? '))
var numList = []

for (var i = 0; i < listLength; i++) {
  numList[i] = parseInt(prompt('Number ' + (i+1) + ': '))
}

function getAverage(numArray) {
  var total = 0
  for(var i = 0; i < numArray.length; i++) {
    total = total + numArray[i]
  }
  var average = total/numArray.length
  return average
}

console.log('The average is: ' + getAverage(numList))
