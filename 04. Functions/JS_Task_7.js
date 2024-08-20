// Write a JavaScript function that checks whether a number is perfect.

// Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, 
// and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive 
// divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. 
// This is followed by the perfect numbers 496 and 8128.

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */    
function isPerfectNumber(n) {
    let sum = 0;
    for (let i = 1; i < n; i++) {
      if (n % i === 0) {
        sum += i;
      }
    }
    return sum === n;
  }
  
  // Example usage:
  console.log(isPerfectNumber(6)); // true
  console.log(isPerfectNumber(28)); // true
  console.log(isPerfectNumber(496)); // true
  console.log(isPerfectNumber(8128)); // true
  console.log(isPerfectNumber(10)); // false
/* --------------------------------------------------------------------------------- */