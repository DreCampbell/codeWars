/*
7 Kyu
Odd or Even

Task:
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"
Have fun!

//PARAMETERS: an array of pos and neg numbers

//RETURNS: return if the sum of the array is "odd" or "even"

//EXAMPLES: 
    (oddOrEven([0]), 'even')
    (oddOrEven([1]), 'odd')
    (oddOrEven([]), 'even')

//PSEUDOCODE: sum the array with reduce, then use modulus to see if it is odd or even, if odd return 'odd' else return 'even'
*/

function oddOrEven(arr){
    let sum = arr.reduce((acc, curr) => acc + curr, 0);
    return sum % 2 === 0 ? 'even' : 'odd';
}

console.log(oddOrEven([0]), 'even')
console.log(oddOrEven([1]), 'odd')
console.log(oddOrEven([]), 'even')