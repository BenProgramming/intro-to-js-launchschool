// What does the following function do? 

function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

// The function will divide a string at each " " (blank space character) store the results in an array, reverse the order of the array, and then map the lengths of the reversed order strings in the array. 
// It will then return the result, an array containing the lengths of each word starting with the last word in the string passed. 

