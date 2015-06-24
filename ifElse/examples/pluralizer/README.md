# Pluralizer

Get a word and a number and add an 's' if necessary

## Random numbers

To create random number between 1 and 5 copy this code
```js
var rand = Math.floor(Math.random()*5)+1
```

## Create

Create two variables: `noun` and `amount` and prompt the user for the value of noun.

`amount` should be a random number between 1 and 8

Create two functions called `pluralizer` and `areOrIs`

### Pluralizer

- Accepts two parameters: `word` and `num`
- If the number is greater than 1 add an s
- Else return the word without changing it

### areOrIs

- Accepts one parameter: `num`
- If num is greater than 1 return 'are'
- Else return 'is'

## Call

Example function call:
```js
var sentence = "The " + amount + " " + pluralizer(noun, amount) + " " + areOrIs(amount) + " dancing at the zoo."
```

## Output
Run the program at least three times.

Example output
```
The 5 koalas are dancing at the zoo.
```
```
The 1 monkey is dancing at the zoo.
```

## Documentation

Help with `if...else` statements can be found [here](https://github.com/danleavitt0/codecamp-examples/blob/master/ifElse/README.md)
