const rlSync = require('readline-sync');

let usrAge = rlSync.question("How old are you? "); 

console.log(`In 10 years, you will be ${Number(usrAge) + 10} years old.`); 
console.log(`In 20 years, you will be ${Number(usrAge) + 20} years old.`); 
console.log(`In 30 years, you will be ${Number(usrAge) + 30} years old.`);
console.log(`In 40 years, you will be ${Number(usrAge) + 40} years old.`);

