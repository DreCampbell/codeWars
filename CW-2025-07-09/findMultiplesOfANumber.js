/*
8 Kyu
Find Multiples of a Number

In this simple exercise, you will write a function that takes two integers; n and limit; and returns a list of the multiples of n up to and possibly including limit.

It is guaranteed that n > 0 and limit >= n.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

Examples
n = 2; limit = 6 --> [2, 4, 6]
n = 2; limit = 5 --> [2, 4]

//PARAMETERS: a number and a limit

//RETURNS: an array of all multiples of the given number up to and including the limit

//EXAMPLES: 
  (findMultiples(5, 25), [5, 10, 15, 20, 25])
  (findMultiples(1, 2), [1, 2])
  (findMultiples(5, 7), [5])
  (findMultiples(4, 27), [4, 8, 12, 16, 20, 24])
  (findMultiples(11, 54), [11, 22, 33, 44])

//PSEUDOCODE: create a variable to hold an empty array, run a for loop starting at the given number, up to the limit, and increasing by the given number, for each loop, push a the number to the array
*/

function findMultiples(n, limit){
    let multiples = [];
    for(let i = n; i <= limit; i += n){
        multiples.push(i);
    }
    return multiples;
}

console.log(findMultiples(5, 25), [5, 10, 15, 20, 25])
console.log(findMultiples(1, 2), [1, 2])
console.log(findMultiples(5, 7), [5])
console.log(findMultiples(4, 27), [4, 8, 12, 16, 20, 24])
console.log(findMultiples(11, 54), [11, 22, 33, 44])