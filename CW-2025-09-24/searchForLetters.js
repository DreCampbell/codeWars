/*
7 Kyu
Search for Letters

Create a function which accepts one arbitrary string as an argument, and return a string of length 26.

The objective is to set each of the 26 characters of the output string to either '1' or '0' based on the fact whether the Nth letter of the alphabet is present in the input (independent of its case).

So if an 'a' or an 'A' appears anywhere in the input string (any number of times), set the first character of the output string to '1', otherwise to '0'. if 'b' or 'B' appears in the string, set the second character to '1', and so on for the rest of the alphabet.

For instance:

"a   **&  cZ"  =>  "10100000000000000000000001"
"aaaaaaa79345675"  =>  "10000000000000000000000000"
"&%#*"  =>  "00000000000000000000000000"

//PARAMATERS: a string

//RETURNS: a 26 character length string representing the alphabet, if a letter in the alphabet is present in the string, return '1' in it's position in the alphabet, otherwise return '0'

//EXAMPLES: 
    ( change("a **&  bZ"), "11000000000000000000000001" );
    ( change("aaaaaaa79345675"), "10000000000000000000000000" );
    ( change("&%#*"), "00000000000000000000000000" );

//PSEUDOCODE: create a variable to hold the alphabet, parse that string to an array and map through checking if each letter is present in the given string, if so return '1', else return '0'
*/

function change(str){
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return alphabet.split('').map(x => str.toUpperCase().includes(x) ? '1' : '0').join('')
}

console.log( change("a **&  bZ"), "11000000000000000000000001" );
console.log( change("aaaaaaa79345675"), "10000000000000000000000000" );
console.log( change("&%#*"), "00000000000000000000000000" );