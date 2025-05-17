/*
8 Kyu
Remove Exclamation Marks

Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

//PARAMETERS: a string

//RETURNS: return the string with all '!' removed

//EXAMPLES: 
    (removeExclamationMarks("Hello World!"), "Hello World");

//PSEUDOCODE: parse the string to an array of individual characters, filter out the '!' then join the array to a string
*/

function removeExclamationMarks(s){
    return s.split('').filter(x => x != '!').join('');
}

console.log(removeExclamationMarks("Hello World!"), "Hello World");