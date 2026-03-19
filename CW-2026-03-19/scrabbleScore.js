/*
7 Kyu
Scrabble Score

Write a program that, given a word, computes the scrabble score for that word.

Letter Values
You'll need these:

Letter                           Value
A, E, I, O, U, L, N, R, S, T       1
D, G                               2
B, C, M, P                         3
F, H, V, W, Y                      4
K                                  5
J, X                               8
Q, Z                               10
There will be a preloaded hashtable $dict with all these values: $dict["E"] == 1.

Examples
"cabbage" --> 14
"cabbage" should be scored as worth 14 points:

3 points for C
1 point for A, twice
3 points for B, twice
2 points for G
1 point for E
And to total:

3 + 2*1 + 2*3 + 2 + 1 = 3 + 2 + 6 + 3 = 14

Empty string should return 0. The string can contain spaces and letters (upper and lower case), you should calculate the scrabble score only of the letters in that string.

""           --> 0
"STREET"    --> 6
"st re et"    --> 6
"ca bba g  e" --> 14

//PARAMETERS: a string

//RETURNS: return a number which is the sum of the score for each letter

//EXAMPLES: 
    scrabbleScore("", 0); 
    scrabbleScore('a', 1);
    scrabbleScore("street", 6);
    scrabbleScore(' a', 1);
    scrabbleScore('f', 4);
    scrabbleScore("quirky", 22)
    scrabbleScore("MULTIBILLIONAIRE", 20);
    scrabbleScore("st re et", 6);
    scrabbleScore("alacrity", 13);

//PSEUDOCODE: split the string into an array of individual letters, map through the array, use conditionals to change each letter to the correct score, then use reduce to get the sum
*/

function scrabbleScore(str) {
  return str
    .toUpperCase()
    .split("")
    .map((x) => {
      if ("A,E,I,O,U,L,N,R,S,T".includes(x)) {
        return 1;
      } else if ("D,G".includes(x)) {
        return 2;
      } else if ("B,C,M,P".includes(x)) {
        return 3;
      } else if ("F,H,V,W,Y".includes(x)) {
        return 4;
      } else if ("K".includes(x)) {
        return 5;
      } else if ("J,X".includes(x)) {
        return 8;
      } else if ("Q,Z".includes(x)) {
        return 10;
      } else {
        return 0;
      }
    })
    .reduce((a, b) => a + b, 0);
}

console.log(scrabbleScore(""), 0);
console.log(scrabbleScore("a"), 1);
console.log(scrabbleScore("street"), 6);
console.log(scrabbleScore(" a"), 1);
console.log(scrabbleScore("f"), 4);
console.log(scrabbleScore("quirky"), 22);
console.log(scrabbleScore("MULTIBILLIONAIRE"), 20);
console.log(scrabbleScore("st re et"), 6);
console.log(scrabbleScore("alacrity"), 13);
