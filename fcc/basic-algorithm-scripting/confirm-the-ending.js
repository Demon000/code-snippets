// Link 
// https://www.freecodecamp.com/challenges/confirm-the-ending

// Notes
// you can use str.endsWith(searchString[, position])
// https://developer.mozilla.org/JavaScript/Reference/Global_Objects/String/endsWith


// ES5 intelligible

function confirmEnding(s, t) {
	var strEnding = s.slice(s.length - t.length);
	var isEnding = strEnding == t;
	return isEnding;
}


// ES6 small

const confirmEnding = (s, t) => s.substr(s.length - t.length) == t;