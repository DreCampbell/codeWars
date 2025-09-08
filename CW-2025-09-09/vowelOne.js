/*
7 Kyu
Vowel One

Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

All non-vowels including non alpha characters (spaces,commas etc.) should be included.

Examples:

vowelOne( "abceios" ) // "1001110"

vowelOne( "aeiou, abc" ) // "1111100100"

//PARAMETERS: an string of letters

//RETURNS: a string of numbers where vowels become 1's and consonants become 0's

//EXAMPLES: 
    ( vowelOne( "vowelOne" ), "01010101" );
    ( vowelOne( "123, arou" ), "000001011" );

//PSEUDOCODE: split the string into an array, map through the array, within the map, w
*/

function vowelOne(s){
    let vowels = 'aeiouAEIOU';
    return s.split('').map(x => vowels.includes(x) ? '1' : '0').join('');
}

console.log( vowelOne( "vowelOne" ), "01010101" );
console.log( vowelOne( "123, arou" ), "000001011" );
