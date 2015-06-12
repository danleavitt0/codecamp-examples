#Grade Compare

Create a function that takes a score(number) and turns it into a letter grade.

## String to Number

To turn get a number from a prompt instead of a string you need to add the
`parseInt` function
```js
var number = parseInt(prompt('What is the number? '))
```

## Create

Create 8 variables and prompt user for values for each variable:

  - A name and three grades for the first student
    - `name1`
    - `grade1`
    - `grade2`
    - `grade3`


  - A name and three grades for the second student
    - `name2`
    - `grade4`
    - `grade5`
    - `grade6`

Define two functions:

- `function avarage3`

- `function getGrade`

#### avarage3

`average3` should accept three parameters `num1,num2,num3` and return the average
of those three numbers

#### getGrade

`getGrade` should accept one parameter `gradeScore` and use an `if...else if...else`
block to return the proper letter for the number

## Call
Example function call:
```js
var sentence1 = "The average grade for " + name1 + " is " + getGrade(avg1)
var sentence2 = "The average grade for " + name2 + " is " + getGrade(avg2)
```

## Output
Use console.log to get output
```js
console.log(sentence1)
console.log(sentence2)
```

Example output:
```
The average grade for Daniel is an F
The average grade for John is a B
```

## Documentation

Help with `if...else` statements can be found [here](https://github.com/danleavitt0/codecamp-examples/blob/master/ifElse/README.md)
