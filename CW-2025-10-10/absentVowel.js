/*
7 Kyu
Absent Vowel

Your job is to figure out the index of which vowel is missing from a given string:

A has an index of 0,
E has an index of 1,
I has an index of 2,
O has an index of 3,
U has an index of 4.
Notes: There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.

Examples
"John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
"Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"

//PARAMETERS: a string sentence which contains all but 1 vowel

//RETURNS: the index of the vowel that is missing

//EXAMPLES: 
    (absentVowel("John Doe hs seven red pples under his bsket"), 0);
    (absentVowel("Bb Smith sent us six neatly arranged range bicycles"), 3);

//PSEUDOCODE: create a variable that holds the vowels
*/

function absentVowel(str){
    let vowels = 'aeiou';
    let missing = vowels.split('').filter(x => !str.includes(x))
    return vowels.indexOf(missing);
}

console.log(absentVowel("John Doe hs seven red pples under his bsket"), 0);
console.log(absentVowel("Bb Smith sent us six neatly arranged range bicycles"), 3);