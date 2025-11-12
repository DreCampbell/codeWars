/*
7 Kyu
Exes and Ohs

Description:
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

//PARAMETERS: a string

//RETURNS: return true if the string has the same amount of 'x' and 'o'

//EXAMPLES: 
    XO('xo', true);
    XO('XO', true);
    XO('xxxoo', false);
    XO("xxOo", true);
    XO('', true, 'Empty string contains equal amount of x and o');

//PSEUDOCODE: use the split and filter method to store individual strings of x's and o's with the length of that string
*/

function XO(str){
    let exes = str.split('').filter(x => x.toLowerCase() === 'x').length;
    let ohs = str.split('').filter(o => o.toLowerCase() === 'o').length;
    
    return exes === ohs;
}

console.log(XO('xo'), true);
console.log(XO('XO'), true);
console.log(XO('xxxoo'), false);
console.log(XO("xxOo"), true);
console.log(XO(''), true);