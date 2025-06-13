/*
8 Kyu
Age Range Compatibility Equation

Description:
Everybody knows the classic "half your age plus seven" dating rule that a lot of people follow (including myself). It's the 'recommended' age range in which to date someone.

Min
=
Age
2
+
7
Min= 
2
Age
​
 +7

Max
=
2
⋅
(
Age - 7
)
Max=2⋅(Age - 7)

Minimum age
≤
Your age
≤
Maximum age
Minimum age≤Your age≤Maximum age

Task
Given an integer (1 <= n <= 100) representing a person's age, return their minimum and maximum age range.

This equation doesn't work when the age <= 14, so if the age <= 14, use this equation instead:

min = age - 0.10 * age
max = age + 0.10 * age
You should floor all your answers so that an integer is given instead of a float (which doesn't represent age). Return your answer in the form "[min]-[max]"

Examples:
age = 27   =>   "20-40"
age = 5    =>   "4-5"
age = 17   =>   "15-20"

//PARAMETERS: a number between 1 & 100

//RETURNS: based on an equation return an age range

//EXAMPLES: 
  (datingRange(17), "15-20")
  (datingRange(40), "27-66")
  (datingRange(15), "14-16")
  (datingRange(35), "24-56")
  (datingRange(10), "9-11")

//PSEUDOCODE: create variables for the min and max ages, and within those variables run the equations from the age
*/

function datingRange(age){
    let min = Math.floor((age/2) + 7);
    let max = Math.floor((age - 7) * 2);
    if(age <= 14){
        min = Math.floor(age - (.10 * age))
        max = Math.floor(age + (.10 * age))
    }
    return `${min}-${max}`;
}

console.log(datingRange(17), "15-20")
console.log(datingRange(40), "27-66")
console.log(datingRange(15), "14-16")
console.log(datingRange(35), "24-56")
console.log(datingRange(10), "9-11")