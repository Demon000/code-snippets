// Link 
// https://www.freecodecamp.com/challenges/repeat-a-string-repeat-a-string

// Notes
// you can use str.repeat(count) for this purpose,
// but it won't pass FreeCodeCamp's tests
// https://developer.mozilla.org/JavaScript/Reference/Global_Objects/String/repeat


// ES5 intelligible

function repeatStringNumTimes(str, num) {
  var result = '';
  // add the string to the result num times
  for(var i = 0; i < num; i++)
    result = result + str;
  return result;
}


// ES6 small
// Array(n >= 0 ? n : 0) creates am array with at least 0 elements
// .fill(s) sets all the array elements as s
// .join('') joins the array elements
const repeatStringNumTimes = (s, n) => Array(n >= 0 ? n : 0).fill(s).join('');