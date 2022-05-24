function factorial(val) {
	if(val < 0) {
		return "Please enter a positive value!";
	} else if(val <= 1) {
		return 1;
	} else {
		return val * factorial(val - 1);
	}
} 

console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
