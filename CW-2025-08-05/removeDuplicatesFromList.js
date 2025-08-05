/*
8 Kyu
Remove Duplicates from List

Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

The order of the sequence has to stay the same.

Examples:

Input -> Output
[1, 1, 2] -> [1, 2]
[1, 2, 1, 1, 3, 2] -> [1, 2, 3]

//PARAMETERS: an array of positive numbers

//RETURNS: return the array with any duplicates removed

//EXAMPLES: 
    (distinct([1]), [1]);
    (distinct([1,2]), [1,2]);
    (distinct([1,1,2]), [1,2]);

//PSEUDOCODE: filter through the array and with the indexOf method check if each index of an element is equal to the index
*/

function distinct(a){
    return a.filter((x, i) => a.indexOf(x) == i);
}

console.log(distinct([1]), [1]);
console.log(distinct([1,2]), [1,2]);
console.log(distinct([1,1,2]), [1,2]);