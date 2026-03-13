/*
7 Kyu
Scrolling Text

Let's create some scrolling text!

Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.

Example
scrollingText("codewars") should return:

[ "CODEWARS",
  "ODEWARSC",
  "DEWARSCO",
  "EWARSCOD",
  "WARSCODE",
  "ARSCODEW"
  "RSCODEWA",
  "SCODEWAR" ]

//PARAMETERS: a string

//RETURNS: an array with all the variations of the given string rotating through the letters

//EXAMPLES: 
    (scrollingText("abc"), ["ABC","BCA","CAB"]);

//PSEUDOCODE: create an empty array variable; then run a for loop and for each loop remove the first letter with slice() starting at i and concatinate it with using slice() on the text starting from 0 and ending at i
*/

function scrollingText(text) {
  let rotated = [];

  for (let i = 0; i < text.length; i++) {
    rotated.push((text.slice(i) + text.slice(0, i)).toUpperCase());
  }

  return rotated;
}

console.log(scrollingText("abc"), ["ABC", "BCA", "CAB"]);
