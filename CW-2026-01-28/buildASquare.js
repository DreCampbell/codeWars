/*
7 Kyu
Build a Square

I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

Example
n = 3, so I expect a 3x3 square back just like below as a string:

+++
+++
+++

//PARAMETERS: a number

//RETURNS: a shape that is as wide as it is long

//EXAMPLES: 
    ( generateShape(8) , '++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++' )
  });
//PSEUDOCODE:
*/

function generateShape(n){
    return ('+'.repeat(n)+'\n').repeat(n).trim();
}

console.log(generateShape(8), '++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++' )