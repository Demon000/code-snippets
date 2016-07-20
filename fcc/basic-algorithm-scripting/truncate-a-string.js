// Link 
// https://www.freecodecamp.com/challenges/truncate-a-string

// Notes
// 


// ES5 intelligible

function truncateString(str, num) {
	var result = str;
	if(num <= 3) {
		result = str.substr(0, num) + '...';
	}
	else if(str.length > num) {
		result =  str.substr(0, num - 3) + '...';
	}
  return result;
}

// ES6 small

const truncateString = (s, n) => n >= s.length ? s : s.slice(0, n > 3 ? n - 3 : n) + '...';
