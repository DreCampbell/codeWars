/*
7 Kyu
Find the Middle Element

As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

//PARAMETERS: an array of three numbers

//RETURNS: the index of the number that falls in the middle of the other two numbers

//EXAMPLES: 
    (gimme([2, 3, 1]), 0);
    (gimme([5, 10, 14]), 1);
    (gimme([2.1, 3.2, 1.4]), 0);
    (gimme([5.9, 10.4, 14.2]), 1);
    (gimme([-2, -3, -1]), 0);
    (gimme([-5, -10, -14]), 1);
    (gimme([-2, -3.2, 1]), 0);
    (gimme([-5.2, -10.6, 14]), 0);

//PSEUDOCODE: create a variable to hold the value of the middle number, then return the index of that value
*/

function gimme(triplet){
    let mid = [...triplet].sort((a, b) => a - b)[1];
    return triplet.indexOf(mid);
}


console.log(gimme([2, 3, 1]), 0);
console.log(gimme([5, 10, 14]), 1);
console.log(gimme([2.1, 3.2, 1.4]), 0);
console.log(gimme([5.9, 10.4, 14.2]), 1);
console.log(gimme([-2, -3, -1]), 0);
console.log(gimme([-5, -10, -14]), 1);
console.log(gimme([-2, -3.2, 1]), 0);
console.log(gimme([-5.2, -10.6, 14]), 0);