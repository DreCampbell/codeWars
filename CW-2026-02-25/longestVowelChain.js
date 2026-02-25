/*
7 Kyu
Longest Vowel Chain

The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

Good luck!

//PARAMETERS: a string of lowercase letters

//RETURNS: the number of the largest chain of vowels

//EXAMPLES: 
    (solve("codewarriors"),2);
    (solve("suoidea"),3);
    (solve("ultrarevolutionariees"),3);
    (solve("strengthlessnesses"),1);
    (solve("cuboideonavicuare"),2);
    (solve("chrononhotonthuooaos"),5);
    (solve("iiihoovaeaaaoougjyaw"),8);

//PSEUDOCODE: create a variable to hold the current and the max count and set them to 0; run a for loop from 0 to the length of the string checking if each letter is a vowel, if so add one to the current count; then run another conditional checking if the current count is greater than the max count, if so reassign the max count to the current count; then in the original if statement, if false reassign the current count to 0
*/

function solve(s){
    let current = 0;
    let max = 0;

    for(let i = 0; i < s.length; i++){
        if('aeiou'.includes(s[i])){
            current++;
            if(current > max){
                max = current;
            }
        }else{
            current = 0;
        }
    }
    return max;
}

console.log(solve("codewarriors"),2);
console.log(solve("suoidea"),3);
console.log(solve("ultrarevolutionariees"),3);
console.log(solve("strengthlessnesses"),1);
console.log(solve("cuboideonavicuare"),2);
console.log(solve("chrononhotonthuooaos"),5);
console.log(solve("iiihoovaeaaaoougjyaw"),8);