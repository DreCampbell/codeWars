/*
8 Kyu
Abbreviate a Two Word Name

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F

//PARAMETERS: a two word/name string

//RETURNS: return the first letter of each name capitalized, separated by a '.'

//EXAMPLES: 
    (abbrevName("Sam Harris"), "S.H");
    (abbrevName("Patrick Feenan"), "P.F");
    (abbrevName("Evan Cole"), "E.C");
    (abbrevName("P Favuzzi"), "P.F");
    (abbrevName("David Mendieta"), "D.M");

//PSEUDOCODE: Capitalize the string, split the string into an array of two strings, then use map to iterate through each word returning only the first letter, then use join to join the array into a string, separated by a '.' 
*/

function abbrevName(name){
    return name.toUpperCase().split(' ').map(x => x[0]).join('.');
}

console.log(abbrevName("Sam Harris"), "S.H");
console.log(abbrevName("Patrick Feenan"), "P.F");
console.log(abbrevName("Evan Cole"), "E.C");
console.log(abbrevName("P Favuzzi"), "P.F");
console.log(abbrevName("David Mendieta"), "D.M");