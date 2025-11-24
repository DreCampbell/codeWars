/*
7 Kyu
Find the Stray Number

You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3

//PARAMETERS: an array of numbers

//RETURNS: the single number that is unlike the rest

//EXAMPLES: 
    (stray([1, 1, 2]), 2);
    (stray([1, 2, 1]), 2);
    (stray([2, 1, 1]), 2);

//PSEUDOCODE: sort the array from lowest to highest, then write a conditional checking if the first and the second numbers in the array are the same, if they are, return the last number in the array, if they are different, return the first number in the array
*/

function stray(n){
    n = n.sort((a, b) => a - b)
    return n[0] === n[1] ? n[n.length -1] : n[0];
}

console.log(stray([17, 17, 3, 17, 17, 17, 17]), 3);
console.log(stray([1, 1, 2]), 2);
console.log(stray([1, 2, 1]), 2);
console.log(stray([2, 1, 1]), 2);