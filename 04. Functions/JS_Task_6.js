// Write a JavaScript function to extract unique characters from a string.

// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */    
function extractUniqueCharacters(str) {
    let uniqueChars = '';
    for (let i = 0; i < str.length; i++) {
        if (uniqueChars.indexOf(str[i]) === -1) {
            uniqueChars += str[i];
        }
    }
    return uniqueChars;
}

// Example usage:
console.log(extractUniqueCharacters("thequickbrownfoxjumpsoverthelazydog"));
// Output: "thequickbrownfxjmpsvlazydg"

/* --------------------------------------------------------------------------------- */