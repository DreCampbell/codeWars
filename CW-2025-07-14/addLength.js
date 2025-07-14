/*
8 Kyu
Add Length

Description:
What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

Example(Input --> Output)

"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]
Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

Note: String will have at least one element; words will always be separated by a space.

//PARAMETERS: a string

//RETURNS: an array with each word of the string followed by it's length and a space

//EXAMPLES: 
    (addLength("apple ban") --> ["apple 5", "ban 3"])
    (addLength("you will win") -->["you 3", "will 4", "win 3"])

//PSEUDOCODE: split the string into an array of words, map through the array returning the string and it's length in a template literal
*/

function addLength(str){
    return str.split(' ').map(x => `${x} ${x.length}`);
}

console.log(addLength("apple ban"),  ["apple 5", "ban 3"])
console.log(addLength("you will win"), ["you 3", "will 4", "win 3"])