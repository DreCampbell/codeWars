/*
7 Kyu
Summing a Number's Digits

Write a function which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5
Let's assume that all numbers in the input will be integer values.

//PARAMETERS: a number

//RETURNS: the sum of the absolute value of the number's digits

//EXAMPLES: 
    (sumDigits(10), 1);
    (sumDigits(99), 18);
    (sumDigits(-32), 5);

//PSEUDOCODE: use Math.abs() to get the absolute of the number, then parse the number into a string and split it into an array of individual numbers, then use reduce to parse the strings into numbers and add them together
*/

function sumDigits(num){
    return Math.abs(num).toString().split('').reduce((a, b) => +a + +b, 0);
}

console.log(sumDigits(0), 0);
console.log(sumDigits(10), 1);
console.log(sumDigits(99), 18);
console.log(sumDigits(-32), 5);