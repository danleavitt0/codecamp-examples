# Grade Book with Loop

Use a loop to determine how many grades the user wants to enter. Then, find the letter grade for the corresponding score.

## Information

Minimum percent | Grade
----|-----
90|A
80|B
70|C
60|D

To find what score a student needs a grade multiply the percent times the
possible score

For example to get a B on a test that is 80 points
```js
var possibleScore = 80
var scoreForA = 80*0.9
console.log(scoreForA)
```
```
72
```
So any score that is 72 or higher is a B
## Create

####Variables
- Make a variable named `possibleScore` that prompts the user for the highest possible score on a test.
- Make a variable named `numGrades` that prompts the user to input the number of
grades they want to check the grades for.

####Functions
- Define a function named `getGrade` that returns the letter value of the grade.
Use a `for` to check the grade against the minimum score for each letter grade.

## Call
The function should be called from inside the loop.

Example function call:
```js
var letterGrade = getGrade(grade)
```

## Output
Example output:
```
What is the grade? 50
a C
What is the grade? 57
a B
What is the grade? 60
an A
```

## Documentation
For help, look at the [loops documentation](https://github.com/danleavitt0/codecamp-examples/blob/master/loops/README.md)
