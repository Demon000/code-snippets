/*
 * @summary creates an array with falsey values removed
 *
 * @param {Array} a - the array to be compacted
 * 
 * @returns {Array} - compacted array
 *
 * @example
 *
 * compact([0, 1, 2, true, false, NaN, null, '', undefined, 3]
 * -> [1, 2, true, 3]
 *
 */

// generic

function compact(a) {
	var i = 0,
		l = a.length,
		r = [];
	while(i < l) {
		if(a[i]) {
			r.push(a[i]);
		}
		i++;
	}
	return r;
}

// ES6

const compact = a => a.filter(v => !!v);