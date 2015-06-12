# Arrays

## Activities

- [Movie List]()
- [Average Distance]()

## What is it?
- An **array** is a data type that can hold many values
- It is easiest to think of an **array** as a list

## How to use it
To create an array start like defining any other variable.  Then add brackets and a series of value. Values are separated by a comma and can be any type of variable.

An array of numbers:
```js
var numberArray = [
  3,
  4,
  16,
  100,
  150
]
```

An array of names:
```js
var nameArray = [
	'Daniel',
	'Josh',
	'Manuel',
	'Bobby'
]
```

#### Indexes
- Each item in an array is assigned a number to help find the value known as an index.
- The index 0 is assigned to the first value, 1 to the second, and so on.

In the example above

- `nameArray[1]` would equal 'Josh'
- `nameArray[3]` would equal 'Bobby'

#### Length
- An array also has a special property called length that returns how many entries there are in the array.
```
nameArray.length would equal 4 because there are four values in the array.
```
