/*
8 Kyu
Powers of 2

Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

Examples
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

//PARAMETERS: a positive number, n

//RETURNS: an array of all the powers of 2 from 0 to n

//EXAMPLES: 
    (powersOfTwo(0), [1])
    (powersOfTwo(1), [1, 2])
    (powersOfTwo(4), [1, 2, 4, 8, 16])

//PSEUDOCODE: create an empty array to hold the list of powers of 2, run a loop from 0 to n pushing each power of 2 to the array, then return the array
*/

function powersOfTwo(n) {
  let powers = [];
  for (let i = 0; i <= n; i++) {
    powers.push(Math.pow(2, i));
  }
  return powers;
}

console.log(powersOfTwo(0), [1]);
console.log(powersOfTwo(1), [1, 2]);
console.log(powersOfTwo(4), [1, 2, 4, 8, 16]);
