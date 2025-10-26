/*
8 Kyu
Simple Multiplication

Description:
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

//PARAMETERS: a number

//RETURNS: if the given number is even, multiply it by 8, if odd multiply it by 9

//EXAMPLES: 
    (simpleMultiplication(2),16,'Should return given argument times eight...')
    (simpleMultiplication(1),9, 'Should return given argument times nine...')
    (simpleMultiplication(8),64,'Should return given argument times eight...')
    (simpleMultiplication(4),32,'Should return given argument times eight...')
    (simpleMultiplication(5),45,'Should return given argument times nine...')

//PSEUDOCODE: write a conditional checking if the number is even with modulous, if so multiply by 8, if not multiply by 9
*/

function simpleMultiplication(num){
    return num % 2 === 0 ? num * 8 : num * 9;
}

console.log(simpleMultiplication(2),16)
console.log(simpleMultiplication(1),9, )
console.log(simpleMultiplication(8),64)
console.log(simpleMultiplication(4),32)
console.log(simpleMultiplication(5),45)