/*
8 Kyu 
Sum of Differences in Array

Description:
Your task is to sum the differences between consecutive pairs in the array in descending order.

Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

//PARAMETERS: an array of numbers

//RETURNS: the sum of the differences of the numbers in descending order

//EXAMPLES: 
    (sumOfDifferences([1, 2, 10]), 9);
    (sumOfDifferences([-3, -2, -1]), 2);

//PSEUDOCODE: create a variable to hold an empty array, reassign the given array so that it is in descending order, run a for loop pushing the difference from each pair of numbers to the variable array, the return the sum with the reduce method
*/

function sumOfDifferences(arr){
    let sum = [];
    arr = arr.sort((a, b) => b - a)
    for(let i = 0; i < arr.length -1; i++){
        sum.push(arr[i] - arr[i+1])
    }
    return sum.reduce((a, b) => a + b, 0);
}

console.log(sumOfDifferences([1, 2, 10]), 9);
console.log(sumOfDifferences([-3, -2, -1]), 2);