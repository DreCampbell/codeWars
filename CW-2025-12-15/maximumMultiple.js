/*
7 Kyu
Maximum Multiple

Given a Divisor and a Bound , Find the largest integer N , Such That ,

Conditions :
N is divisible by divisor

N is less than or equal to bound

N is greater than 0.

Notes
The parameters (divisor, bound) passed to the function are only positive values .
It's guaranteed that a divisor is Found .
Input >> Output Examples
divisor = 2, bound = 7 ==> return (6)
Explanation:
(6) is divisible by (2) , (6) is less than or equal to bound (7) , and (6) is > 0 .

divisor = 10, bound = 50 ==> return (50)
Explanation:
(50) is divisible by (10) , (50) is less than or equal to bound (50) , and (50) is > 0 .*

divisor = 37, bound = 200 ==> return (185)
Explanation:
(185) is divisible by (37) , (185) is less than or equal to bound (200) , and (185) is > 0 .

//PARAMETERS: two numbers, a divisor and a bound

//RETURNS: the largest number that is both divisible by the divisor and less than the bound

//EXAMPLES: 
    (maxMultiple(2,7),6);
    (maxMultiple(3,10),9);
    (maxMultiple(7,17),14);
    (maxMultiple(10,50),50);
    (maxMultiple(37,200),185);
    (maxMultiple(7,100),98);

//PSEUDOCODE: use the Number.isInteger() method to check if the bound is divisible by the divisor, if so return the bound, if not take that number and round down, then multiply it by the divisor
*/

function maxMultiple(divisor, bound){
    let num = (bound/divisor);
    return Number.isInteger(num) ? bound : Math.floor(num) * divisor;
}

console.log(maxMultiple(2,7),6);
console.log(maxMultiple(3,10),9);
console.log(maxMultiple(7,17),14);
console.log(maxMultiple(10,50),50);
console.log(maxMultiple(37,200),185);
console.log(maxMultiple(7,100),98);
