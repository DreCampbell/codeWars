/*
7 Kyu
Smallest Value of an Array

Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

Some examples:

([1,2,3,4,5], "value") should return 1
([1,2,3,4,5], "index") should return 0

//PARAMETERS: an array and whether to return a value or an index

//RETURNS: a value, or the index of the smallest number in the array

//EXAMPLES: 
    min([1,2,3,4,5], 'value', 1);
    min([1,2,3,4,5], 'index', 0);
    min([500,250,750,5000,1000,230], 'value', 230);
    min([500,250,750,5000,1000,230], 'index', 5);
    min([750,50000,10,50], 'value', 10);
    min([750,50000,10,50], 'index', 2);

//PSEUDOCODE: write a conditional if the second paramater is "value", use Math.min() to get the smallest value, else use the indexOf() method to get the index of the number returned from the Math.min()
*/

function min(arr, toReturn){
    return toReturn === 'value' ? Math.min(...arr) : arr.indexOf(Math.min(...arr));
}

console.log(min([1,2,3,4,5], 'value'), 1);
console.log(min([1,2,3,4,5], 'index'), 0);
console.log(min([500,250,750,5000,1000,230], 'value'), 230);
console.log(min([500,250,750,5000,1000,230], 'index'), 5);
console.log(min([750,50000,10,50], 'value'), 10);
console.log(min([750,50000,10,50], 'index'), 2);