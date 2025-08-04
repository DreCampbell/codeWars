/*
7 Kyu
Testing 1-2-3

Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
 

//PARAMETERS: an array

//RETURNS: return the array as a numbered key & value pair

//EXAMPLES: 
    (number([]), [], 'Empty array should return empty array');
    (number(["a", "b", "c"]), ["1: a", "2: b", "3: c"], 'Return the correct line numbers');                

//PSEUDOCODE: using the map method iterate through the array, returning the index plus one and the element
*/

function number(arr){
    return arr.map((x, i) => `${i + 1}: ${x}`);
}

console.log(number([]), []);
console.log(number(["a", "b", "c"]), ["1: a", "2: b", "3: c"]);