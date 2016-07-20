// Link 
// https://www.freecodecamp.com/challenges/factorialize-a-number

// Notes
// numbers have a limit, Number.MAX_SAFE_INTEGER == 9007199254740991

// ES5 intelligible, iterative, fastest

function factorialize(n) {
	// define a variable to store the result
    var result = 1;
    // loop from 2 to n and multiply the result
    for (var i = 2; i <= n; i++) {
    	result = result * i;
    }
    // return the result
    return result;
}


// ES5 small, sane, recursive, fastest
// if n is 0, return 1
// else return n * the factorial of n - 1
// recurse

function factorialize(n) {
    return n == 0 ? 1 : n * factorialize(n - 1);
}


// ES6 small, sane, recursive, fastest
// same as above

const factorialize = n => n == 0 ? 1 : n * factorialize(n - 1);


// ES6 small, insane, iterative, slow as fuck
// create an array of length n + 1
// .fill it so .reduce does not skip over every element
// multiply the indexes
const factorialize = n => Array(n + 1).fill().reduce((p, _, i) => i == 0 ? p : p * i, 1);