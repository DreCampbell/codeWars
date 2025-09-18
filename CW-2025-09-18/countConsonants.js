/*
7 Kyu 
Count Consonants

Description:
Complete the function that takes a string of English-language text and returns the number of consonants in the string.

Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

//PARAMETERS: a string of letters

//RETURNS: the number of letters that are consonants

//EXAMPLES: 
    consonantCount('', 0);
    consonantCount('aeiouAEIOU', 0);
    consonantCount('aaa', 0);
    consonantCount('bcdfghjklmnpqrstvwxyz', 21);
    consonantCount('bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ', 42);
    consonantCount('y', 1);
    consonantCount('Y', 1);
    consonantCount('01234567890_', 0);
    consonantCount(' ^&$#', 0);
    consonantCount('aeiou AEIOU bcdfghjklmnpqrstvwxyz BCDFGHJKLMNPQRSTVWXYZ 01234567890_ ^&$#', 42);

//PSEUDOCODE: create a variable to hold the vowels and another variable, set to 0, to count the consonants, then run a for loop to iterate through the letters, if the letter is not included in the vowels variable then add 1 to the count and return the total count
*/

function consonantCount(str){
    let vowels = 'aeiouAEIOU';
    let alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let odd = str.split('').filter(x => !alpha.includes(x)).length
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(!vowels.includes(str[i])){
            count++;
        }
    }
    return count - odd;
}

console.log(consonantCount(''), 0);
console.log(consonantCount('aeiouAEIOU'), 0);
console.log(consonantCount('aaa'), 0);
console.log(consonantCount('bcdfghjklmnpqrstvwxyz'), 21);
console.log(consonantCount('bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ'), 42);
console.log(consonantCount('y'), 1);
console.log(consonantCount('Y'), 1);
console.log(consonantCount('01234567890_'), 0);
console.log(consonantCount(' ^&$#'), 0);
console.log(consonantCount('aeiou AEIOU bcdfghjklmnpqrstvwxyz BCDFGHJKLMNPQRSTVWXYZ 01234567890_ ^&$#'), 42);