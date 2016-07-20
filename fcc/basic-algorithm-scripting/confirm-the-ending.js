// Link 
// https://www.freecodecamp.com/challenges/confirm-the-ending

// Notes
// you can use str.endsWith(searchString[, position])
// https://developer.mozilla.org/JavaScript/Reference/Global_Objects/String/endsWith


// ES5 intelligible

function confirmEnding(s, t) {
	// slice the enfing of s
	var strEnding = s.slice(s.length - t.length);
	// check if the ending matches
	var isEnding = strEnding == t;
	// return the result
	return isEnding;
}


// ES6 small
// same concept as above
const confirmEnding = (s, t) => s.substr(s.length - t.length) == t;