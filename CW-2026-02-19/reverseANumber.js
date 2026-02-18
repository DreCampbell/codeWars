/*
7 Kyu
Reverse a Number

Description:
Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

Examples
 123 ->  321
-456 -> -654
1000 ->    1

//PARAMETERS: a number

//RETURNS: the number with the digits reversed

//EXAMPLES: 
    (reverseNumber(123), 321)
    (reverseNumber(-123), -321, 'Negative Numbers should be preserved')
    (reverseNumber(1000), 1, 'Should handle numbers ending with "0"')
    (reverseNumber(4321234), 4321234)
    (reverseNumber(5), 5)
    (reverseNumber(0), 0)
    (reverseNumber(98989898), 89898989)

//PSEUDOCODE: get the absolute of the number, parse the number into a string, split into an array, reverse the string number, then join and store in a variable. Then write a conditional checking if the given number is greater than 0, if so return the variable, if less than 0 return the negative of the variable
*/

function reverseNumber(n){
    let reverse = +String(Math.abs(n)).split('').reverse().join('');
    return n > 0 ? reverse : -reverse;
}

console.log(reverseNumber(123), 321)
console.log(reverseNumber(-123), -321, 'Negative Numbers should be preserved')
console.log(reverseNumber(1000), 1, 'Should handle numbers ending with "0"')
console.log(reverseNumber(4321234), 4321234)
console.log(reverseNumber(5), 5)
console.log(reverseNumber(0), 0)
console.log(reverseNumber(98989898), 89898989)