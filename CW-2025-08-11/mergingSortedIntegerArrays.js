/*
8 Kyu
Merging sorted integer arrays (without duplicates)

Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.

//PARAMETERS: two sorted arrays

//RETURNS: the sorted arrays merged with duplicates removed

//EXAMPLES: 
    (mergeArrays([1, 3, 5], [2, 4, 6]), [1, 2, 3, 4, 5, 6]);
    (mergeArrays([2, 4, 8], [2, 4, 6]), [2, 4, 6, 8]);

//PSEUDOCODE: use concat() to join the arrays, then sort it in ascending order, then use the filter method to remove the duplicates by checking that each element in its correct index 
*/

// function mergeArrays(a, b){
//     return [...new Set(a.concat(b))].sort((n1, n2) => n1- n2);
// }

function mergeArrays(a, b){
    return a.concat(b).sort((n1, n2) => n1 - n2).filter((x, i, a) => a.indexOf(x) === i);
}

console.log(mergeArrays([1, 3, 5], [2, 4, 6]), [1, 2, 3, 4, 5, 6]);
console.log(mergeArrays([2, 4, 8], [2, 4, 6]), [2, 4, 6, 8]);