// Link 
// https://www.freecodecamp.com/challenges/truncate-a-string

// Notes
// 


// ES5 intelligible

function truncateString(str, num) {
	var result = str;
	// if the maximum length is less than 3
	if(num <= 3) {
		// truncate it then add '...'
		result = str.substr(0, num) + '...';
	}
	// else if the string is longer than the maximum length
	else if(str.length > num) {
		// truncate it then replace the last characters with '...''
		result =  str.substr(0, num - 3) + '...';
	}
	// else (the string is under the maximum length),
	// return it without modifying
  return result;
}

// ES6 small
// same concept as above
const truncateString = (s, n) => n >= s.length ? s : s.slice(0, n > 3 ? n - 3 : n) + '...';
