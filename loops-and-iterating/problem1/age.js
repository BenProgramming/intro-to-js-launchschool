const rlSync = require('readline-sync');

let usrAge = rlSync.question("How old are you? "); 

let totYears; 

for(let i = 0; i < 4; i += 1) {
  totYears = (i + 1) * 10;
	console.log(`In ${totYears} years, you will be ${Number(usrAge) + totYears} years old.`); 
}

