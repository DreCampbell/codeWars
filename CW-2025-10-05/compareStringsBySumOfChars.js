/*
7 Kyu
Compare Strings by Sum of Chars

Description:
Compare two strings by comparing the sum of their values (ASCII character code).

For comparing treat all letters as UpperCase
null/NULL/Nil/None should be treated as empty strings
If the string contains other characters than letters, treat the whole string as it would be empty
Your method should return true, if the strings are equal and false if they are not equal.

Examples:
"AD", "BC"  -> equal
"AD", "DD"  -> not equal
"gf", "FG"  -> equal
"zz1", ""   -> equal (both are considered empty)
"ZzZz", "ffPFF" -> equal
"kl", "lz"  -> not equal
null, ""    -> equal

//PARAMETERS: two strings

//RETURNS: a boolean, true if the sum of the ASCII char codes are equal

//EXAMPLES: 
    compare("AD", "BC", true);
    compare("AD", "DD", false);
    compare("gf", "FG", true);
    compare("Ad", "DD", false);
    compare(null, "BC", false);
    compare(null, null, true);
    compare(null, "", true);
    compare("", "", true);

//PSEUDOCODE: 
*/

function compare(s1, s2){
    let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const isAlpha = (cVal) => alpha.includes(cVal);
    s1 = (s1 || '').toUpperCase().split('');
    s2 = (s2 || '').toUpperCase().split('');

    const count1 = s1.every(isAlpha) ? s1.reduce((a, c) => a + c.charCodeAt(0), 0) : 0;

    const count2 = s2.every(isAlpha) ? s2.reduce((a, c) => a + c.charCodeAt(0), 0) : 0;

    return count1 === count2;
}

console.log(compare("AD", "BC"), true);
console.log(compare("AD", "DD"), false);
console.log(compare("gf", "FG"), true);
console.log(compare("Ad", "DD"), false);
console.log(compare(null, "BC"), false);
console.log(compare(null, null), true);
console.log(compare(null, ""), true);
console.log(compare("", ""), true);