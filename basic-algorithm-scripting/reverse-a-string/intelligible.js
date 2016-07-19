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
