# Returning Data from Functions

## Activities

- [Age Calculator]()
- [Distance Calculator]()
- [About Me]()

## Returning data

To make functions more powerful, you can return the data from the function and use it.

```js
function madLibSentence (noun, verb) {
  var story = "The " + noun + " " + verb + " down the hill. "
  return story  
}
```

Now when the function is called
```js
var result = madLibSentence("frog", "rolled")
console.log(result)
```
Will have the output
```
The frog rolled down the hill.
```

### Manipulating returned values

The function call now acts like a variable that can be manipulated

```js
var result = madLibSentence("frog", "rolled") + madLibSentence("horse", "kicked")
console.log(result);
```
Will have the output
```
The frog rolled down the hill. The horse kicked down the hill.
```
