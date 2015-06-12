var prompt = require('sync-prompt').prompt

var base = parseInt(prompt('What number ?'))

for (var i = 1; i <= base; i++) {
  if(base%i === 0)
    console.log(i + ' is a factor')
}
