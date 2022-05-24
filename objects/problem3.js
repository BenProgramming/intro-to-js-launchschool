// Use object literal syntax (e.g., { key: value, ... } notation) to create an object
// that behaves as an array in a for statement. The object should contain at least 3 
// elements. You should place your code between the braces in the let statement.

let myArray = { 
	0: "My name is Ben, ",
	1: "it's nice ", 
	2: "to meet you! ", 
	3: "What is your name? "
};

for (let i = 0; i < Object.keys(myArray).length; i += 1) {
	console.log(myArray[i]);
};

