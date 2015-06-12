# If...Else Statement

## Activities

- [Factors Calculator](https://github.com/danleavitt0/codecamp-examples/tree/master/ifElse/examples/factors)
- [Pluralizer](https://github.com/danleavitt0/codecamp-examples/tree/master/ifElse/examples/pluralizer)
- [Grade Book](https://github.com/danleavitt0/codecamp-examples/tree/master/ifElse/examples/gradeBook)

## Comparison operators

if `x = 5`

Operator | Description | Example True | Example False
---|---|---|---
`===` | equal to | `x === 5` | `x === 8`
`!=` | not equal to | `x != 4` | `x != 5`
`>` | greater than | `x > 4` | `x > 10`
`<` | less than | `x < 10` | `x < 5`
`>=` | greater than or equal to | `x >= 5` | `x >= 6`
`<=` | less than or equal to | `x <= 5` | `x <= 4`

## What is it?

- `if, else-if, and else` add the ability to do different tasks depending on a value

## How does it work?

#### if (required)
The first comparison to check is the `if (comparison) { //code }`.
  - If the comparison is true run the code in the curly braces.
  - If there is an `else if` skip to that
  - If there is no `else if` skip to the `else`
  - If there is no `else` the `if...else` statement is done

```js
var x = 5
if ( x > 4 ) {
 console.log("x is greater than 4")
}
```
```
x is greater than 4
```

#### else if (optional)
- Check the `else-if` if there is one
  - There can be as many `else if` statements as needed
  - If it is true execute the code inside the curly braces
  - If it is not true try the next `else-if` comparison

```js
var x = 4
if ( x > 4 ) {
 console.log("x is greater than 4")
}
else if (x === 4) {
  console.log("x equals 4")
}
```
```
x equals 4
```

#### else (optional)
- If none of the comparisons were true execute the code in the `else` block

```js
var x = 3
if ( x > 4 ) {
 console.log("x is greater than 4")
}
else if (x === 4) {
  console.log("x equals 4")
}
else {
  console.log("x is less than 4")
}

```
```
x is less than 4
```

#### Example
An example to find if a value is a factor of a number
```js
function isFactor(factor, num) {
  if( num % factor === 0 ) {
	   return true
	}
  else {
	   return false
   }
}
```
