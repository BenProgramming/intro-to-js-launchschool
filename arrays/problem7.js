// Use reduce to compute the sum of the squares of all of the numbers in an array:

function sumOfSquares(arr) {
 return	arr.reduce((accum, vals) => {
		return accum + vals * vals; 
	}, 0)
} 

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83
