/*
 * @summary fills elements of array with value from start up to, but not including, end
 *
 * @warning this function mutates the original array
 *
 * @param {Array} a - the array to be filled
 * @param {*} v - value used for the fill
 * @param {Number} [s = 0] - start position
 * @param {Number} [e = a.length] - end position
 *
 * @returns {Array} - filled array
 *
 * @example
 *
 * fill([0, 1, 2, 3, 4, 5, 6, 7], '*', 2, 5);
 * -> [0, 1, "*", "*", "*", 5, 6, 7];
 *
 */

// generic

function fill(a, v, s, e) {
	var l = a.length,
	if(!s) {
		s = 0;
	}
	if(!e) {
		e = a.length;
	}
	for(; s < e; s++) {
		r.push(v);
	}
	return a;
}


// ES6

const fill = (a, v, s=0, e=a.length) => a.fill(v, s, e);