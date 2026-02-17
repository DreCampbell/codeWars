/*
7 Kyu
Palindrome Chain Length

Number is a palindrome if it is equal to the number with digits in reversed order. For example, 5, 44, 171, 4884 are palindromes, and 43, 194, 4773 are not.

Write a function which takes a positive integer and returns the number of special steps needed to obtain a palindrome. The special step is: "reverse the digits, and add to the original number". If the resulting number is not a palindrome, repeat the procedure with the sum until the resulting number is a palindrome.

If the input number is already a palindrome, the number of steps is 0.

All inputs are guaranteed to have a final palindrome which does not overflow MAX_SAFE_INTEGER.

Example
For example, start with 87:

  87 +   78 =  165     - step 1, not a palindrome
 165 +  561 =  726     - step 2, not a palindrome
 726 +  627 = 1353     - step 3, not a palindrome
1353 + 3531 = 4884     - step 4, palindrome!
4884 is a palindrome and we needed 4 steps to obtain it, so answer for 87 is 4.

//PARAMETERS: a positive number

//RETURNS: the number of steps it takes to return a palindrome by reversing the digits and adding to the original number

//EXAMPLES: 
    (palindromeChainLength(1),  0);
    (palindromeChainLength(88), 0);
    (palindromeChainLength(87), 4);
    (palindromeChainLength(89), 24);
    (palindromeChainLength(10), 1);

//PSEUDOCODE: create a steps variable and set it to 0, then run a while loop that checks while the given number is not equal to the number 'reversed' (parsed to a string, split to an array, reversed, joined back to a string, then parsed back to a number), then add 1 to the step counter and reassign the number to the number added to its reversed number
*/

function palindromeChainLength(n){
    let steps = 0;
    while(n !== +String(n).split('').reverse().join('')){
        steps += 1;
        n = n + +String(n).split('').reverse().join('');
    }
    return steps;
}

console.log(palindromeChainLength(1),  0)
console.log(palindromeChainLength(88), 0);
console.log(palindromeChainLength(87), 4)
console.log(palindromeChainLength(89), 24)
console.log(palindromeChainLength(10), 1)