// Note, the split('') methods won't work for astral symbols, 
// because JavaScript sposes it as two sepparate code units

// ES5 intelligible

function reverseString(str) {
  var arrayFromString = str.split('');
  var reversedArray = arrayFromString.reverse('');
  var joinedArray = reversedArray.join('');
  return joinedArray;
}

// ES6 intelligible

function reverseString(str) {
  let arrayFromString = str.split('');
  let reversedArray = arrayFromString.reverse('');
  let joinedArray = reversedArray.join('');
  return joinedArray;
}

// ES5 small sane 

function reverseString(s) {
  return s.split('').reverse().join('');
}

// ES6 small sane

let reverseString = s => s.split('').reverse().join('');

// ES6 small insane

let reverseString = s => [...s].reverse().join``

