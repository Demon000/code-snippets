// Link 
// https://www.freecodecamp.com/challenges/chunky-monkey

// Notes
//


// ES5 intelligible
// this method modifies the original array
function chunkArrayInGroups(arr, n) {
	// define array to hold the groups
	var result = [];
	// while the source array is not empty
	while(arr.length != 0)
		// push an array formed by the first n elements to 
		// the results array
		result.push(arr.splice(0, n));
	return result;
}


// ES6 small, sane
// define array with appropriate number of elements
// fill it so .map doesn;t skip every element
// set the elements to the appropriate chunk from the original array
const chunkArrayInGroups = (a, n) => Array(Math.ceil(a.length / n)).fill().map((c, i) => a.slice(i * n, (i + 1) * n));