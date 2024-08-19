// Define the sides of the triangle
var a = 5;
var b = 6;
var c = 7;

// Calculate the semi-perimeter
var s = (a + b + c) / 2;

// Calculate the area using Heron's formula
var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

// Print the result
console.log("The area of the triangle is: " + area);