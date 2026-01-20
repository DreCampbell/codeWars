/*
7 Kyu
Fizz Buzz

Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
N will never be less than 1.

Method calling example:

fizzbuzz(3) -->  [1, 2, "Fizz"]

//PARAMETERS: a number, n

//RETURNS: an array of numbers from 1 to n, any multiple of 3 replace with 'Fizz', any multiple of 5 replace with 'Buzz', and multiple of 3 and 5 replace with 'FizzBuzz'

//EXAMPLES: 
    fizzbuzz(3) -->  [1, 2, "Fizz"]
    fizzbuzz(5) -->  [1, 2, "Fizz", 4, "Buzz"]
    fizzbuzz(15) -->  [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]

///PSEUDOCODE: create a variable to hold an empty array, run a for loop from 1 to n, within the for loop set the various conditions using modulus
*/

function fizzbuzz(n){
    let arr = [];
    for(let i = 1; i <= n; i++){
        if(i % 3 === 0 && i % 5 === 0){
            arr.push("FizzBuzz");
        }else if(i % 3 === 0){
            arr.push('Fizz');
        }else if(i % 5 === 0){
            arr.push("Buzz");
        }else{
            arr.push(i);
        }
    }
    return arr;
}

console.log(fizzbuzz(3), [1, 2, "Fizz"])
console.log(fizzbuzz(5), [1, 2, "Fizz", 4, "Buzz"])
console.log(fizzbuzz(15), [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"])