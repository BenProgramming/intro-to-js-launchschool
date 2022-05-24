
function evenOrOdd(num) {
	if (!Number.isInteger(num)) {
		console.log("Please eneter an integer to determine the parity of."); 
		return; 
	} else if (num % 2 === 0) {
		console.log("even");
	} else  {
		console.log("odd");
	} 
}

