/*
7 Kyu
Sum of Array Singles

In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

//PARAMETERS: an array of numbers occuring only once or twice

//RETURNS: return the sum of all the numbers that only occur once

//EXAMPLES: 
    (repeats([4,5,7,5,4,8]), 15);
    (repeats([9, 10, 19, 13, 19, 13]), 19);
    (repeats([16, 0, 11, 4, 8, 16, 0, 11]), 12);
    (repeats([5, 17, 18, 11, 13, 18, 11, 13]), 22);
    (repeats([5, 10, 19, 13, 10, 13]), 24);

//PSEUDOCODE: filter through the array to get only numbers where their index is equal to the last index of that number, then use the reduce method to get the sum
*/

function repeats(arr){
    return arr.filter(x => arr.indexOf(x) === arr.lastIndexOf(x)).reduce((a, b) => a + b, 0);
}

console.log(repeats([4,5,7,5,4,8]), 15);
console.log(repeats([9, 10, 19, 13, 19, 13]), 19);
console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11]), 12);
console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13]), 22);
console.log(repeats([5, 10, 19, 13, 10, 13]), 24);
