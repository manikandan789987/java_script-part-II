// Write a function that computes factorial of a number.

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */    
function computeFactorial(n) {
    if (n < 0) {
      return "Error: Factorial is not defined for negative numbers.";
    } else if (n === 0 || n === 1) {
      return 1;
    } else {
      let factorial = 1;
      for (let i = 2; i <= n; i++) {
        factorial *= i;
      }
      return factorial;
    }
  }
  
  // Example usage:
  let num = 5;
  let result = computeFactorial(num);
  console.log(`The factorial of ${num} is ${result}`); // Output: The factorial of 5 is 120
/* --------------------------------------------------------------------------------- */