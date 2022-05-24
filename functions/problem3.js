const rlSync = require("readline-sync");

let numA = rlSync.question("Enter the first number: ");
let numB = rlSync.question("Enter the second number: ");

const multiply = (val0, val1) => val0 * val1

console.log(`${numA} * ${numB} = ${multiply(numA, numB)}`); 

