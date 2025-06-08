/*
8 Kyu
Even or Odd

Description:
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

//PARAMETERS: a number

//RETURNS: 'Even' or 'Odd'

//EXAMPLES: 
    (evenOrOdd(2), "Even");
    (evenOrOdd(7), "Odd");
    (evenOrOdd(-42), "Even");
    (evenOrOdd(-7), "Odd");

//PSEUDOCODE: write a ternary operation checking if the given number is even by using modulus, if so return 'Even', if not return 'Odd'
*/

function evenOrOdd(num){
    return num % 2 === 0 ? 'Even' : 'Odd';
}

console.log(evenOrOdd(2), "Even");
console.log(evenOrOdd(7), "Odd");
console.log(evenOrOdd(-42), "Even");
console.log(evenOrOdd(-7), "Odd");