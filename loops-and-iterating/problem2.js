// Write a function that computes and returns the factorial of a number by using a for loop.
// The factorial of a positive integer n, signified by n!, is defined as the product of all
// integers between 1 and n, inclusive.
// You may also assume that the argument is always a positive integer

const rlSync = require('readline-sync'); 

let usrIn = Number(rlSync.question("Please enter an integer to compute factorial: "));

let total = 1;
for (let i = 2; i <= usrIn; i += 1) {
	total *= i; 
} 

console.log(total); 
