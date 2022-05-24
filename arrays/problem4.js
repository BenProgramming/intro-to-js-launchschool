// Write a findIntegers function that takes an array argument and returns an array
// that contains only the integers from the input array. Use the filter method in your function. 

function findIntegers(arr) {
	return arr.filter(element => {
		if (Number.isInteger(element)) {
			return element; 
		}
	});
}

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(things);
console.log(integers); // => [1, 3, -4]

