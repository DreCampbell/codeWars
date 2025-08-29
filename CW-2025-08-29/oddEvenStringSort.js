/*
7 Kyu
Odd-Even String Sort

Description:
Given a string s, your task is to return another string such that even-indexed and odd-indexed characters of s are grouped and the groups are space-separated. Even-indexed group comes as first, followed by a space, and then by the odd-indexed part.

Examples
input:    "CodeWars" => "CdWr oeas"
           ||||||||      |||| ||||
indices:   01234567      0246 1357
Even indices 0, 2, 4, 6, so we have "CdWr" as the first group.
Odd indices are 1, 3, 5, 7, so the second group is "oeas".
And the final string to return is "Cdwr oeas".

Notes
Tested strings are at least 8 characters long.

//PARAMETERS: a string

//RETURNS: the string sorted into a split string of even and odd indexed characters

//EXAMPLES: 
    (sortMyString("CodeWars"), "CdWr oeas");
    (sortMyString("YCOLUE'VREER"), "YOU'RE CLEVER");   

//PSEUDOCODE: create a variable for even and odd indexed characters, in each variable split the string into an array, filter through the array, returning only even and odd indexed elements, respectively, then join the array back to a string and return the two variables
*/

function sortMyString(s){
    let evens = s.split('').filter((x, i) => i % 2 === 0).join('')
    let odds = s.split('').filter((x, i) => i % 2 !== 0).join('')
    return `${evens} ${odds}`;
}

console.log(sortMyString("CodeWars"), "CdWr oeas");
console.log(sortMyString("YCOLUE'VREER"), "YOU'RE CLEVER");   
