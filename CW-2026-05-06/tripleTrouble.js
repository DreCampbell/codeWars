/*
8 Kyu
Triple Trouble

Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

Note: You can expect all of the inputs to be the same length.

//PARAMETERS: three strings of equal lengths

//RETURNS: the strings combined so each letter of the same index is next to each other

//EXAMPLES: 
    (tripleTrouble("aaa","bbb","ccc"), "abcabcabc");
    (tripleTrouble("aaaaaa","bbbbbb","cccccc"), "abcabcabcabcabcabc");
    (tripleTrouble("burn", "reds", "roll"), "brrueordlnsl");
    (tripleTrouble("Sea","urn","pms"), "Supermans"); 
    (tripleTrouble("LLh","euo","xtr"), "LexLuthor");

//PSEUDOCODE: create an empty string variable; then run a for loop the length of the first parameter, within the for loop add a letter for each index from each of the parameters to the variable, then retun the variable
*/

function tripleTrouble(one, two, three) {
  let str = "";
  for (let i = 0; i < one.length; i++) {
    str += one[i];
    str += two[i];
    str += three[i];
  }
  return str;
}

console.log(tripleTrouble("aaa", "bbb", "ccc"), "abcabcabc");
console.log(tripleTrouble("aaaaaa", "bbbbbb", "cccccc"), "abcabcabcabcabcabc");
console.log(tripleTrouble("burn", "reds", "roll"), "brrueordlnsl");
console.log(tripleTrouble("Sea", "urn", "pms"), "Supermans");
console.log(tripleTrouble("LLh", "euo", "xtr"), "LexLuthor");
