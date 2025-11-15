/*
7 Kyu
Binary Addition

Description:
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

//PARAMETERS: two numbers

//RETURNS: the binary of the sum of the two given numbers

//EXAMPLES: 
    (addBinary(1,1), "10");
    (addBinary(0,1), "1");
    (addBinary(1,2), "11");
    (addBinary(51,12), "111111");
    (addBinary(100,0), "1100100");

//PSEUDOCODE: add the numbers to get a sum, then use the toString method with the radix of 2
*/

function addBinary(a,b){
    return (a+b).toString(2);
}

console.log(addBinary(1,1), "10");
console.log(addBinary(0,1), "1");
console.log(addBinary(1,2), "11");
console.log(addBinary(51,12), "111111");
console.log(addBinary(100,0), "1100100");