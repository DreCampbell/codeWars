/*
8 Kyu
Return Negative

Description:
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12

//PARAMETERS: a number which could be positive or already negative

//RETURNS: the number as a negative

//EXAMPLES: 
    (makeNegative(42), -42)

//PSEUDOCODE: use Math.abs() to get the absolute of the number then put a minus sign in front of it
*/

function makeNegative(num){
    return -Math.abs(num);
}

console.log(makeNegative(42), -42)