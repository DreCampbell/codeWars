/*
8 Kyu 
To square(root) or not to square(root)

Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.

Example
[4,3,9,7,2,1] -> [2,9,3,49,4,1]
Notes
The input array will always contain only positive numbers, and will never be empty or null.

//PARAMETERS: an array of positive numbers

//RETURNS: a new array where each number is either squared or square-rooted

//EXAMPLES: 
    squareOrSquareRoot([4,3,9,7,2,1]), [2,9,3,49,4,1]

//PSEUDOCODE: iterate through the array checking if using Math.sqrt() on each number is a whole number by also using Number.isInteger(). If the number is not a whole number, return the number squared, if it is a whole number return the Math.sqrt(num)
*/

function squareOrSquareRoot(arr){
    return arr.map(num => {
        return !Number.isInteger(Math.sqrt(num)) ? num**2 : Math.sqrt(num);
    });
}

console.log(squareOrSquareRoot([4,3,9,7,2,1]), [2,9,3,49,4,1])