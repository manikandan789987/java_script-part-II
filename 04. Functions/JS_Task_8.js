// Write a JavaScript function that takes an array of numbers and finds the second lowest 
// and second greatest numbers, respectively.
// Sample array : [100,200,300,400,500]
// Expected Output : 200,400

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */    
function findSecondLowestAndGreatest(arr) {
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);
  
    // Check if the array has at least 3 elements
    if (arr.length < 3) {
      return "Array must have at least 3 elements";
    }
  
    // Find the second lowest and second greatest numbers
    let secondLowest = arr[1];
    let secondGreatest = arr[arr.length - 2];
  
    return [secondLowest, secondGreatest];
  }
  
  // Example usage:
  let arr = [100, 200, 300, 400, 500];
  let result = findSecondLowestAndGreatest(arr);
  console.log(result); // Output: [200, 400]
/* --------------------------------------------------------------------------------- */