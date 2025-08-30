/*
7 Kyu
Digits Explosion

Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

Examples
"312" should return "333122"
"102269" should return "12222666666999999999"

//PARAMETERS: a numbered string

//RETURNS: return the string with each number repeated the numbers value

//EXAMPLES: 
    explode(["312", "333122"])
    explode(["102269", "12222666666999999999"])
    explode(["0", ""])
    explode(["000", ""])
    explode(["123", "122333")]


//PSEUDOCODE: 
*/

function explode(s){
    return s[0].split('').map(x => x.repeat(+x)).join('');
}

console.log(explode("312"), "333122")
console.log(explode("102269"), "12222666666999999999")
console.log(explode("0"), "")
console.log(explode("000"), "")
console.log(explode("123"), "122333")