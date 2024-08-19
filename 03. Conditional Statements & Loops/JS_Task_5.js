// Write a JavaScript program that accept two integers and display the larger. 
// Also show if the two integers are equal.

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */    
let num1 = parseInt(prompt("Enter first integer: "));
let num2 = parseInt(prompt("Enter second integer: "));

if (num1 > num2) {
  console.log(num1 + " is larger");
} else if (num2 > num1) {
  console.log(num2 + " is larger");
} else {
  console.log("Both integers are equal");
}
/* --------------------------------------------------------------------------------- */