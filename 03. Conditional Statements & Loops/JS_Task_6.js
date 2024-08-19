// Write a program that takes a character (i.e. string of length 1) 
// and returns true if it is a vowel, false otherwise.

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */    
function isVowel(char) {
    return 'aeiouAEIOU'.includes(char);
  }
  
  // Test the function
  console.log(isVowel('a')); // true
  console.log(isVowel('b')); // false
  console.log(isVowel('A')); // true
  console.log(isVowel('Z')); // false
/* --------------------------------------------------------------------------------- */