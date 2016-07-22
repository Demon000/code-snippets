/*
 * @summary creates an array of elements split into chunks
 * 			with a maximum length of `s`
 *
 * @param {Array} a - the array to be chunked
 * @param {Number} s - the chunk size
 * 
 * @returns {Array} - containing the chunks
 *
 * @example
 * chunk([1, 2, 3, 4, 5], 2);
 * -> [[1, 2], [3, 4], [5]]
 *
 */

// generic

function chunk(a, s) {
	var i = 0,
		l = a.length,
		r = [];
	if(l && s) {
		while(i < a.length) {
			r.push(a.slice(i, i + s));
            i += s;
		}
	}
	return r;
}


// ES6

const chunk = (a, s) => Array(Math.ceil(a.length / s)).fill().map((c, i) => a.slice(i * s, (i + 1) * s));