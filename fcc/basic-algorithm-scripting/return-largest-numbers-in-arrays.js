// Link 
// https://www.freecodecamp.com/challenges/return-largest-numbers-in-arrays

// Notes
//


// ES5 intelligible, fastest

function largestOfFour(arr) {
  var arrayLargest = [];
  for(var i = 0; i < arr.length; i++)
    {
      var largest = 0;
      for(var j = 0; j < arr[i].length; j++)
        {
          if(arr[i][j] > largest)
            largest = arr[i][j];
        }
      arrayLargest.push(largest);
        
    }
  return arrayLargest;
}


// ES6 small

const largestOfFour = a => a.map(x => Math.max.apply(null, x));