/*
8 Kyu
Remove First and Last Character

It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

//PARAMETERS: a string

//RETURNS: remove the first and last characters in the string

//EXAMPLES: 
    (removeChar('eloquent'), 'loquen');
    (removeChar('country'), 'ountr');
    (removeChar('person'), 'erso');
    (removeChar('place'), 'lac');
    (removeChar('ab'), '')
    (removeChar('ooopsss'), 'oopss');

//PSEUDOCODE: 
*/

function removeChar(str){
    return str.slice(1, -1);
}

console.log(removeChar('eloquent'), 'loquen');
console.log(removeChar('country'), 'ountr');
console.log(removeChar('person'), 'erso');
console.log(removeChar('place'), 'lac');
console.log(removeChar('ab'), '')
console.log(removeChar('ooopsss'), 'oopss');