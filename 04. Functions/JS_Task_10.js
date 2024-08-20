// Write a JavaScript function that returns a string that has letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */    
function alphabetizeString(str) {
    return str.split('').sort().join('');
  }
  
  // Example usage:
  let str = 'webmaster';
  let result = alphabetizeString(str);
  console.log(result); // Output: 'abeemrstw'
/* --------------------------------------------------------------------------------- */