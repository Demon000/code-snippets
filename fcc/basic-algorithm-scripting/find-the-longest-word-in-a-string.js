// Link 
// https://www.freecodecamp.com/challenges/find-the-longest-word-in-a-string

// Notes
// FreeCodeCamp needs the length of the word,
// I'll find the word itself so the file name makes sense


// ES5 intelligible

function findLongestWord(str) {
	// split the string into words
	var words = str.split(' ');
	// define a variable to keep the longest word
	var longest = '';
	// loop through the words and find the longest one
	for(var i = 0; i < words.length; i++)
		if(longest.length < words[i].length)
			longest = words[i];
	// return the longest word
	return longest;
}


// ES6 small
// .split the string into words
// .reduce compares each element and returns the longest one 
const findLongestWord = s => s.split(' ').reduce((p, c) => p.length < c.length ? c : p);

// .split the string into words
// .sort the words by length, form longest to shortest
// [0] gets the first element
const findLongestWord = s => s.split(' ').sort((a, b) => a.length < b.length)[0];

