/*
8 Kyu
Is there a vowel in there? 

Description:
Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

input [100,100,116,105,117,121]=>[100,100,116,"i","u",121] output Return the resulting array.

//PARAMETERS: an array of numbers

//RETURNS: the array with any number that equates to a lowercase vowel parsed to that vowel as a string

//EXAMPLES: 
    isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106], [118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]);
    isVow([101,121,110,113,113,103,121,121,101,107,103], ["e",121,110,113,113,103,121,121,"e",107,103]);

//PSEUDOCODE: create a variable to hold the vowels, then iterate through the given array parameter checking if each number coverted to a letter is included in the vowels variable, if so return the letter, if not return the number
*/

function isVow(arr){
    let vowels = 'aeiou';
    return arr.map(n => {
        if(vowels.includes(String.fromCharCode(n))){
            return String.fromCharCode(n);
        }else{
            return n;
        }
    })
}

console.log(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106], [118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]));
console.log(isVow([101,121,110,113,113,103,121,121,101,107,103], ["e",121,110,113,113,103,121,121,"e",107,103]));