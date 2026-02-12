/*
7 Kyu
Currying Functions: Multiply all Elements in an Array

To complete this Kata you need to make a function multiplyAll/multiply_all which takes an array of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.

The returned array should consist of each of the elements from the first array multiplied by the integer.

Example:

multiplyAll([1, 2, 3])(2) = [2, 4, 6];
You must not mutate the original array.

//PARAMETERS: 

//RETURNS: 

//EXAMPLES: 
    ( multiplyAll ([1,2,3]) (2) , [2,4,6], `multiplyAll ([ 1, 2, 3 ]) (2) `);
    ( multiplyAll ([1,2,3]) (1) , [1,2,3], `multiplyAll ([ 1, 2, 3 ]) (1) ` );
    ( multiplyAll ([1,2,3]) (0) , [0,0,0], `multiplyAll ([ 1, 2, 3 ]) (0) `);
    ( multiplyAll ([]) (10) , [], `multiplyAll ([]) (10) ` );

//PSEUDOCODE: 
*/

function multiplyAll(arr) {
    return function integer(n){
        let multiplied = [];
        for(let i = 0; i < arr.length; i++){
            multiplied.push(arr[i] * n);
        }
        return multiplied;
    };
}

const multiplyAll = arr => arr.map(n => n * x);

console.log( multiplyAll([1,2,3]) (2) , [2,4,6]);
console.log( multiplyAll([1,2,3]) (1) , [1,2,3]);
console.log( multiplyAll([1,2,3]) (0) , [0,0,0]);
console.log( multiplyAll([]) (10) , []);