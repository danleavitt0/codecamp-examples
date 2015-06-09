#Objects

## Activities

- [ ] [Phonebook](https://github.com/danleavitt0/codecamp-examples/tree/master/objects/examples/phoneBook)
- [ ] [Social Media Posts](https://github.com/danleavitt0/codecamp-examples/tree/master/objects/examples/socialMediaPosts)
- [ ] [User](https://github.com/danleavitt0/codecamp-examples/tree/master/objects/examples/user)
- [ ] [Movie Database](https://github.com/danleavitt0/codecamp-examples/tree/master/objects/examples/movieDatabase)


## Defining an object

Each entry in an object comes in a *key*, *value* pair. The key is the name of the entry
and the value is the information that is stored.

```
var object = {
  key1: value1,
  key2: value2
}
```

In the example below the object `dictionary` has 2 entries. The keys are the name of the words (eat, sassafras) and the values
are the definitions of those words.

```
var dictionary = {
	eat: 'put (food) into the mouth and chew and swallow it.',
	sassafras: 'an extract of the leaves or bark of the sassafras, used medicinally or in perfumery.'
}
```

## Getting value from object

To get a key from the `dictionary` object:

```
dictionary.eat

// returns 'put (food) into the mouth and chew and swallow it.'
```

or if you need to use a variable as they key:

```
var name = "sassafras"
dictionary[name]

// returns 'an extract of the leaves or bark of the sassafras, used medicinally or in perfumery.'
```

## Setting individual values in an object

You can set the value of a key by:

```
dictionary.large = 'of considerable or relatively great size, extent, or capacity.'
```


## Objects can be nested (an object inside of a object)

In this example, the object `superheroes` has three keys
```
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