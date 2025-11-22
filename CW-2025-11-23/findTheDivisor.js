/*
7 Kyu
Find the Divisor

Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#, empty table in COBOL) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

Examples:
divisors(12) --> [2, 3, 4, 6]
divisors(25) --> [5]
divisors(13) --> "13 is prime"

///PARAMETERS: a number greater than 0

//RETURNS: an array of all the numbers that the given number is divisible by, except for 1 and itself

//EXAMPLES: 
    (divisors(15), [3, 5]);
    (divisors(12), [2, 3, 4, 6]);
    (divisors(13), "13 is prime");

//PSEUDOCODE: create a variable to hold an empty array, run a 4 loop from 2 to the given number, and check with modulous if each number is able to be divided equally into the given number, if so push to the array, then check if the array is greater than 0, if so return the array, if not, return '(num) is prime'
*/

function divisors(num){
    let arr = [];
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            arr.push(i);
        }
    }
    return arr.length > 0 ? arr : `${num} is prime`;
}

console.log(divisors(15), [3, 5]);
console.log(divisors(12), [2, 3, 4, 6]);
console.log(divisors(13), "13 is prime");
