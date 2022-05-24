// Use the arithmetic operators to determine the individual digits of a 4-digit number like 4936

let number = 4936; 

let digVal = 0;
let sumDigVal = 0;

const digPlaces = ['ones', 'tens', 'hundreds', 'thousands', 'ten thousands', 'hundred thousands', 'millions', 'ten millions', 'one hundred millions', 'billion'];

for (let i = 1; i <= number.toString().length; i += 1) {
  digVal = ((number %  (10 ** i)) - sumDigVal) / (10 ** (i - 1)); 
	sumDigVal = sumDigVal + (digVal * 10 ** (i - 1));
  if (i <= digPlaces.length - 1) {
	  console.log(`${digVal} is in the ${digPlaces[i - 1]} place.`);		
	}
	else {
    console.log(`${digVal} is in the larger than a billions place.`);
	}
}; 
