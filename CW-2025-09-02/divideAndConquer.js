/*
7 Kyu
Divide and Conquer

Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

Return as a number.

//PARAMETERS: an array of numbers and string numbers

//RETURNS: add the non-string numbers together and subtract the sum of the string numbers

//EXAMPLES: 
    (divCon([9, 3, '7', '3']), 2);
    (divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 14); 
    (divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 13); 

//PSEUDOCODE: in a variable get the sum of the strings
*/

function divCon(x){
    let strNums = x.filter(num => typeof num === 'string').map(Number).reduce((a, b) => a + b, 0)
    let nums = x.filter(num => typeof num === 'number').reduce((a, b) => a + b, 0)
    return nums - strNums;
}

console.log(divCon([9, 3, '7', '3']), 2);
console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 14); 
console.log(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 13); 