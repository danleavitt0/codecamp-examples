var prompt = require('sync-prompt').prompt

var scorePossible = prompt('What is the highest possible score? ')
var numGrades = prompt('How many grades do you want to enter? ')

for (var i = 0; i < numGrades; i++){
  grade = prompt('What is the grade? ')
  console.log(getGrade(grade))
}

function getGrade(gradeNum) {
  if (gradeNum >= scorePossible*.9)
    return 'an A'
  else if (gradeNum >= scorePossible*.8)
    return 'a B'
  else if (gradeNum >= scorePossible*.7)
    return 'a C'
  else if (gradeNum >= scorePossible*.6)
    return 'a D'
  else
    return 'an F'
}
