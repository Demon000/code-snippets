// ES5 sane 
function reverseString(s) {
  return s.split('').reverse().join('');
}

// ES6 sane
let reverseString = s => s.split('').reverse().join('');

// ES6 insane
let reverseString = s => [...s].reverse().join``;
