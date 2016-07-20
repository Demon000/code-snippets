// Link
// https://www.freecodecamp.com/challenges/check-for-palindromes

// Notes
// 


// ES5 intelligible

function palindrome(str) {
	var arrayFromString = str.split('');
  	var reversedArray = arrayFromString.reverse('');
  	var reversedString = reversedArray.join('');
  	var isPalindrome = str == reversedString;
  	return isPalindrome;
}


// ES5 small

function palindrome(s) {
  return s == s.split('').reverse().join('');
}


// ES5 fastest

function palindrome(s) {
  var l = Math.floor(s / 2);
  for (var i = 0; i < l; i++)
    if (str[i] != str[str.length - i - 1])
      return false;
  return true;
}


// ES6 small, sane

const palindrome = s => s == s.split('').reverse().join('');


// ES6 small, insane

const palindrome = s => s == [...s].reverse().join``;