/*
7 Kyu 
Mumbling

This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.

//PARAMAETERS: a string

//RETURNS: a pattern where each letter is repeated by the position it is in the string with the first letter capitalized

//EXAMPLES: 
    accum("abcd") -> "A-Bb-Ccc-Dddd"
    accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
    accum("cwAt") -> "C-Ww-Aaa-Tttt"

//PSEUDOCODE: make all the letters lowercase then split the string into an array, iterate through the array with map taking the element and index as parameters, then return the first letter capitalized and concatinate with the letter repeated by the number of the index, then join the array with a dash
*/

function accum(s){
    return s.toLowerCase().split('').map((x, i) => x.toUpperCase() + x.repeat(i)).join('-');
}

console.log(accum("abcd"), "A-Bb-Ccc-Dddd")
console.log(accum("RqaEzty"), "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy")
console.log(accum("cwAt"), "C-Ww-Aaa-Tttt")