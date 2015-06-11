# Defining functions

## Activities

- [Say My Name](https://github.com/danleavitt0/codecamp-examples/tree/master/objects/examples/socialMediaPosts)
- [Age Calculator](https://github.com/danleavitt0/codecamp-examples/tree/master/definingFunctions/examples/sayMyName)
- [MadLib Function](https://github.com/danleavitt0/codecamp-examples/tree/master/definingFunctions/examples/madLibFunction)


A **function** is a way of teaching the program a new command. To use **functions** you first need to define the function.
Once you are read to use the function you call it.

## How to define a function

To define a new **function** start with the `function` keyword and then whatever you want to name the **function**.
Following the named add parentheses `()` and then curly braces `{}`. Anything between the open curly brace `{`
and the closing curly brace `}` is the code that will be executed when the **function** is called.

Define a function:
```js
function nameOfFunction () {
	// Code goes here
}
```
To call the **function** simply type the name of the **function** followed by parenteses `()`
Call that function:
```js
nameOfFunction()
```
### Hello World

Create a function that says 'Hello Wold'.

Define function:
To teach the program how to say 'Hello World', create a **function**
```js
function helloWorld () {

}
```

Add the `console.log` inside the braces
```js
function helloWorld () {
	console.log('Hello World')
}
```

Finally, call the **function**

```js
helloWorld()
```

All together, this program looks like this:
```js
function helloWorld () {
	console.log('Hello World')
}
helloWorld()
```
And will output
```
Hello World
```
