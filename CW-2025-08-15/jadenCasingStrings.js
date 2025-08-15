/*
7 Kyu
Jaden Casing Strings

aden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

//PARAMETERS: a string

//RETURNS: return the string with the first letter of each word capitalized 

//EXAMPLES:  
    toJadenCase("most trees are blue", "Most Trees Are Blue");
    toJadenCase("How can mirrors be real if our eyes aren't real", "How Can Mirrors Be Real If Our Eyes Aren't Real");

//PSEUDOCODE: 
*/

function toJadenCase(str){
<<<<<<< HEAD
    return str.split(' ').map(x => x[0].toUpperCase() + x.slice(1)).join(' ');
=======
    return str.split(' ').map(x => x[0].toUpperCase() + x.slice(1)).join(' ')
>>>>>>> 1150f37d3c89e0d0bea67df0fe1d1d0993b2c541
}

console.log(toJadenCase("most trees are blue"), "Most Trees Are Blue");
console.log(toJadenCase("How can mirrors be real if our eyes aren't real"), "How Can Mirrors Be Real If Our Eyes Aren't Real");