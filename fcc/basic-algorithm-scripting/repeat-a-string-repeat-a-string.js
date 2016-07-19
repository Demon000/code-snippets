// Link 
// https://www.freecodecamp.com/challenges/repeat-a-string-repeat-a-string

// Notes
// you can use str.repeat(count) for this purpose,
// but it won't pass FreeCodeCamp's tests
// https://developer.mozilla.org/JavaScript/Reference/Global_Objects/String/repeat


// ES5 intelligible

function repeatStringNumTimes(str, num) {
  var result = '';
  for(var i = 0; i < num; i++)
    result = result + str;
  return result;
}


// ES6 small

const repeatStringNumTimes = (s, n) => Array(n >= 0 ? n : 0).fill(s).join('');