/*
7 Kyu
Inspiring Strings

Given a string of space separated words, return the longest word.
If there are multiple longest words, return the rightmost longest word.

Examples
"red white blue"  =>  "white"
"red blue gold"   =>  "gold"

//PARAMETERS: a string of words

//RETURNS: the string with the longest word

//EXAMPLES: 
    (longestWord('lonely') , 'lonely')
    (longestWord('a pair') , 'pair')
    (longestWord('a b c d e fgh') , 'fgh')
    (longestWord('one two three') , 'three')
    (longestWord('red blue grey') , 'grey')

//PSEUDOCODE: split the string into an array of individual words, sort the words in the array from shortest length to longest, then pop off the last word
*/

function longestWord(str) {
  return str
    .split(" ")
    .sort((a, b) => a.length - b.length)
    .pop();
}

console.log(longestWord("lonely"), "lonely");
console.log(longestWord("a pair"), "pair");
console.log(longestWord("a b c d e fgh"), "fgh");
console.log(longestWord("one two three"), "three");
console.log(longestWord("red blue grey"), "grey");
