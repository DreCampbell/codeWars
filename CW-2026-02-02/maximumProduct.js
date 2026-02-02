/*
7 Kyu
Maximum Product

Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array. Note that the array size is at least 2 and consists a mixture of positive, negative integers and also zeroes.

Examples
[1, 2, 3] returns 6 because the maximum product is obtained from multiplying 
 
2
∗
3
=
6
 2∗3=6
[9, 5, 10, 2, 24, -1, -48] returns 50 because the maximum product is obtained from multiplying 
 
5
∗
10
=
50
 5∗10=50
[-23, 4, -5, 99, -27, 329, -2, 7, -921] returns -14 because the maximum product is obtained from multiplying 
 
−
2
∗
7
=
−
14
 −2∗7=−14

//PARAMETERS: an array of numbers

//RETURNS: the largest product possible made with two adjacent numbers

//EXAMPLES: 
    (adjacentElementsProduct([5, 8]), 40);
    (adjacentElementsProduct([1, 2, 3]), 6);
    (adjacentElementsProduct([1, 5, 10, 9]), 90);
    (adjacentElementsProduct([4, 12, 3, 1, 5]), 48);
    (adjacentElementsProduct([5, 1, 2, 3, 1, 4]), 6);

//PSEUDOCODE: iterate through the array multiplying each number to the next checking if that product is greater that the previous pair
*/

function adjacentElementsProduct(arr){
    let prodArr = [];
    for(let i = 0; i < arr.length-1; i++){
        prodArr.push(arr[i] * arr[i+1])
    }
    return Math.max(...prodArr);
}

console.log(adjacentElementsProduct([5, 8]), 40);
console.log(adjacentElementsProduct([1, 2, 3]), 6);
console.log(adjacentElementsProduct([1, 5, 10, 9]), 90);
console.log(adjacentElementsProduct([4, 12, 3, 1, 5]), 48);
console.log(adjacentElementsProduct([5, 1, 2, 3, 1, 4]), 6);