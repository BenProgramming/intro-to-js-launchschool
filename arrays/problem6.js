// Use map and filter to first determine the lengths of all the elements in an
// array of string values, then discard the even values (keep the odd values). 

const oddLengths = arr => arr.map(val => val.length).filter(val => val % 2 === 1 ? true : false); 

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]
