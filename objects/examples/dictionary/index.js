// define the dictionary object

var dictionary = {
	eat: 'put (food) into the mouth and chew and swallow it.',
	sassafras: 'an extract of the leaves or bark of the sassafras, used medicinally or in perfumery.'
}

// print out the value stored at the key "eat"
console.log(dictionary.eat)

// print out the value stored at the key "sassafras"
var name = "sassafras"
console.log(dictionary[name])

// add an entry at the key "large" and then print out the value
dictionary.large = 'of considerable or relatively great size, extent, or capacity.'
console.log(dictionary.large)
