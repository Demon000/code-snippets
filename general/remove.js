// Link 
// http://stackoverflow.com/questions/5767325/remove-a-particular-element-from-an-array-in-javascript

// Notes
// those implementations remove all matched elements,
// if you want to remove only the first match,
// just find the first matching index and remove it using splice
// .indexOf() is not supported in older browsers
// *cough* IE */cough*


// old browsers
// moves the elements not matching the passed value
// to the beginning then sets the length

function move(a, n) {
  var nl = 0;
  for (var i = 0, l = a.length; i < l; i++) {
    if (a[i] !== n) {
      a[nl++] = a[i];
    }
  }
  a.length = nl;
}


// ES5
// .filter()s out all elements with value n

function remove(a, n) {
	return a.filter(function(e) {
		return e !== n;
	});
}


// ES6
// .filter()s out all elements with value n

const remove = (a, n) => a.filter(e => e !== n);
