#Phonebook object

1. What are the important features a phonebook?
    - Add an entry
    - Store a name that is mapped to a phone number
    - Get a person’s number by looking up the name

2. To store this information programmers use objects
3. An object is a list of key(name) and their values(information).
4. In the phonebook example what is the key? What is the value?
    - The key is the name
    - The value is the phone number
5. Let’s create the phonebook. Start defining a variable phoneBook.
```
	var phoneBook
```
6. To make sure the computer knows it is an object we use curly braces.
```
	var phoneBook = {
		// keys and values go in the braces
    }
```
7. Add the first key, value pair. Use a colon to map Elmo to the phone number “123-4567”
```
	var phoneBook = {
		Elmo: "123-4567"
    }
```
8. Multiple entries are separated by a comma
```
var phoneBook = {
		Elmo: "123-4567",
		Burt: "555-5555"
}
```
9. Add three more original entries
