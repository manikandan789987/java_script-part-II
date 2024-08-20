// Write a JavaScript function that accepts a string as a parameter and converts 
// the first letter of each word of the string in upper case.
    // EXAMPLE STRING : 'the quick brown fox'
    // EXPECTED OUTPUT : 'The Quick Brown Fox

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */    
function capitalizeFirstLetterOfEachWord(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
  
  // Example usage:
  console.log(capitalizeFirstLetterOfEachWord('the taj mahal is one of the wonders of the world')); 
/* --------------------------------------------------------------------------------- */

