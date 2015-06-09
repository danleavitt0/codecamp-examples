# Variables

## Activities

- [ ] [ageCalculator](https://github.com/danleavitt0/codecamp-examples/tree/master/variables/examples/ageCalculator)

## To define a variable

For a **number**:
```
var age = 27
```
For a **string** (letter, word, or group of words): 
```
var name = "Daniel"
```

## Operations with numbers

The following is a list of operations that can be performed on number variables

```
var a = 4
var b = 2
```

Name | Syntax | Example | Output
--------|------|------|-------
Addition | + | var c = a + b | c = 6
Subtraction | - | var c = a - b | c = 2
Multiplication | * | var c = a * b | c = 8
Division | / | var c = a / b | c = 2
Modulo (Remainder) | % | var c = a % b | c = 0

## Operations with strings

Strings can be added to each other to combine them

```
var firstName = "Daniel"
var lastName = "Leavitt"

var fullName = firstName + lastName
console.log(fullName)
```
Output would look like this:
```
DanielLeavitt
```

To make sure there are spaces add a space between firstName and lastName
```
var firstName = "Daniel"
var lastName = "Leavitt"

var fullName = firstName + " " + lastName
console.log(fullName)
```
Output would look like this:
```
Daniel Leavitt
```
