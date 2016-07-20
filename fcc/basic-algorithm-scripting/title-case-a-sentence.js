// Link 
// https://www.freecodecamp.com/challenges/title-case-a-sentence

// Notes
//


// ES5 intelligible

function titleCase(str) {
	// split the string into words
	var words = str.split(' ');
	// define an array to store elements after
	// title-casing them
	var titleCaseWords = [];
	// loop through the words
	for(var i = 0; i < words.length; i++) {
		// push an elment formed by upper-casing the first letter 
		// and lower-casing the rest
		titleCaseWords.push(words[i][0].toUpperCase() + words[i].slice(1).toLowerCase());
	}
	// join the title-cased words into a string
	var titleCaseStr = titleCaseWords.join(' ');
	// return the string
	return titleCaseStr;
}


// ES6 small, sane
// same as above

const titleCase = s => s.split(' ').map(w => w[0].toUpperCase() + w.slice(1).toLowerCase()).join(' ');