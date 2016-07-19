// Link 
// https://www.freecodecamp.com/challenges/find-the-longest-word-in-a-string

// Notes
// FreeCodeCamp needs the length of the word,
// I'll find the word itself so the file name makes sense


// ES5 intelligible

function findLongestWord(str) {
	var words = str.split(' ');
	var longest = '';
	for(var i = 0; i < words.length; i++)
		if(longest.length < words[i].length)
			longest = words[i];
	return longest;
}


// ES6 small

const findLongestWord = s => s.split(' ').reduce((p, c) => p.length < c.length ? c : p);

const findLongestWord = s => s.split(' ').sort((a, b) => a.length < b.length)[0];

