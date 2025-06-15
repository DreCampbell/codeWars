/*
8 Kyu
You Only Need One - Beginner

Description:
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

a can contain numbers or strings. x can be either.

Return true if the array contains the value, false if not.

//PARAMETERS: an array and a second parameter

//RETURNS: true if the second parameter appears in the array

//EXAMPLES: 
    (check([66, 101], 66), true);
    (check([101, 45, 75, 105, 99, 107], 107), true);
    (check(['t', 'e', 's', 't'], 'e'), true);
    (check(['what', 'a', 'great', 'kata'], 'kat'), false);

//PSEUDOCODE: use the includes method to check if the given parameter is in the array parameter
*/

function check(a, x){
    return a.includes(x);
}

console.log(check([66, 101], 66), true);
console.log(check([101, 45, 75, 105, 99, 107], 107), true);
console.log(check(['t', 'e', 's', 't'], 'e'), true);
console.log(check(['what', 'a', 'great', 'kata'], 'kat'), false);