// Link 
// https://www.freecodecamp.com/challenges/return-largest-numbers-in-arrays

// Notes
//


// ES5 intelligible, fastest

function largestOfFour(arr) {

	// define an array to store the largest numbers from each set
	var arrayLargest = [];
	// loop through the array of number sets
	for(var i = 0; i < arr.length; i++) {
		// define a variable to store the largest from a set
		var largest = 0;
		// loop through a set and find the largest number
		for(var j = 0; j < arr[i].length; j++) {
		  if(arr[i][j] > largest)
		    largest = arr[i][j];
		}
		// push the largest numbe to the storage array
		arrayLargest.push(largest);
	    
	}
	return arrayLargest;
}


// ES6 small
// a.map() returns a new array formed from 
// the elements returned by the inline function
// Math.max.apply(null, x) finds the largest in a set
// it works like calling max() for each elements and storing the largest
const largestOfFour = a => a.map(x => Math.max.apply(null, x));