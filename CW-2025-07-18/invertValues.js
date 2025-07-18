/*
8 Kyu
Invert Values

Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

[1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
[1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
[] --> []
You can assume that all values are integers. Do not mutate the input array.

//PARAMETERS: an array of pos and neg number

//RETURNS: return a new array inverting the values from pos to neg and neg to pos

//EXAMPLES: 
    (invert([1,2,3,4,5])), [-1,-2,-3,-4,-5]);
    (invert([1,-2,3,-4,5])), [-1,2,-3,4,-5]);
    (invert([])), []);
    (invert([0])), [0]);

//PSEUDOCODE: create a variable and store an empty array in it, loop through the given array multiplying each number by -1 then pushing that number to the variable array, then return that variable
*/

function invert(arr){
    let invertedArr = [];
    for(let i = 0; i < arr.length; i++){
        invertedArr.push(arr[i] * -1)
    }
    return invertedArr;
}

console.log(invert([1,2,3,4,5]), [-1,-2,-3,-4,-5]);
console.log(invert([1,-2,3,-4,5]), [-1,2,-3,4,-5]);
console.log(invert([]), []);
console.log(invert([0]), [0]);