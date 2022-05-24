// ...There are other ways to detect a -0 value. Without using Object.is, write a function that will return true if the argument is -0, and false if it is 0 or any other number.

function negZeroOr(val) {
	if (Infinity / val === -Infinity) {
		return true; 
	} else {
		return false; 
	} 
} 


