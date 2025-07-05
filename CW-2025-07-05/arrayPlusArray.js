/*
8 Kyu
Array plus array

I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.

//PARAMETERS: two arrays of numbers

//RETURNS: the sum of all the numbers in each array 

//EXAMPLES: 
    (arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
    (arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
    (arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
    (arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);

//PSEUDOCODE: concatinate the arrays, then use the reduce method to get the sum
*/

function arrayPlusArray(arr1, arr2){
    return arr1.concat(arr2).reduce((a, c) => a + c, 0);
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
console.log(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);