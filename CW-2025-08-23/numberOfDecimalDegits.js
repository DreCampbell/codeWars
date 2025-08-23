/*
7 Kyu
Number of Decimal Digits

Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

All inputs will be valid.

//PARAMETERS: a number

//RETURNS: the length of that number

//EXAMPLES: 
    (digits(0), 1);
    (digits(66), 2);
    (digits(12345), 5);
    (digits(9007199254740991), 16);

//PSEUDOCODE: parse the number into a string then get the length
*/

function digits(n){
    return n.toString().length;
}

console.log(digits(0), 1);
console.log(digits(66), 2);
console.log(digits(12345), 5);
console.log(digits(9007199254740991), 16);