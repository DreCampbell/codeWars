/*
7 Kyu
Find the Capitals

Instructions
Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

Example (Input --> Output)
"CodEWaRs" --> [0,3,4,6]

//PARAMETERS: a string mixed with upper and lower case letters

//RETURNS: return the indices that have a capitalized letter

//EXAMPLES: 
    (capitals('CodEWaRs'), [0,3,4,6] , "Input: \"CodEWaRs\"");
    (capitals('aAbB'), [1,3], "Input: \"aAbB\"");
    (capitals('AAA'), [0,1,2], "Input: \"AAA\"");
    (capitals(''), [], "Input: \"\"");

//PSEUDOCODE: split the word into an array and filter out the lowercase letters while returning the indices of the uppercase letters
*/

function capitals(word){
    return word.split('').map((x, i) => {
        if(x === x.toUpperCase()){
            return i;
        }
    }).filter(x => x != undefined);
}

console.log(capitals('CodEWaRs'), [0,3,4,6] , "Input: \"CodEWaRs\"");
console.log(capitals('aAbB'), [1,3], "Input: \"aAbB\"");
console.log(capitals('AAA'), [0,1,2], "Input: \"AAA\"");
console.log(capitals(''), [], "Input: \"\"");