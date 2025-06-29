/*
8 Kyu
Square(n) Sum

Description:
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 
1^2 + 2^2 + 2^2 = 9

//PARAMETERS: an array of numbers

//RETURNS: the sum of the numbers squared

//EXAMPLES: 
    (squareSum([1,2]), 5);
    (squareSum([0, 3, 4, 5]), 50);
    (squareSum([]), 0);

//PSEUDOCODE: iterate through the array with map, square each number, then use reduce to get the sum
*/
function squareSum(nums){
    return nums.map(x => x**2).reduce((a, c) => a + c, 0);
}

console.log(squareSum([1,2]), 5);
console.log(squareSum([0, 3, 4, 5]), 50);
console.log(squareSum([]), 0);