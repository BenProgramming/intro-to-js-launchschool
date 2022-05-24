const rlSync = require("readline-sync");

const getName = str => rlSync.question(str);

let usrFirst = getName("Please enter your first name: ");
let usrLast = getName("Please enter your last name: "); 

console.log(`Hello, ${usrFirst + " " + usrLast}!`);

