/*
7 Kyu
Are the Numbers in Order?

In this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers are in ascending order. An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.

For the purposes of this Kata, you may assume that all inputs are valid, i.e. arrays containing only integers.

Note that an array of 0 or 1 integer(s) is automatically considered to be sorted in ascending order since all (zero) adjacent pairs of integers satisfy the condition that the left integer does not exceed the right integer in value.

For example:

inAscOrder([1,2,4,7,19]); // returns true
inAscOrder([1,2,3,4,5]); // returns true
inAscOrder([1,6,10,18,2,4,20]); // returns false
inAscOrder([9,8,7,6,5,4,3,2,1]); // returns false because the numbers are in DESCENDING order
N.B. If your solution passes all fixed tests but fails at the random tests, make sure you aren't mutating the input array.

//PARAMETERS: an array of numbers

//RETURNS: a boolean, true if the array is in ascending order

//EXAMPLES: 
    (inAscOrder([1, 2, 4, 7, 19]), true, [1, 2, 4, 7, 19]);
    (inAscOrder([1, 2, 3, 4, 5]), true, [1, 2, 3, 4, 5]);
    (inAscOrder([1, 6, 10, 18, 2, 4, 20]), false, [1, 6, 10, 18, 2, 4, 20]);
    (inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1]), false, [9, 8, 7, 6, 5, 4, 3, 2, 1]);

//PSEUDOCODE: write a conditional stating that the array sorted with the sort method is equal to the given array
*/

function inAscOrder(arr){
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < arr[i-1]){
            return false;
        }
    }return true;
}

console.log(inAscOrder([5, 4, 3, 2, 1]), false, [5, 4, 3, 2, 1]);
console.log(inAscOrder([1, 2, 4, 7, 19]), true, [1, 2, 4, 7, 19]);
console.log(inAscOrder([1, 2, 3, 4, 5]), true, [1, 2, 3, 4, 5]);
console.log(inAscOrder([1, 6, 10, 18, 2, 4, 20]), false, [1, 6, 10, 18, 2, 4, 20]);
console.log(inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1]), false, [9, 8, 7, 6, 5, 4, 3, 2, 1]);