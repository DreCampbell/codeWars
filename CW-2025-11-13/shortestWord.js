/*
7 Kyu
Shortest Word

Description:
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

//PARAMETERS: a string of words

//RETURNS: the length of the shortest word

//EXAMPLES: 
    (findShort("bitcoin take over the world maybe who knows perhaps"), 3);
    (findShort("turns out random test cases are easier than writing out basic ones"), 3); 
    (findShort("Let's travel abroad shall we"), 2);

//PSEUDOCODE: convert the string to an array of words, iterate through the array with map, converting each string to the length, then return the smallest number with the Math.min() method
*/

function findShort(s){
    return Math.min(...s.split(' ').map(x => x.length));
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
console.log(findShort("turns out random test cases are easier than writing out basic ones"), 3); 
console.log(findShort("Let's travel abroad shall we"), 2);
