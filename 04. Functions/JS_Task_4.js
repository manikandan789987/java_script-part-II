// Write a JavaScript function that accepts a list of country names as input and 
// returns the longest country name as output.

// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */    
function Longest_Country_Name(countryNames) {
    return countryNames.reduce(function(longest, current) {
        return current.length > longest.length ? current : longest;
    }, "");
}

// Example usage:
console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"])); 
// Output: "United States of America"
/* --------------------------------------------------------------------------------- */