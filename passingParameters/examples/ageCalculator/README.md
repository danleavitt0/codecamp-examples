# Age Calculator in Days

Create an age calculator function that returns the age (in days) of two people.
The program should prompt the user for the birth year of two people.

## Define

Create four variables:

  - `name1`
  - `birthYear1`
  - `name2`
  - `birthYear2`

These variables should get their values by using the `prompt` function

Create a function called `getAgeDays` that accepts one parameter and returns the age in days.

Create a function called `makeSentece` that accepts two parameters (`name` and `age`) that
returns a sentence that says the persons name and how old they are. Each person should get a sentence about how many days old they are.


## Call

Example function call:
```js
var days1 = getAgeDays(birthYear1)
var days2 = getAgeDays(birthYear2)
var sentence1 = makeSentence(name1, days1)
var sentence2 = makeSentence(name2, days2)
console.log(sentence1)
console.log(sentence2)

```

## Output


Example output:
```
Greg is around 2583 days old
James is around 9643 days old
```

## Bonus

Call the `makeSentence` function one more time to create a sentence for the sum of the days of the two people.

## Documentation
For help with returning data look at the [documentation]()
