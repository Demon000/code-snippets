// Link 
// https://www.freecodecamp.com/challenges/mutations

// Notes
//

// ES5 intelligible

function mutation(arr) {
	// check if the letters of the second word
	// are present in the first
	for(var i = 0; i < arr[1].length; i++) {
		if(arr[0].toLowerCase().indexOf(arr[1].toLowerCase()[i]) == -1)
			return false;
	}
	return true;
}