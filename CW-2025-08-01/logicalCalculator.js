/*
8 Kyu
Logical Calculator

Description:
Your Task
Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.

Examples
booleans = [True, True, False], operator = "AND"
True AND True -> True
True AND False -> False
return False
booleans = [True, True, False], operator = "OR"
True OR True -> True
True OR False -> True
return True
booleans = [True, True, False], operator = "XOR"
True XOR True -> False
False XOR False -> False
return False
Input
an array of Boolean values (1 <= array_length <= 50)
a string specifying a logical operator: "AND", "OR", "XOR"
Output
A Boolean value (True or False).

//PARAMETERS: an array of boolean values and an operator

//RETURNS: 

//EXAMPLES: 
    (logicalCalc([true, true, true, false], "AND"), false);
    (logicalCalc([true, true, true, false], "OR"), true);
    (logicalCalc([true, true, true, false], "XOR"), true);
    (logicalCalc([true, true, false, false], "AND"), false);
    (logicalCalc([true, true, false, false], "OR"), true);
    (logicalCalc([true, true, false, false], "XOR"), false);
    (logicalCalc([true, false, false, false], "AND"), false);
    (logicalCalc([true, false, false, false], "OR"), true);
    (logicalCalc([true, false, false, false], "XOR"), true);
    (logicalCalc([true, true], "AND"), true);
    (logicalCalc([true, true], "OR"), true);
    (logicalCalc([true, true], "XOR"), false);
    (logicalCalc([false, false], "AND"), false);
    (logicalCalc([false, false], "OR"), false);
    (logicalCalc([false, false], "XOR"), false);
    (logicalCalc([false], "AND"), false);
    (logicalCalc([false], "OR"), false);
    (logicalCalc([false], "XOR"), false);
    (logicalCalc([true], "AND"), true);
    (logicalCalc([true], "OR"), true);
    (logicalCalc([true], "XOR"), true);

//PSEUDOCODE: 
*/

let ops = {
    'AND': (a, b) => a && b,
    'OR': (a, b)  => a || b,
    'XOR': (a, b) => a != b
}

function logicalCalc(arr, op){
    return arr.reduce(ops[op]);
}

console.log(logicalCalc([true, true, true, false], "AND"), false);
console.log(logicalCalc([true, true, true, false], "OR"), true);
console.log(logicalCalc([true, true, true, false], "XOR"), true);
console.log(logicalCalc([true, true, false, false], "AND"), false);
console.log(logicalCalc([true, true, false, false], "OR"), true);
console.log(logicalCalc([true, true, false, false], "XOR"), false);
console.log(logicalCalc([true, false, false, false], "AND"), false);
console.log(logicalCalc([true, false, false, false], "OR"), true);
console.log(logicalCalc([true, false, false, false], "XOR"), true);
console.log(logicalCalc([true, true], "AND"), true);
console.log(logicalCalc([true, true], "OR"), true);
console.log(logicalCalc([true, true], "XOR"), false);
console.log(logicalCalc([false, false], "AND"), false);
console.log(logicalCalc([false, false], "OR"), false);
console.log(logicalCalc([false, false], "XOR"), false);
console.log(logicalCalc([false], "AND"), false);
console.log(logicalCalc([false], "OR"), false);
console.log(logicalCalc([false], "XOR"), false);
console.log(logicalCalc([true], "AND"), true);
console.log(logicalCalc([true], "OR"), true);
console.log(logicalCalc([true], "XOR"), true);