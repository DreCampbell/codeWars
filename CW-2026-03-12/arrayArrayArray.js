/*
7 Kyu
Array Array Array

You are given an initial 2-value array (x). You will use this to calculate a score.

If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number. If neither is a number, return 'Void!'.

Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.

For example:

if (x) == ['a', 3]  you should return [['a', 3], ['a', 3], ['a', 3]].
 
//PARAMETERS: an array of two elements, either both numbers, one number or no numbers

//RETURNS: an array of the given array x number of times where x is the sum of numbers in the array

//EXAMPLES: 
    (explode([9, 3]), [[9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3]]);
    (explode(['a', 3]), [['a', 3], ['a', 3], ['a', 3]] ); 
    (explode([6, 'c']), [[6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c']]); 
    (explode(['a', 'b']), 'Void!');  
    (explode(["a", 0]), []); 

//PSEUDOCODE: 
*/

function explode(x) {
  let [a, b] = x;

  if (typeof a == "number" && typeof b == "number")
    return new Array(a + b).fill(x);
  else if (typeof a == "number") return new Array(a).fill(x);
  else if (typeof b == "number") return new Array(b).fill(x);

  return "Void!";
}

console.log(explode([9, 3]), [
  [9, 3],
  [9, 3],
  [9, 3],
  [9, 3],
  [9, 3],
  [9, 3],
  [9, 3],
  [9, 3],
  [9, 3],
  [9, 3],
  [9, 3],
  [9, 3],
]);
console.log(explode(["a", 3]), [
  ["a", 3],
  ["a", 3],
  ["a", 3],
]);
console.log(explode([6, "c"]), [
  [6, "c"],
  [6, "c"],
  [6, "c"],
  [6, "c"],
  [6, "c"],
  [6, "c"],
]);
console.log(explode(["a", "b"]), "Void!");
console.log(explode(["a", 0]), []);
