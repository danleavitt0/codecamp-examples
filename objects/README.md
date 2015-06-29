#Objects

## Activities

- [Phonebook](https://github.com/danleavitt0/codecamp-examples/tree/master/objects/examples/phoneBook)
- [User](https://github.com/danleavitt0/codecamp-examples/tree/master/objects/examples/user)
- [Social Media Posts](https://github.com/danleavitt0/codecamp-examples/tree/master/objects/examples/socialMediaPosts)
- [Movie Database](https://github.com/danleavitt0/codecamp-examples/tree/master/objects/examples/movieDatabase)


## Defining an object

To see a working example of this code check out https://github.com/danleavitt0/codecamp-examples/tree/master/objects/examples/dictionary

Each entry in an object comes in a *key*, *value* pair. The key is the name of the entry
and the value is the information that is stored.

```js
var object = {
  key1: value1,
  key2: value2
}
```

In the example below the object `dictionary` has 2 entries. The keys are the name of the words (eat, sassafras) and the values
are the definitions of those words.

```js
var dictionary = {
	eat: 'put (food) into the mouth and chew and swallow it.',
	sassafras: 'an extract of the leaves or bark of the sassafras, used medicinally or in perfumery.'
}
```

## Getting value from object

To get a key from the `dictionary` object:

```js
dictionary.eat

// returns 'put (food) into the mouth and chew and swallow it.'
```

or if you need to use a variable as they key:

```js
var name = "sassafras"
dictionary[name]

// returns 'an extract of the leaves or bark of the sassafras, used medicinally or in perfumery.'
```

## Setting individual values in an object

You can set the value of a key by:

```js
dictionary.large = 'of considerable or relatively great size, extent, or capacity.'
// or
dictionary['large'] = 'of considerable or relatively great size, extent, or capacity.'
```

## Values can be a function



## Objects can be nested (an object inside of a object)

In this example, the object `superheroes` has three keys
```js
var superheroes = {
	spiderman:{
		heroName: 'Spiderman'
		realName: 'Peter Parker',
		powers: 'Webs and reaction time'
	},
	superman: {
		heroName:'Superman'
		realMame: 'Clark Kent',
		powers: 'Pretty much everything'
	},
	batman: {
		heroName: 'Batman',
		realName: 'Bruce Wayne',
		powers: 'Lots of money and lots of training'
	}
}
```

## Adding a method to an object

A method is a function that is in an object. The method `getHero` adds a function that returns a superhero object by finding the name. The word `this` means the current object which in this case is `superheroes`

```js
var superheroes = {
	spiderman:{
		heroName: 'Spiderman'
		realName: 'Peter Parker',
		powers: 'Webs and reaction time'
	},
	superman: {
		heroName:'Superman'
		realMame: 'Clark Kent',
		powers: 'Pretty much everything'
	},
	batman: {
		heroName: 'Batman',
		realName: 'Bruce Wayne',
		powers: 'Lots of money and lots of training'
	},
  getHero: function (name) {
    return this[name]
  }
}

// Call the function
superheroes.get('spiderman')
```
The `getHero` method returns the superhero object with the corresponding key. In this case, it returns the spiderman object.


## Creating an array of objects

It is possible to create a list of objects by placing them in an array. Remember that the values in an array are separate by
commas. An example of an array of objects:

```js
var daySchedule = [
	{
		title: "School",
		time: "8am - 3pm"
	},
	{
		title: "Socer practice",
		time: "4pm - 5pm"
	},
	{
		title: "Grocery shopping",
		time: "6pm - 7pm"
		groceryList: [
			"Apples",
			"Oranges",
			"Milk",
			"Bread"
		]
	}
]
```
