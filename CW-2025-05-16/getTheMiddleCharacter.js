/*
7 Kyu
Get the Middle Character

You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

If the string's length is odd, return the middle character.
If the string's length is even, return the middle 2 characters.
Examples:
"test" --> "es"
"testing" --> "t"
"middle" --> "dd"
"A" --> "A"

//PARAMETERS: a string

//RETURNS: if the string is odd, return the middle character, if the string is even, return the middle two characters

//EXAMPLES: 
getMiddle("test"), --> "es"
getMiddle("testing"), --> "t"
getMiddle("middle"), --> "dd"
getMiddle("A"), --> "A"

//PSEUDOCODE: write a conditional to check if the length of the string is odd, if so get the middle character by using square brackets and the lenght of the string divided by two
*/

function getMiddle(s){
    if(s.length % 2 !== 0){
        return s[Math.floor(s.length / 2)];
    }else{
        return `${s[s.length / 2 - 1]}${s[s.length / 2]}`;
    }
}

console.log(getMiddle("test"), "es")
console.log(getMiddle("testing"), "t")
console.log(getMiddle("middle"), "dd")
console.log(getMiddle("A"), "A")