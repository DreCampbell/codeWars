/*
7 Kyu 
Reverse Words

Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

function reverseWords(str){
    return str.split(' ')
    .map(word => word.split('')
    .reverse()
    .join(''))
    .join(' ');
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god', `Input: "The quick brown fox jumps over the lazy dog."`);
console.log(reverseWords('apple'), 'elppa', `Input: "apple"`);
console.log(reverseWords('a b c d'), 'a b c d', `Input: "a b c d"`);
console.log(reverseWords('  double  spaced  words  '), '  elbuod  decaps  sdrow  ', `Input: "  double  spaced  words  "`);
