# Make functions dynamic

## Activities

- [Say My Name](https://github.com/danleavitt0/codecamp-examples/tree/master/passingParameters/examples/sayMyName)
- [Triple](https://github.com/danleavitt0/codecamp-examples/tree/master/passingParameters/examples/triple)
- [Mad Lib](https://github.com/danleavitt0/codecamp-examples/tree/master/passingParameters/examples/madLib)
- [Age Calculator](https://github.com/danleavitt0/codecamp-examples/tree/master/passingParameters/examples/ageCalculator)
- [Time Calculator](https://github.com/danleavitt0/codecamp-examples/tree/master/passingParameters/examples/timeCalculator)

## Content

- [Prompting the user for values](#prompt)
- [Parameters](#parameters)
- [Returning values](#return)

## Description

To make **functions** more **reusable** we can pass specific data to them that the function can then manipulate and then send a value back.

## How to use it

<a name="prompt" />
### Prompt the user

To get new information use the prompt function
```js
var prompt = require('sync-prompt').prompt
var name1 = prompt('What is your name? ')
console.log(name1)
```

The variable `name1` stores the value that the user enters

An example with numbers
```js
var age = prompt('How old are you? ')
console.log(age)
```

<a name="parameters" />
### Introduce Parameters

A parameter tells the function that there is a piece of information that will be provided when the function is called.

The parameter goes inside the parentheses during the function definition
```js
function sayHello (name) {
	console.log(“Hello, ” + name)
}
```
- Inside the function, the parameter is used like any other variable

- To tell the function what the value of name should be you pass it as an argument during the function call

```js
var userName = prompt('What is your name? ')
sayHello("Daniel")
sayHello(userName)
```
- The first time that sayHello is called, the parameter ‘name’ is set to Daniel.

- The second time the value of ‘name’ will be whatever the user inputted

A function can accept any number of parameters.
- Values should be separated by commas.

```js
function total (num1, num2) {
	var total = num1 + num2
	console.log(total)
}

var firstNum = prompt('What is the first number? ')
var secondNum = prompt('What is the second number? ')

total(firstNum, secondNum)
```

<a name="return" />
### Introduce returning values

By using `return`, students can send a value back to where it was called
```js
function double (num) {
	var numDouble = num * 2
	return numDouble
}
```
Define a variable and store the function call
```js
var result = double(2)
console.log(result)
```
Using the `return` keyword ends stops the function and anything instructions after
a return will not be executed

The function calls can be treated like variable and added to each other if the function returns a value
```js
var sum = double(2) + double(7)
console.log(sum)
```
Would output
```
18
```
