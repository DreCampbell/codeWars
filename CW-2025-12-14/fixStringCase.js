/*
7 Kyu
Fix String Case

In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

//PARAMETERS: a sring with upper and lower case letters

//RETURNS: if the string has more or equal lowercase letters than uppercase, convert the string to all lowercase, else all uppercase

//EXAMPLES: 
    (solve("code"), "code");
    (solve("CODe"), "CODE");
    (solve("COde"), "code");
    (solve("Code"), "code");

//PSEUDOCODE: create variables to hold the number of upper or lowercase letters and set them to 0, run a for loop through the string checking if each letter is upper or lowercase, then add 1 to the correct variable. Then check if the count of lowercase letters is >= uppercase letters, and if so use toLowerCase() to convert the string, else use toUpperCase()
*/

// function solve(s){
//     let upperCount = 0;
//     let lowerCount = 0;
//     for(let i = 0 ; i < s.length; i++){
//         if(s[i] === s[i].toUpperCase()){
//             upperCount++;
//         }else{
//             lowerCount++;
//         }
//     }
//     return upperCount > lowerCount ? s.toUpperCase() : s.toLowerCase();
// }

function solve(s){
    return s.split('').filter(x => x === x.toUpperCase()).length > s.length / 2 ? s.toUpperCase() : s.toLowerCase();
}

console.log(solve("code"), "code");
console.log(solve("CODe"), "CODE");
console.log(solve("COde"), "code");
console.log(solve("Code"), "code");