var prompt = require('sync-prompt').prompt

function madLib(noun, verb, adjective1, adjective2) {
  var story = 'The ' + adjective1 + ' ' + noun + ' ' + verb + 'into the ' + adjective2 + ' pool.'
  return story
}

console.log(madLib("ant", "bellyflops", "large", "goofy"))
