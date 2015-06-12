var prompt = require('sync-prompt').prompt

function checkForFactor(base, factor) {
  var remainder = base % factor
  if (remainder == 0)
    return "YES, " + factor + " is a factor of " + base
  else return "NO, " + factor + " is NOT a factor of " + base
}

var num1 = prompt('Number? ')
var num2 = prompt('Factor? ')

console.log(checkForFactor(num1,num2))

// Code goes here
