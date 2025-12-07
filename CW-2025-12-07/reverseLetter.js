/*
7 Kyu 
Simple Fun #176: Reverse Letter

Given a string str, reverse it and omit all non-alphabetic characters.

Example
For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".

Input/Output
[input] string str
A string consists of lowercase latin letters, digits and symbols.

[output] a string

*/

function reverseLetter(str){
    let abc = 'abcdefghijklmnopqrstuvwxyz';
    return str.split('').filter(x => abc.includes(x)).reverse().join('');
}

console.log(reverseLetter("krishan"), "nahsirk");
console.log(reverseLetter("ultr53o?n"), "nortlu");
console.log(reverseLetter("ab23c"), "cba");
console.log(reverseLetter("krish21an"), "nahsirk");