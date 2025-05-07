/*
8 Kyu
Calculate Average

Write a function which calculates the average of the numbers in a given array.

Note: Empty arrays should return 0.

//PARAMETERS: an array of numbers

//RETURNS: the average of the array

//EXAMPLES: 
    findAverage([1, 1, 1], 1)
    findAverage([1, 2, 3], 2)
    findAverage([1, 2, 3, 4], 2.5)

//PSEUDOCODE: use the reduce method to get the sum of the array numbers, then divide by the length of the array
*/

function findAverage(arr){
    return arr.length > 0 ? arr.reduce((acc, curr) => +acc + curr) / arr.length : 0;
}

console.log(findAverage([], 0))
console.log(findAverage([1, 1, 1], 1))
console.log(findAverage([1, 2, 3], 2))
console.log(findAverage([1, 2, 3, 4], 2.5))
