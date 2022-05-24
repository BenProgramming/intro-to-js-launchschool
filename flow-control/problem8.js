// Write a function that logs whether a number is between 0 and 50 (inclusive), 
// between 51 and 100 (inclusive), greater than 100, or less than 0. 

const numberRange = (num) => {
	if (num < 0) {
		console.log(`${num} is less than 0`); 
	} else if (num >= 0 && num <= 50) {
    console.log(`${num} is between (inclusive) 0 and 50`); 
	} else if (num >= 51 && num <= 100) {
    console.log(`${num} is between (inclusive) 51 and 100`); 
	} else if (num > 100) {
    console.log(`${num} is greater than 100`); 
	}
}

