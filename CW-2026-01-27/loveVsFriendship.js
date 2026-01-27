/*
7 Kyu
Love Vs. Friendship

f　a = 1, b = 2, c = 3 ... z = 26

Then l + o + v + e = 54

and f + r + i + e + n + d + s + h + i + p = 108

So friendship is twice as strong as love :-)

Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.

The input will always be made of only lowercase letters and will never be empty.

//PARAMETERS: a string

//RETURNS: a number, the sum of the assigned numbers to each of the letters in the string

//EXAMPLES: 
    (wordsToMarks("attitude"), 100);
    (wordsToMarks("friends"), 75);
    (wordsToMarks("family"), 66);
    (wordsToMarks("selfness"), 99);
    (wordsToMarks("knowledge"), 96);

//PSEUDOCODE: create a variable to hold the alphabet, then split the given string into an array, map through that array changing each letter to the index in the alphabet variable, then use the reduce method to get the sum
*/

function wordsToMarks(str){
    let alphabet = '-abcdefghijklmnopqrstuvwxyz';
    return str.split('').map(x => x = alphabet.indexOf(x)).reduce((a, b) => a + b, 0);
}

console.log(wordsToMarks("attitude"), 100);
console.log(wordsToMarks("friends"), 75);
console.log(wordsToMarks("family"), 66);
console.log(wordsToMarks("selfness"), 99);
console.log(wordsToMarks("knowledge"), 96); 
