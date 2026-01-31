/*
7 Kyu
Find the Vowels

We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

So given a string "super", we should return a list of [2, 4].

Some examples:
Mmmm  => []
Super => [2,4]
Apple => [1,5]
YoMama -> [1,2,4,6]
NOTES
Vowels in this context refers to: a e i o u y (including upper case)
This is indexed from [1..n] (not zero indexed!)

//PARAMETERS: a string

//RETURNS: an array of the indices of each vowel in the string

//EXAMPLES: 
    (vowelIndices("mmm"), []);
    (vowelIndices("apple"), [1,5]);
    (vowelIndices("super"), [2,4]);
    (vowelIndices("orange"), [1,3,6]);
    (vowelIndices("supercalifragilisticexpialidocious"), [2,4,7,9,12,14,16,19,21,24,25,27,29,31,32,33]);

//PSEUDOCODE: create a variable to hold an empty array, and another variable holding the vowels, loop through the string checking if each letter is contained in the vowels variable, and if so return the indice plus 1
*/

function vowelIndices(word){
    let vowels = 'aeiouyAEIOUY';
    let arr = [];
    for(let i = 0; i < word.length; i++){
        if(vowels.includes(word[i])){
            arr.push(i + 1)
        }
    }
    return arr;
}

console.log(vowelIndices("mmm"), []);
console.log(vowelIndices("apple"), [1,5]);
console.log(vowelIndices("super"), [2,4]);
console.log(vowelIndices("orange"), [1,3,6]);
console.log(vowelIndices("supercalifragilisticexpialidocious"), [2,4,7,9,12,14,16,19,21,24,25,27,29,31,32,33]);
