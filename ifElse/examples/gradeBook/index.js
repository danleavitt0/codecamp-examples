var prompt = require('sync-prompt').prompt

var name1 = prompt('What is the name of the first student? ')
var grade1 = parseInt(prompt(name1 + ' first test score: '))
var grade2 = parseInt(prompt(name1 + ' second test score: '))
var grade3 = parseInt(prompt(name1 + ' third test score: '))

var name2 = prompt('What is the name of the second student? ')
var grade4 = parseInt(prompt(name2 + ' first testscore: '))
var grade5 = parseInt(prompt(name2 + ' second testscore: '))
var grade6 = parseInt(prompt(name2 + ' third testscore: '))


function average3 (n1,n2,n3) {
  return (n1+n2+n3)/3
}

function getGrade(gradeNum) {
  if (gradeNum >= 90)
    return 'an A'
  else if (gradeNum >= 80)
    return 'a B'
  else if (gradeNum >= 70)
    return 'a C'
  else if (gradeNum >= 60)
    return 'a D'
  else
    return 'an F'
}

var avg1 = average3(grade1,grade2,grade3)
var avg2 = average3(grade4, grade5, grade6)

var sentence1 = "The average grade for " + name1 + " is " + getGrade(avg1)
var sentence2 = "The average grade for " + name2 + " is " + getGrade(avg2)

console.log(sentence1)
console.log(sentence2)
