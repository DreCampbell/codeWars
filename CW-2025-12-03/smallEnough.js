/*
7 Kyu
Small Enough? - Beginner

You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.

//PARAMETERS: an array and a limit value

//RETURNS: true if all the elements in the array are less than or equal to the limit

//EXAMPLES: 
    (smallEnough([66, 101], 200), true);
    (smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100), false);
    (smallEnough([101, 45, 75, 105, 99, 107], 107), true);
    (smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120), true);

//PSEUDOCODE: use the every method to check that every element meets the criteria of being below or equal to the limit
*/

function smallEnough(a, limit){
    return a.every(x => x <= limit);
}

console.log(smallEnough([66, 101], 200), true);
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100), false);
console.log(smallEnough([101, 45, 75, 105, 99, 107], 107), true);
console.log(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120), true);