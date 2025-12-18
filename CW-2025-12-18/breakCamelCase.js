/*
6 Kyu
Break camelCase

Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

//PARAMETERS: a string

//RETURNS: the string with a space separating the words, before each capital

//EXAMPLES: 
    (solution(""), "");
    (solution("camelCasing"), "camel Casing");
    (solution("camelCasingTest"), "camel Casing Test");

//PSEUDOCODE: split the string into an array of individual letters, iterate through the string with map, if the letter is a capital, return it with a space in front, if not just return the letter, then join the array to a string
*/

function solution(str){
    return str.split('').map(x => {
        return x == x.toUpperCase() ? ` ${x}` : x;
    }).join('');
}

console.log(solution(""), "");
console.log(solution("camelCasing"), "camel Casing");
console.log(solution("camelCasingTest"), "camel Casing Test");
