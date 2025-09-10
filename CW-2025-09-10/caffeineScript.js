/*
7 Kyu
Caffeine Script

Complete the function which takes a non-zero integer as its argument.

If the integer is divisible by 3, return the string "Java".

If the integer is divisible by 3 and divisible by 4, return the string "Coffee"

If one of the condition above is true and the integer is even, add "Script" to the end of the string.

If none of the condition is true, return the string "mocha_missing!"

Examples
1   -->  "mocha_missing!"
3   -->  "Java"
6   -->  "JavaScript"
12  -->  "CoffeeScript"

//PARAMETERS: a positive number

//RETURNS: a string based on a set of

//EXAMPLES: 
    caffeineBuzz(1), "mocha_missing!"
    caffeineBuzz(3), "Java"
    caffeineBuzz(6), "JavaScript"
    caffeineBuzz(12), "CoffeeScript"

//PSEUDOCODE: 
    x / 3 = "Java"
    x / 3 && x / 4 = "Coffee"
    x / 3 || x / 4 && x % 2 === 0 = "Script"
    "mocha_missing"
*/

function caffeineBuzz(n){
    let cafe;
    if(n % 3 === 0 && n % 4 === 0){
        cafe = "Coffee"
    }else if(n % 3 === 0){
        cafe = "Java"
    }else{
        cafe = "mocha_missing!"
    }
    return (n % 3 === 0 && n % 2 === 0) || (n % 4 === 0 && n % 3 === 0 && n % 2 === 0) ? `${cafe}Script` : cafe;
}

console.log(caffeineBuzz(1), "mocha_missing!")
console.log(caffeineBuzz(3), "Java")
console.log(caffeineBuzz(6), "JavaScript")
console.log(caffeineBuzz(12), "CoffeeScript")