/*
 * @summary flattens the array for a certain depth
 *
 * @param {Array} a - the array to be flattened
 * @param {Number} d - depth, leave blank or use -1 for infinite
 * @param {Number} cd - current depth, should only be used internally
 *
 * @returns {Array} - flattened array
 *
 * @example
 *
 * flatten([1, [2, [3, [4]], 5]], -1);
 * -> [1, 2, 3, 4, 5]
 *
 */

// generic

function flatten(a, d) {
	var r = [];
	for(var i = 0; i < a.length; i++) {
		if(Array.isArray(a[i]) && (d == undefined || d > 0)) {
			r = r.concat(flatten(a[i], d == undefined ? d : d - 1));
		} else {
			r.push(a[i]);
		}
	}
	return r;
}

// ES6

const flatten = (a, d) => a.reduce((p, c) => (Array.isArray(c) && (d == undefined || d > 0)) ? [...p, ...flatten(c, d == undefined ? d : d - 1)] : [...p, c], []);