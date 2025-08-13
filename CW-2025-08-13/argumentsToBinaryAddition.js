/*
8 Kyu
Arguments to Binary Addition

Given an array add all the number elements and return the binary equivalent of that sum; to make the code bullet proof anything else than a number should be added as 0 since it can't be added.

If your language can handle float binaries assume the array won't contain float or doubles.

arr2bin([1,2]) == '11'
arr2bin([1,2,'a']) == '11'
arr2bin([]) == '0'

NOTE: NaN is a number too in javascript for decimal, binary and n-ary base

//PARAMETERS: an array, could or could not have numbers

//RETURNS: return the binary equivalent of the sum of only the numbers

//EXAMPLES: 
    (arr2bin([1,2]), "11")
    (arr2bin([1,2,3,4,5]), "1111")
    (arr2bin([1,10,100,1000]), "10001010111")
    (arr2bin([null]), "0")
    (arr2bin([true,true,false,15]),"1111")

//PSEUDOCODE: filter out anything that is not a number, then get the sum of the numbers then use toString() with a radix of 2 to get the binary
*/

function arr2bin(arr){
    return arr.filter(x => typeof x === 'number').reduce((a, b) => a + b, 0).toString(2);
}

console.log(arr2bin([1,2]), "11")
console.log(arr2bin([1,2,3,4,5]), "1111")
console.log(arr2bin([1,10,100,1000]), "10001010111")
console.log(arr2bin([null]), "0")
console.log(arr2bin([true,true,false,15]),"1111")