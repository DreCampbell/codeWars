/*
7 Kyu
Move 10

Move every letter in the provided string forward 10 letters through the alphabet.

If it goes past 'z', start again at 'a'.

Input will be a string with length > 0.

//PARAMETERS: a string

//RETURNS: move every letter in the string up 10 letters in the alphabet, returning a new string

//EXAMPLES: 
    (moveTen("testcase"), "docdmkco");
    (moveTen("codewars"), "mynogkbc");
    (moveTen("exampletesthere"), "ohkwzvodocdrobo");

//PSEUDOCODE: create a variable to hold the alphabet, split the string into an array of letters, iterate through the array with map
*/

function moveTen(s){
    return s.split('').map(x => x.charCodeAt(0) + 10 > 122 
        ? String.fromCharCode(x.charCodeAt(0) - 16) 
        : String.fromCharCode(x.charCodeAt(0) + 10)).join('');
}

console.log(moveTen("testcase"), "docdmkco");
console.log(moveTen("codewars"), "mynogkbc");
console.log(moveTen("exampletesthere"), "ohkwzvodocdrobo");