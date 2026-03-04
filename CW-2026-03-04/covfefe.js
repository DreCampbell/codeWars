/*
7 Kyu
Covfefe

Your are given a string. You must replace any occurence of the sequence coverage by covfefe, however, if you don't find the word coverage in the string, you must add covfefe at the end of the string with a leading space.

For the languages where the string is mutable (such as ruby), don't modify the given string, otherwise this will break the test cases.

//PARAMETERS: a string

//RETURNS: replace any instance of the word "coverage" with "covfefe", but if "coverage" does not exist in the string add " covfefe" to the end of the string

//EXAMPLES: 
    (covfefe("coverage"),"covfefe");
    (covfefe("coverage coverage"),"covfefe covfefe");
    (covfefe("nothing"),"nothing covfefe");
    (covfefe("double space "),"double space  covfefe");
    (covfefe("covfefe"),"covfefe covfefe");
    (covfefe("erag"),"erag covfefe");

//PSEUDOCODE: run a conditional and if str includes "coverage" replaceAll "coverage" with "covfefe", else add " covfefe" to the end of the string with a template literal

*/

function covfefe(str) {
  return str.includes("coverage")
    ? str.replaceAll("coverage", "covfefe")
    : `${str} covfefe`;
}

console.log(covfefe("coverage"), "covfefe");
console.log(covfefe("coverage coverage"), "covfefe covfefe");
console.log(covfefe("nothing"), "nothing covfefe");
console.log(covfefe("double space "), "double space  covfefe");
console.log(covfefe("covfefe"), "covfefe covfefe");
console.log(covfefe("erag"), "erag covfefe");
