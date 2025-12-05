/*
7 Kyu
Leap Years

In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:

Years divisible by 4 are leap years,
but years divisible by 100 are not leap years,
but years divisible by 400 are leap years.
Tested years are in range 1600 ≤ year ≤ 4000.

//PARAMETERS: a number, representing a year

//RETURNS: true if the given year is a leap year

//EXAMPLES: 
    (isLeapYear(2020), true)
    (isLeapYear(2000), true)
    (isLeapYear(2015), false)
    (isLeapYear(2100), false)

//PSEUDOCODE: write a conditional checking that the parameter is divisible by 400 OR divisible by 4 but not 100
*/

function isLeapYear(year){
    return (year % 400 === 0) || year % 4 === 0 && year % 100 !== 0;
}

console.log(isLeapYear(2020), true)
console.log(isLeapYear(2000), true)
console.log(isLeapYear(2015), false)
console.log(isLeapYear(2100), false)
