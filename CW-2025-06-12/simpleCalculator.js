/*
8 Kyu
Simple Calculator

You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

Your function will accept three arguments:
The first and second argument should be numbers.
The third argument should represent a sign indicating the operation to perform on these two numbers.

You should return the result of applying the given operation to these numbers.

Note: In dynamically typed languages (JS, PHP, Python), the first and second arguments can be not numbers. In that case, return "unknown value".

If the given operation to perform on the two numbers is not one of the four mentioned above, you should:

return a value:
"unknown value" (JS, PHP, Python)
throw an exception:
std::invalid_argument (C++)
ArgumentException (C#)
IllegalArgumentException (Java)
Example:
arguments: 1, 2, "+"
should return 3

arguments: 1, 2, "&"
refer to the description for what you should return in this case

# Specifically for dynamically-typed languages:

arguments: 1, "k", "*"
should return "unknown value"

//PARAMETERS: two numbers and an operator sign

//RETURNS: the result of applying the operator to the given numbers

//EXAMPLES: 
    calculator(1,   2, "+",               3);
    calculator(1,   2, "-",              -1);
    calculator(3,   5, "*",              15);
    calculator(6,   2, "/",               3);
    calculator(6,   2, "$", "unknown value");
    calculator(6, "h", "*", "unknown value");

//PSEUDOCODE: use a switch case to perform the given operation on the numbers
*/

function calculator(a, b, sign){
    if(typeof a === 'number' && typeof b === 'number'){        
        switch(sign){
            case '+':
                return a + b;
            break;
            case '-':
                return a - b;
            break;
            case '*':
                return a * b;
            break;
            case '/':
                return a / b;
            break;
        }
    }
    return "unknown value";
}

console.log(calculator(1,   2, "+"),               3);
console.log(calculator(1,   2, "-"),              -1);
console.log(calculator(3,   5, "*"),              15);
console.log(calculator(6,   2, "/"),               3);
console.log(calculator(6,   2, "$"), "unknown value");
console.log(calculator(6, "h", "*"), "unknown value");