/*
7 Kyu
Hells Kitchen

Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.

Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.

Rules:

Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A' should become '@', Any other vowel should become '*'.

//PARAMETERS: a string of 4 words

//RETURNS: capitalized all letters, change any instance of "a" or "A" to "@", any other vowel to a "*", and end the string with "!!!!"

//EXAMPLES: 
    (gordon('What feck damn cake'), 'WH@T!!!! F*CK!!!! D@MN!!!! C@K*!!!!');
    (gordon('are you stu pid'), '@R*!!!! Y**!!!! ST*!!!! P*D!!!!'); 
    (gordon('i am a chef'), '*!!!! @M!!!! @!!!! CH*F!!!!');    

//PSEUDOCODE: create a variable to hold all vowels excluding "A",
*/

function gordon(a) {
  let vowels = "EIOU";

  return a
    .toUpperCase()
    .split("")
    .map((x) => (x === "A" ? "@" : vowels.includes(x) ? "*" : x))
    .join("")
    .split(" ")
    .map((x) => x + "!!!! ")
    .join("")
    .trim();
}

console.log(
  gordon("What feck damn cake"),
  "WH@T!!!! F*CK!!!! D@MN!!!! C@K*!!!!",
);
console.log(gordon("are you stu pid"), "@R*!!!! Y**!!!! ST*!!!! P*D!!!!");
console.log(gordon("i am a chef"), "*!!!! @M!!!! @!!!! CH*F!!!!");
