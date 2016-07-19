// Link
// https://www.freecodecamp.com/challenges/reverse-a-string

// Notes
// the functions using split('')  won't work for astral symbols, eg '𝌆', 
// because JavaScript exposes it as two separate code units


// ES5 intelligible

function reverseString(str) {
  var arrayFromString = str.split('');
  var reversedArray = arrayFromString.reverse('');
  var reversedString = reversedArray.join('');
  return reversedString;
}


// ES5 manual

function reverseString(s) {
  var r = '';
  for(var i = s.length; i > -1; i--) {
    r += s[i];
  }
  return r;
};


// ES5 small, sane 

function reverseString(s) {
  return s.split('').reverse().join('');
}


// ES6 small, sane 
// fastest in Firefox 49

const reverseString = s => s.split('').reverse().join('');


// ES6 small, insane
// slowest in Firefox 49, probably because of the spread operator

const reverseString = s => [...s].reverse().join``
