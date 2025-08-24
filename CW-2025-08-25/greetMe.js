/*
7 Kyu
Greet Me

Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"

//PARAMETERS: a string

//RETURNS: a greeting where the string is capialized and follows a "Hello"

//EXAMPLES: 
    (greet('riley'), 'Hello Riley!');
    (greet('JACK'), 'Hello Jack!');

//PSEUDOCODE: 
*/

function greet(name){
    return `Hello ${name[0].toUpperCase()}${name.slice(1).toLowerCase()}!`;
}

console.log(greet('riley'), 'Hello Riley!');
console.log(greet('JACK'), 'Hello Jack!');
