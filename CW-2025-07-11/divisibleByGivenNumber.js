/*
8 Kyu

Find numbers which are divisible by a given number

Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

Example(Input1, Input2 --> Output)
[1, 2, 3, 4, 5, 6], 2 --> [2, 

//PARAMETERS: an array of numbers and a number, the divisor

//RETURNS: a new array with only numbers that are divisble by the divisor

//EXAMPLES: 
    (divisibleBy([1,2,3,4,5,6], 2), [2,4,6]);
    (divisibleBy([1,2,3,4,5,6], 3), [3,6]);
    (divisibleBy([0,1,2,3,4,5,6], 4), [0,4]);
    (divisibleBy([0], 4), [0]);
    (divisibleBy([1,3,5], 2), []);

//PSEUDOCODE: filter through the array with modulus on the divisor
*/

function divisibleBy(nums, divisor){
    return nums.filter(x => x % divisor == 0);
}

console.log(divisibleBy([1,2,3,4,5,6], 2), [2,4,6]);
console.log(divisibleBy([1,2,3,4,5,6], 3), [3,6]);
console.log(divisibleBy([0,1,2,3,4,5,6], 4), [0,4]);
console.log(divisibleBy([0], 4), [0]);
console.log(divisibleBy([1,3,5], 2), []);