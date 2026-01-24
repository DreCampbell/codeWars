/*
7 Kyu
Sorted? Yes? No? How?

Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
The order does not have to be strict: a sorted array can contain consecutive duplicates, e.g. [1, 1, 2, 3] is sorted in ascending order.

It is guaranteed that there will always be a unique valid answer. More precisely:

there will be no arrays with less than 2 elements
there will be no arrays where all elements are equal

//PARAMETERS: an array of numbers

//RETURNS: a string, yes or no if the numbers in the array are sorted and if yes ascending or descending

//EXAMPLES: 
    (isSortedAndHow([1, 3, 9, 4]), 'no');
    (isSortedAndHow([4, 3, 1, 9]), 'no');
    (isSortedAndHow([1, 2]), 'yes, ascending');
    (isSortedAndHow([2, 1]), 'yes, descending');
    (isSortedAndHow([1, 2, 3, 4]), 'yes, ascending');
    (isSortedAndHow([1, 1, 2, 3]), 'yes, ascending');
    (isSortedAndHow([1, 2, 3, 3]), 'yes, ascending');
    (isSortedAndHow([4, 3, 2, 1]), 'yes, descending');
    (isSortedAndHow([3, 3, 2, 1]), 'yes, descending');
    (isSortedAndHow([3, 2, 1, 1]), 'yes, descending');

//PSEUDOCODE: create 2 variables to hold the array in ascending order and descending order, then write a conditional checking if the string is ascending, desending or not at all and reply with the correct string: "yes, ascending", "yes, descending", or "no"
*/

function isSortedAndHow(arr){
    let originalArr = [...arr];
    let ascending = [...arr.sort((a, b) => a - b)];
    let descending = [...arr.sort((a, b) => b - a)];
    
    return originalArr.join() === ascending.join() ? "yes, ascending" : originalArr.join() === descending.join() ? "yes, descending" : "no";
}

// console.log(isSortedAndHow([1, 3, 9, 4]), 'no');
console.log(isSortedAndHow([4, 3, 1, 9]), 'no');
console.log(isSortedAndHow([1, 2]), 'yes, ascending');
console.log(isSortedAndHow([2, 1]), 'yes, descending');
// console.log(isSortedAndHow([1, 2, 3, 4]), 'yes, ascending');
// console.log(isSortedAndHow([1, 1, 2, 3]), 'yes, ascending');
// console.log(isSortedAndHow([1, 2, 3, 3]), 'yes, ascending');
// console.log(isSortedAndHow([4, 3, 2, 1]), 'yes, descending');
// console.log(isSortedAndHow([3, 3, 2, 1]), 'yes, descending');
// console.log(isSortedAndHow([3, 2, 1, 1]), 'yes, descending');
 