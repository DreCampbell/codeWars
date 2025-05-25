/*
6 Kyu
Persistent Bugger

Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2, there are 4 multiplications)
4 --> 0 (because 4 is already a one-digit number, there is no multiplication)

//PARAMETERS: a number

//RETURNS: a single digit, multiiply the digits in the number until you get a single digit

//EXAMPLES: 
    (persistence(39),3);
    (persistence(4),0);
    (persistence(25),2);
    (persistence(999),4);

//PSEUDOCODE: create a variable for the number of times you need to multiply the digits and set it to 0, run a while loop, where the length of the number, as a string, is greater than 1, reassign the number to the string representation of the number split into an array, and reduced, then add 1 to the count, return the count
*/

function persistence(num){
    let count = 0;
    while(num.toString().length > 1){
        num = num.toString().split('').reduce((a, c) => +a * +c);
        count++;
    }
    return count;
}

console.log(persistence(39),3);
console.log(persistence(4),0);
console.log(persistence(25),2);
console.log(persistence(999),4);