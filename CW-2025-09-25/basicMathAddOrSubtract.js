/*
7 Kyu
Basic Math (Add or Subtract)

Description:
In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

Note: the input will not be empty.

Examples
"1plus2plus3plus4"  --> "10"
"1plus2plus3minus4" -->  "2"

//PARAMETERS: a string of numbers separated by 'plus' or 'minus'

//RETURNS: the result of the numbers being added or subtracted, as a string

//EXAMPLES: 
  (calculate("1plus2plus3plus4"), '10');
  (calculate('1minus2minus3minus4'), '-8');
  (calculate('10plus20plus30minus40'), '20');

//PSEUDOCODE: 
*/

function calculate(str){
    let result = '';
    result = str.split('plus').join(' ').split('minus').join(' -').split(' ').reduce((a, c) => +a + +c);
    return result+'';
}

console.log(calculate("1plus2plus3plus4"), '10');
console.log(calculate('1minus2minus3minus4'), '-8');
console.log(calculate('10plus20plus30minus40'), '20');