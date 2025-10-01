/*
7 Kyu
All Unique

Description:
Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.

//PARAMETERS: a string of characters

//RETURNS: true if the string has no duplicated characters

//EXAMPLES: 
    (hasUniqueChars("  nAa"),false)
    (hasUniqueChars("abcdef"),true)
    (hasUniqueChars("aA"),true
    (hasUniqueChars("++-"),false

//PSEUDOCODE: create a variable to hold the filtered string with any duplicates removed, then compare that filtered string to the given string
*/

function hasUniqueChars(str){
    let filtered = str.split('').filter((x, i, a) => a.indexOf(x) == i).join('')
    return filtered == str;
}

console.log(hasUniqueChars("  nAa"),false)
console.log(hasUniqueChars("abcdef"),true)
console.log(hasUniqueChars("aA"),true)
console.log(hasUniqueChars("++-"),false)
