// Description
// write a function called fizzbuzz that accepts a single argument n. 
// fizzbuzz should return
// "Fizz" if n is a multiple of 3, 
// "Buzz" if n is a multiple of 5,
// “FizzBuzz” if n is a multiple of both 3 and 5,
// and n if n is a multiple of neither 3 nor 5.


// ES6 small

const fizzbuzz = n => ''.concat(n % 3 ? '' : 'Fizz', n % 5 ? '' : 'Buzz') || n; 