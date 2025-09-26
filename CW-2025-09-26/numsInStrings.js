/*
7 Kyu
Numbers in Strings

Description:
In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number. Numbers will not have leading zeros.

For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.

Good luck!

//PARAMETERS: a string of lowercase letters and numbers

//RETURNS: the largest group of numbers in the string

//EXAMPLES: 
    (solve('gh12cdy695m1'), 695);
    (solve('2ti9iei7qhr5'),   9);
    (solve('vih61w8oohj5'),  61);
    (solve('f7g42g16hcu5'),  42);
    (solve( 'lu1j8qbbb85'),  85);

//PSEUDOCODE: 
*/

function solve(s){
    let abc = 'abcdefghijklmnopqrstuvwxyz';
    return Math.max(...s.split('').map(x => abc.includes(x) ? ' ' : +x).join('').split(' ').map(Number));
}

console.log(solve('gh12cdy695m1'), 695);
console.log(solve('2ti9iei7qhr5'),   9);
console.log(solve('vih61w8oohj5'),  61);
console.log(solve('f7g42g16hcu5'),  42);
console.log(solve( 'lu1j8qbbb85'),  85);