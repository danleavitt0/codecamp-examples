var prompt = require('sync-prompt').prompt
// Code goes here
var number = prompt('Which number would you like the mulitplication table for? ')

for(var i = 1; i<=12; i++){
  console.log(number + ' x ' + i + ' = ' + number*i)
}
