// Earlier, we learned that Number.isNaN(value) returns true if value is the NaN value, false otherwise. You can also use Object.is(value, NaN) to make the same determination.
// Without using either of those methods, write a function named isNotANumber that returns true if the value passed to it as an argument is NaN, false if it is not.

// NaN is the only number that is not equal to itself.
function isNotANumber(isNumOr) {
	return isNumOr !== isNumOr
};


console.log(isNotANumber(NaN)); 

