# For Loops

## Activities

- [Multiplication Table](https://github.com/danleavitt0/codecamp-examples/tree/master/loops/examples/multiplicationTable)
- [List Factors](https://github.com/danleavitt0/codecamp-examples/tree/master/loops/examples/listFactors)
- [Summation](https://github.com/danleavitt0/codecamp-examples/tree/master/loops/examples/summation)
- [Grade Book](https://github.com/danleavitt0/codecamp-examples/tree/master/loops/examples/gradeBook)

## What does it do?

Loops are handy, if you want to run the same code over and over again, each time with a different value.

This is very useful when using arrays.

## What does it look like?

A **for loop** repeats anything within the curly braces, each time the value of the variable i is increased by 1. It repeats until the condition of the second term is met.

```js
	for (var i = 0; i < 4; i++) {
		// Repeat whatever is within these braces
}
```

An example printing out the value of `i`
```js
for (var i = 0; i < 4; i++) {
	console.log(i)
}
```
```
0
1
2
3
```

An example with a different condition

```js
for (var i = 1; i <= 8; i++) {
	console.log(i)
}
```
```
1
2
3
4
5
6
7
8
```

#### Use with `if...else` statement
Combine the for loop and the if / else selection to describe the size of a number in words
```js
for(var i = 2; i < 8; i++) {
	if( i < 3 ) {
		console.log(i+' is a couple')
  }
  else if( i < 6 ) {
  	console.log(i+' is a few')
  }
  else {
  	console.log(i + ' is many')
  }
}
```
```
2 is a couple
3 is a few
4 is a few
5 is a few
6 is many
7 is many
8 is many
```
