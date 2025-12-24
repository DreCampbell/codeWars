/*
6 Kyu
Sum of Digits / Digital Root

Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

//PARAMETERS: a positive number

//RETURNS: the sum of the digits in the given number

//EXAMPLES: 
    ( digitalRoot(16), 7 )
    ( digitalRoot(456), 6 )

//PSEUDOCODE: parse the number into a string, split the string into an array of individual digits, reduce through the array to get the sum
*/

function digitalRoot(n){
    while (n > 9){
        n = String(n).split('').reduce((a, b) => +a + +b);
        return n;
    }
}

// function digitalRoot(n) {
//   while (n > 9) { 
//     n = (String(n)).split('').reduce((s,d) => +s + +d); }
//   return n;
// }

console.log( digitalRoot(16), 7 )
console.log( digitalRoot(456), 6 )