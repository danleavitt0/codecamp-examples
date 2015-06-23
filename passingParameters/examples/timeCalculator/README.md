# Time Calculator

Create a program to help solve the following time related problems. One program
should be able to solve both of these math problems!

### Problem #1

Jenny, Carlos, and Juan are riding their bikes to 7-11. They all live a different
distance from the store and ride their bikes at different speeds. How long did it take each person in minutes? Assuming they all left their houses at the same time, who got to 7-11 first?

Use the information from the table below.

Name | Distance | Speed
---|----|----
Jenny | 12.1 miles | 10.2 mph
Carlos | 8.3 miles | 7.6 mph
Juan | 9.6 miles | 9.1 mph


### Problem #2

James, Cleo, and Cameron are all meeting up in Chicago. James and Cleo are flying from different states and Cameron is driving. How long did it take each person in minutes? All of them leave at the same time. Who arrives in Chicago first?

Name | Distance | Speed
---|----|----
James | 1020 miles | 325 mph
Cleo | 2143 miles | 687 mph
Cameron | 194 miles miles | 57.2 mph

## Information

To measure distance:

```js
time = distance / speed
```
```js
minutes = hours * 60
```
## Define

Prompt the user to enter speed and time values for three different trips in a car.

Store the information in variables:

  - `name1`
  - `speed1`
  - `distance1`
  - `name2`
  - `speed2`
  - `distance2`
  - `name3`
  - `speed3`
  - `distance3`

Define a function called `getTimeMinutes` that returns `minutes` by dividing the parameters `distance` and `speed`.

Define a function called `makeSentence` that returns a string with the information about how long a person's trip took.

## Call
Example function calls:
```js
var sentence1 = makeSentence(name1, getTimeMinutes(distance1, speed1))
var sentence2 = makeSentence(name2, getTimeMinutes(distance2, speed2))
var sentence3 = makeSentence(name3, getTimeMinutes(distance3, speed3))
```
## Output
Use `console.log` to output all three sentences

Example output (not the right answers):
```
It took James 2 minutes.
It took Cleo 5 minutes.
It took Cameron 20 minutes.
```

## Documentation
For help with passingParameters look at the [parameters documentation](https://github.com/danleavitt0/codecamp-examples/blob/master/passingParameters/README.md)
