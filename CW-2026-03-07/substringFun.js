/*
7 Kyu
Subsstring Fun

Complete the function that takes an array of words.

You must concatenate the nth letter from each word to construct a new word which should be returned as a string, where n is the position of the word in the list.

For example:

["yoda", "best", "has"]  -->  "yes"
  ^        ^        ^
  n=0     n=1     n=2
Note: Test cases contain valid input only - i.e. a string array or an empty array; and each word will have enough letters.

//PARAMETERS: an array of words

//RETURNS: a string

//EXAMPLES: 
    (nthChar([]),'');
    (nthChar(['yoda', 'best', 'has']), 'yes');

//PSEUDOCODE: loop through the array of words pushing each nth letter to the variable array then join to a string
*/

function nthChar(words) {
  return words.map((x, i) => x[i]).join("");
}

console.log(nthChar([]), "");
console.log(nthChar(["yoda", "best", "has"]), "yes");
