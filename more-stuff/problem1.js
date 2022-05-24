// What does this code log to the console? Why? 

let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);

// The code above will log [1, 4, 3]; to the console.
// When creating an array, JavaScript creates one address that stores a pointer to an allocation of memory, that allocation of memory contains the 'contents' of your array. When you set an array equal to another you are passing the pointer to the new array, so whenever the contents of the first or the second are changed they point to the same values.  
