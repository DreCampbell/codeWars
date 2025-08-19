/*
7 Kyu
Anagram Detection

Description:
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"

//PARAMETERS: two strings

//RETURNS: a boolean, true if all the letters in the test string are the exact same as all the letters in the original string

//EXAMPLES: 
    (isAnagram("foefet", "toffee"), true)
    (isAnagram("Buckethead", "DeathCubeK"), true)
    (isAnagram("Twoo", "WooT"), true)
    (isAnagram("dumble", "bumble"), false)
    (isAnagram("ound", "round"), false)
    (isAnagram("apple", "pale"), false)

//PSEUDOCODE: convert the letters to lowercase, split the string to an array and compare them after sorting and joining both strings
*/

function isAnagram(test, original){
    return test.toLowerCase().split('').sort().join('') === original.toLowerCase().split('').sort().join('');
}

console.log(isAnagram("foefet", "toffee"), true)
console.log(isAnagram("Buckethead", "DeathCubeK"), true)
console.log(isAnagram("Twoo", "WooT"), true)
console.log(isAnagram("dumble", "bumble"), false)
console.log(isAnagram("ound", "round"), false)
console.log(isAnagram("apple", "pale"), false)