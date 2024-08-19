// Write a JavaScript program to compute the sum of the two given integers. 
// If the two values are the same, then return triple their sum.  

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */  
function sumTriple(a, b) {
    if (a === b) {
        return 3 * (a + b);
    } else {
        return a + b;
    }
}

console.log(sumTriple(1, 2));  // Output: 3
console.log(sumTriple(3, 3));  // Output: 18
/* --------------------------------------------------------------------------------- */