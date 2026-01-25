/*
7 Kyu
Sum of Cubes

Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.

Assume that the input n will always be a positive integer.

Examples: (Input --> output)

2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)

//PARAMETERS: a positive number, n

//RETURNS: the sum of the cube of all the numbers from 1 - 9

//EXAMPLES: 
    (sumCubes(2), 9)
    (sumCubes(3), 36)

//PSEUDOCODE: create an empty array to hold all the integers from 1 to n, then run a for loop pushing all the integers into the array, then use map() to iterate through all the numbers and cube the with Math.pow(), then use reduce() to get the sum
*/

function sumCubes(n){
    let cubed = []
    for(let i = 1; i <= n; i++){
        cubed.push(i)
    }
    return cubed.map(x => Math.pow(x, 3)).reduce((a, b) => a + b, 0);
}

console.log(sumCubes(2), 9)
console.log(sumCubes(3), 36)