/*
6 Kyu
Multiples of 3 or 5

f we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If a number is a multiple of both 3 and 5, only count it once.

//PARAMETERS: a number

//RETURNS: the sum of all digits between 0 and the given number that are multiples of 3 or 5

//EXAMPLES: 
    solution(10,23)

//PSEUDOCODE: create an array variable to hold the numbers that are multiples of 3 or 5, create a for loop from 0 to num and push numbers that are a multiple of 3 or 5 into the array, then use the reduce method to get the sum 
*/

function solution(number){
    let multiples = [];
    for(let i = 0; i < number; i++){
        if(i % 3 == 0 || i % 5 == 0){
            multiples.push(i)
        }
    }
    return multiples.reduce((a, b) => a + b, 0);
}

console.log(solution(10), 23)