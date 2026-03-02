/*
7 Kyu
SevenAte9

Description:
Write a function that removes every lone 9 that is inbetween 7s.

"79712312" --> "7712312"
"79797"    --> "777"

//PARAMETERS: a string of numbers

//RETURNS: the string with any "9" between two "7"s removed

//EXAMPLES: 
    sevenAte9("797"), "77"
    sevenAte9("7979797"), "7777"
    sevenAte9("165561786121789797"), "16556178612178977"

//PSEUDOCODE: write a while look checkin while the string includes "797", reassign the string to replace each instance of "797" with "77", then return the reassigned string
*/

function sevenAte9(str) {
  while (str.includes("797")) {
    str = str.replace("797", "77");
  }
  return str;
}

console.log(sevenAte9("797"), "77");
console.log(sevenAte9("7979797"), "7777");
console.log(sevenAte9("165561786121789797"), "16556178612178977");
