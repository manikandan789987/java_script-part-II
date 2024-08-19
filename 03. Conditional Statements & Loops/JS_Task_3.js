// Write a program that
    // a. Store correct password in a JS variable.
    // b. Asks user to enter his/her password
    // c. Validate the two passwords:
        // i. Check if user has entered password. If not, then give message “ Please enter your password”
        // ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show "Incorrect password" otherwise.

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */    
let correctPassword = "Tiger.123"; // Store correct password in a JS variable

let userPassword = prompt("Enter your password: "); // Ask user to enter their password

if (userPassword === "") {
  console.log("Please enter your password"); // Check if user has entered password
} else if (userPassword === correctPassword) {
  console.log("Correct! The password you entered matches the original password"); // Check if both passwords are same
} else {
  console.log("Incorrect password"); // Show "Incorrect password" otherwise
}

/* --------------------------------------------------------------------------------- */