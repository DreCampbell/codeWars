/*
8 Kyu
Contamination #1 String

An AI has infected a text with a character!!

This text is now fully mutated to this character.

Starting with the original text, and given a character, return the text once it has been mutated so that all of the characters in the original text have been replaced with the character.

If the text or the character are empty, return an empty string.
There will never be a case when both are empty as nothing is going on!!

Note: The character is a string of length 1 or an empty string.

Example
text before = "abc"
character   = "z"
text after  = "zzz"

//PARAMETERS: a string and a character

//RETURNS: replace all the characters in the string with the given character

//EXAMPLES: 
    (contamination("abc","z"), "zzz")
    (contamination("","z"), "")
    (contamination("abc",""), "")
    (contamination("_3ebzgh4","&"), "&&&&&&&&")
    (contamination("//case"," "), "      ")

//PSEUDOCODE: split the string into an array, use the map method to iterate through the array changing all characters to the given char, then join the array to a string
*/

function contamination(text, char){
    return text.split('').map(x => x = char).join('');
}

console.log(contamination("abc","z"), "zzz")
console.log(contamination("","z"), "")
console.log(contamination("abc",""), "")
console.log(contamination("_3ebzgh4","&"), "&&&&&&&&")
console.log(contamination("//case"," "), "      ")