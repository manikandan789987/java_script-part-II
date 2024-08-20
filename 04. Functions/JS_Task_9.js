// Write a JavaScript function that reverses a number.
// Example x = 32243;
// Expected Output : 34223

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */    
function reverseNumber(x) {
    let reversedNum = parseInt(x.toString().split('').reverse().join(''));
    return reversedNum;
  }
  
  // Example usage:
  let x = 32243;
  let result = reverseNumber(x);
  console.log(result); // Output: 34223
/* --------------------------------------------------------------------------------- */