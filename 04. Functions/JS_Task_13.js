// Write a JavaScript function that accepts a string as a parameter and find the longest 
// word within the string.
    // EXAMPLE STRING : 'Web Development Tutorial'
    // EXPECTED OUTPUT : 'Development'

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */    
function findLongestWord(str) {
    let words = str.split(' ');
    let longestWord = words.reduce((a, b) => a.length > b.length ? a : b);
    return longestWord;
  }
  
  // Example usage:
  let exampleString = 'Web Development Tutorial';
  let result = findLongestWord(exampleString);
  console.log(result); // Output: 'Development'
/* --------------------------------------------------------------------------------- */