/*
7 Kyu
V A P O R C O D E

Write a function that converts any sentence into a V A P O R W A V E sentence. a V A P O R W A V E sentence converts all the letters into uppercase, and adds 2 spaces between each letter (or special character) to create this V A P O R W A V E effect.

Note that spaces should be ignored in this case.

Examples
"Lets go to the movies"       -->  "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
"Why isn't my code working?"  -->  "W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?"

//PARAMETERS: a string

//RETURNS: return the string with all letters capatalized and 2 spaces between each letter or character

//EXAMPLES: 
    (vaporcode("Lets go to the movies"),"L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S");
    (vaporcode("Why isnt my code working"),"W  H  Y  I  S  N  T  M  Y  C  O  D  E  W  O  R  K  I  N  G");

//PSEUDOCODE: split the string into individual characters, filter out the spaces, then return a new string converting each letter to uppercase and adding an extra 2 spaces when you join the array
*/

function vaporcode(string){
    return string.split('').filter(x => x !== ' ').map(x => x.toUpperCase()).join('  ');
}

console.log(vaporcode("Lets go to the movies"),"L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S");
console.log(vaporcode("Why isnt my code working"),"W  H  Y  I  S  N  T  M  Y  C  O  D  E  W  O  R  K  I  N  G");