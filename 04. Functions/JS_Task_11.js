// Write a function that adds two numbers (input by user) and returns the sum of two numbers.

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */    
function addTwoNumbers() {
    let num1 = parseFloat(prompt("Enter the first number: "));
    let num2 = parseFloat(prompt("Enter the second number: "));
    let sum = num1 + num2;
    alert(`The sum of ${num1} and ${num2} is ${sum}`);
  }
  
  // Call the function
  addTwoNumbers();
/* --------------------------------------------------------------------------------- */