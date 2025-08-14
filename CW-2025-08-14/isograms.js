/*
7 Kyu
Isograms

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)

//PARAMETERS: a string

//RETURNS: a boolean, true if the string contains no duplicated letters, not case sensitive

//EXAMPLES: 
    (isIsogram("Dermatoglyphics"), true);
    (isIsogram("isogram"), true);
    (isIsogram("aba"), false);
    (isIsogram("moOse"), false);
    (isIsogram("isIsogram"), false);
    (isIsogram(""), true);

//PSEUDOCODE: parse the string to all lowercase
*/

function isIsogram(str){
    let iso = str.toLowerCase().split('').filter((x, i, a) => a.indexOf(x) === i).join('');
    return str.toLowerCase() === iso;
}

console.log(isIsogram("Dermatoglyphics"), true);
console.log(isIsogram("isogram"), true);
console.log(isIsogram("aba"), false);
console.log(isIsogram("moOse"), false);
console.log(isIsogram("isIsogram"), false);
console.log(isIsogram(""), true);
