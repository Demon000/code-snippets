// Link 
// https://www.freecodecamp.com/challenges/factorialize-a-number

// Notes
// numbers have a limit, Number.MAX_SAFE_INTEGER == 9007199254740991

// ES5 intelligible, iterative, fastest

function factorialize(n) {
    var result = 1;
    for (var i = 2; i <= n; i++) {
    	result = result * i;
    }
    return result;
}


// ES5 small, sane, recursive, fastest

function factorialize(n) {
    return n == 0 ? 1 : n * factorialize(n - 1);
}


// ES6 small, sane, recursive, fastest

const factorialize = n => n == 0 ? 1 : n * factorialize(n - 1);


// ES6 small, insane, iterative, slow as fuck

const factorialize = n => [...Array(n + 1).keys()].slice(1).reduce((p, c, i) => p * c, 1);