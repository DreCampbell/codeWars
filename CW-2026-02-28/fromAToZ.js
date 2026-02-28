/*
7 Kyu
From A to Z

Given a string indicating a range of letters, return a string which includes all the letters in that range, including the last letter.
Note that if the range is given in capital letters, return the string in capitals also!

Examples
"a-z" ➞ "abcdefghijklmnopqrstuvwxyz"
"h-o" ➞ "hijklmno"
"Q-Z" ➞ "QRSTUVWXYZ"
"J-J" ➞ "J"
Notes
A hyphen will separate the two letters in the string.
You don't need to worry about error handling in this kata (i.e. both letters will be the same case and the second letter will not be before the first alphabetically).

//PARAMETERS: a string indicating a range of letter in the alphabet

//RETURNS: the indicated range of letters

//EXAMPLES: 
    (gimmeTheLetters('Q-Z'), 'QRSTUVWXYZ',       `'Q-Z'`)
    (gimmeTheLetters('F-O'), 'FGHIJKLMNO',       `'F-O'`)
    (gimmeTheLetters('C-R'), 'CDEFGHIJKLMNOPQR', `'C-R'`)
    (gimmeTheLetters('h-o'), 'hijklmno',          `'h-o'`)
    (gimmeTheLetters('e-k'), 'efghijk',           `'e-k'`)
    (gimmeTheLetters('a-q'), 'abcdefghijklmnopq', `'a-q'`)

//PSEUDOCODE: create a variable to hold the alphabet in both cases, then variables to hold the index of the start and the end of the letter range, then split the alphabet index into an array and use the slice method to get the letters in the start and end index
*/

function gimmeTheLetters(sp) {
  let alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let start = alpha.indexOf(sp[0]);
  let end = alpha.indexOf(sp[2]);
  return alpha
    .split("")
    .slice(start, end + 1)
    .join("");
}

console.log(gimmeTheLetters("Q-Z"), "QRSTUVWXYZ", `'Q-Z'`);
console.log(gimmeTheLetters("F-O"), "FGHIJKLMNO", `'F-O'`);
console.log(gimmeTheLetters("C-R"), "CDEFGHIJKLMNOPQR", `'C-R'`);
console.log(gimmeTheLetters("h-o"), "hijklmno", `'h-o'`);
console.log(gimmeTheLetters("e-k"), "efghijk", `'e-k'`);
console.log(gimmeTheLetters("a-q"), "abcdefghijklmnopq", `'a-q'`);
