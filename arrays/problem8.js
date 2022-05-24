// Write a function similar to the oddLengths function from
// Exercise 6, but don't use map or filter. Instead, try to use the reduce method. 

function oddLengths(arr) {
	return arr.reduce((accum, val) => {
		if (val.length % 2 === 1) {
			accum.push(val.length);
		} 
		return accum; 
	}, []);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]
