// Write a JavaScript conditional statement to find the largest of five numbers. 
// Display an alert box to show the results.

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */    
let num1 = parseInt(prompt("Enter first number: "));
let num2 = parseInt(prompt("Enter second number: "));
let num3 = parseInt(prompt("Enter third number: "));
let num4 = parseInt(prompt("Enter fourth number: "));
let num5 = parseInt(prompt("Enter fifth number: "));

let largest = num1;

if (num2 > largest) {
  largest = num2;
}
if (num3 > largest) {
  largest = num3;
}
if (num4 > largest) {
  largest = num4;
}
if (num5 > largest) {
  largest = num5;
}

alert("The largest number is: " + largest);
/* --------------------------------------------------------------------------------- */