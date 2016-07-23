/*
 * @summary checks if 
 *
 * @warning with new browsers, you cna use the in-built Array.isArray()
 *
 * @param {*} o - the * to be checkd if it is an Array
 *
 * @returns {Boolean}
 *
 * @example
 *
 * isArray([1, 2, 3])
 * -> true
 *
 */

// generic, old browsers *cough* IE8 */cough*

function isArray(o) {
	return Object.prototype.toString.call(o) === '[object Array]';
}