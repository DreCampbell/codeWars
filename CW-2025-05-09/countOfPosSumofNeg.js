/*
8 Kyu
Count of Positives / Sum of Negatives

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


*/

function countPositivesSumNegatives(input) {
    if(input === null || input.length === 0){
        return [];
    }else{
        let count = input.filter(x => x >= 1).length;
        let sum = input.filter(x => x < 0).reduce((acc, curr) => acc + curr, 0)
        return [count, sum];
    }
}

console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]), [8, -50]);
console.log(countPositivesSumNegatives([]), []);
console.log(countPositivesSumNegatives(null), []);
