// Given a list of numbers, write some code to find and display the largest numeric value in the list.

const first = [1, 6, 3, 2];
const second = [-1, -6, -3, -2]; 
const third = [2, 2]; 

const displayMax = arr => {
	let maxVal = arr[0]; 
	for (let i = 1; i < arr.length; i += 1) {
		if (arr[i] > maxVal) {
			maxVal = arr[i]; 
		} 
	}
	return maxVal;
};

console.log(displayMax(first)); 
console.log(displayMax(second));
console.log(displayMax(third)); 

function maxVal(arr) {
	let maxVal = arr.reduce((accum, val) => Math.max(accum, val)); 
	return maxVal;
};

console.log(maxVal(first));
console.log(maxVal(second));
console.log(maxVal(third)); 

// Given solution 
console.log(Math.max(1, 6, 3, 2));
console.log(Math.max(-1, -6, -3, -2));
console.log(Math.max(2, 2));

