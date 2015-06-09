# Passing Parameters to Functions

## Activities

- [ ] [Say My Name](https://github.com/danleavitt0/codecamp-examples/tree/master/passingParameters/examples/sayMyName)
- [ ] [Age Calculator]()
- [ ] [Mad Lib]()

## Description

To make **functions** more **reusable** we can pass specific data to them that the function can then manipulate.

## How to use it

To make use of this we need to set up our function to accept the variable. To do this add a 
name for the data between the parentheses. That information is stored in that variable name only while the function is
being exectuted.

```
function addFive ( num ) {
	console.log(num)
}
```

To pass the data, just provide it while calling the function between the parentheses
```
addFive(2)
addFive(5)
```

In the above example, the function is called twice. The first time it is passed the number 2. This means that the first
time it is called, `num` = 2. The second time it is called, the function is passed the number 5. Now `num` will equal 5.

The output would be:
```
2
5
```

## Manipulating Parameters

To add 5 to whatever number gets passed to the function add the line

```
num = num + 5
```
```
function addFive ( num ) {
	num = num + 5
	console.log(num)
}
```
## Multiple Parameters

It is also to pass two numbers to a function by separating the values with commas. The order that the variables are placed when the function is called is the order they will be assigned the parameters in the function definition.

	function addFive ( num1,  num2 ) {
		var total = num1 + num2 + 5
		console.log(total)
	}

	addFive(3, 6)
