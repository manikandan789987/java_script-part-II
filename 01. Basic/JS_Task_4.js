// Write a JavaScript program to check a pair of numbers and return true if one of the 
// numbers is 50 or if their sum is 50.  

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */  
function checkPair(num1, num2) {
    if (num1 === 50 || num2 === 50 || num1 + num2 === 50) {
        return true;
    } else {
        return false;
    }
}

console.log(checkPair(50, 20));  // Outputs: true
console.log(checkPair(20, 30));  // Outputs: true
console.log(checkPair(10, 20));  // Outputs: false
/* --------------------------------------------------------------------------------- */