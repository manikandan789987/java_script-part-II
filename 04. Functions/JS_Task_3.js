// Create 2 functions that calculate properties of a circle, using the definitions here.
// Create a function called calcCircumference:
    // • Pass the radius to the function.
    // • Calculate the circumference based on the radius, and output
        // "The circumference is NN".
// Create a function called calcArea:
    // • Pass the radius to the function.
    // • Calculate the area based on the radius, and output 
        // "The area is NN".
// Circumference of circle = 2πr 

// Area of circle = πr2

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */    
// Create a function called calcCircumference:
function calcCircumference(radius) {
    // Calculate the circumference based on the radius
    let circumference = 2 * Math.PI * radius;
    // Output "The circumference is NN"
    console.log(`The circumference is ${circumference}`);
}

// Create a function called calcArea:
function calcArea(radius) {
    // Calculate the area based on the radius
    let area = Math.PI * radius * radius;
    // Output "The area is NN"
    console.log(`The area is ${area}`);
}

// Example usage:
calcCircumference(5);  // Output: The circumference is 31.41592653589793
calcArea(5);  // Output: The area is 78.53981633974483
/* --------------------------------------------------------------------------------- */