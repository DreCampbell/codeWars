/*
7 Kyu
Beginner Series #3 Sum of Numbers

Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
Your function should only return a number, not the explanation about how you get that number.

*/

function getSum(n1, n2){
    let sum = 0;
    let nums = [n1,n2].sort((a, b) => a - b);
   if(n1 === n2){
    return n1;
   }else{
    for(let i = nums[0]; i <= nums[1]; i++){
        sum += i;
    }
   }
   return sum;
}