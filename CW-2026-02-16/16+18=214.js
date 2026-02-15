/*
7 Kyu
16 + 18 = 214
For this kata you will have to forget how to add two numbers.

It can be best explained using the following meme:

Dayane Rivas adding up a sum while competing in the Guatemalan television show "Combate" in May 2016

In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

You may assume both integers are positive integers.

//PARAMETERS: two numbers

//RETURNS: The sum of the two parameters if you were not to carry over numbers in addition

//EXAMPLES: 
    (add(2, 11), 13);
    (add(0, 1), 1);
    (add(0, 0), 0);

//PSEUDOCODE: parse the numbers to strings then split into an array then reverse and join back to string
*/

function add(num1, num2){
    num1 = num1.toString().split("").reverse().join("");
    num2 = num2.toString().split("").reverse().join("");

    if(num1.length < num2.length){
        [num1, num2] = [num2, num1];
    }

    let returnString = "";
    for(let i = 0; i < num1.length; i++){
        let int1 = parseInt(num1[i]);
        let int2 = parseInt(num2[i] || 0);
        returnString = (int1 + int2).toString() + returnString;
    }
    return parseInt(returnString);
}

console.log(add(2, 11), 13);
console.log(add(0, 1), 1);
console.log(add(0, 0), 0);
console.log(add(122, 81), 1103);