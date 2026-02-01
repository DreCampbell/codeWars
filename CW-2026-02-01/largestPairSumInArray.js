/*
7 Kyu
Largest Pair Sum in Array

Given a sequence of numbers, find the largest pair sum in the sequence.

For example

[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
Input sequence contains minimum two elements and every element is an integer.

//PARAMETERS: an array of numbers

//RETURNS: the sum of the two largest numbers in the array

//EXAMPLES: 
    largestPairSum([10,14,2,23,19], 42);
    largestPairSum([-100,-29,-24,-19,19], 0);
    largestPairSum([1,2,3,4,6,-1,2], 10);
    largestPairSum([-10, -8, -16, -18, -19], -18);

//PSEUDOCODE: sort the array from largest to smallest, then add the first two elements
*/

function largestPairSum(nums){
    nums = nums.sort((a, b) => b - a);
    return nums[0] + nums[1];
}

console.log(largestPairSum([10,14,2,23,19]), 42);
console.log(largestPairSum([-100,-29,-24,-19,19]), 0);
console.log(largestPairSum([1,2,3,4,6,-1,2]), 10);
console.log(largestPairSum([-10, -8, -16, -18, -19]), -18);