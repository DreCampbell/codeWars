/*
8 Kyu
Removing Elements

Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!

//PARAMETERS: an array of elements

//RETURNS: return an array with every other element removed

//EXAMPLES: 
    (removeEveryOther(['Hello', 'Goodbye', 'Hello Again']),['Hello', 'Hello Again']);
    (removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),[1, 3, 5, 7, 9]);
    (removeEveryOther([[1, 2]]), [[1, 2]]);
    (removeEveryOther([['Goodbye'], {'Great': 'Job'}]),[['Goodbye']]);

//PSEUDOCODE: filter through the array and remove each element with an odd index
*/

function removeEveryOther(arr){
    return arr.filter((x, i) => i % 2 === 0);
}

console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']),['Hello', 'Hello Again']);
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),[1, 3, 5, 7, 9]);
console.log(removeEveryOther([[1, 2]]), [[1, 2]]);
console.log(removeEveryOther([['Goodbye'], {'Great': 'Job'}]),[['Goodbye']]);