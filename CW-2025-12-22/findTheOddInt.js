/*
6 Kyu
Find the Odd Int

Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

//PARAMETERS: an array of numbers

//RETURNS: the number that occurs an odd number of times

//EXAMPLES: 
    findOdd([7], 7);
    findOdd([0], 0);
    findOdd([1,1,2], 2);
    findOdd([0,1,0,1,0], 0);
    findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1], 4);
    findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5);
    findOdd([1,1,2,-2,5,2,4,4,-1,-2,5], -1);
    findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5], 5);
    findOdd([10], 10);
    findOdd([1,1,1,1,1,1,10,1,1,1,1], 10);
    findOdd([5,4,3,2,1,5,4,3,2,10,10], 1);

//PSEUDOCODE: 
*/

function findOdd(arr){
    const count = {};
    for(const num of arr){
        count[num] = (count[num] || 0) + 1;
    }

    for(const num in count){
        if(count[num] % 2 !== 0){
            return Number(num)
        }
    }
}

    console.log(findOdd([7]), 7);
    console.log(findOdd([0]), 0);
    console.log(findOdd([1,1,2]), 2);
    console.log(findOdd([0,1,0,1,0]), 0);
    console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]), 4);
    console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]), 5);
    console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]), -1);
    console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]), 5);
    console.log(findOdd([10]), 10);
    console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1]), 10);
    console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10]), 1);