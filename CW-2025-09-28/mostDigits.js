/*
7 Kyu
Most Digits

Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.

//PARAMETERS: an array of numbers

/RETURNS: the number with the most digits

//EXAMPLES: 
    (findLongest([1, 10, 100]), 100)
    (findLongest([9000, 8, 800]), 9000)
    (findLongest([8, 900, 500]), 900)

//PSEUDOCODE: 
*/

function findLongest(array){
    return array.reduce((a, b) => (`${b}`.length > `${a}`.length) ? b : a);
}

console.log(findLongest([1, 10, 100]), 100)
console.log(findLongest([9000, 8, 800]), 9000)
console.log(findLongest([8, 900, 500]), 900)
