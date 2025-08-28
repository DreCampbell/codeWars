/*
7 Kyu
Filter the Number

Filter the number
Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

Task
Your task is to return a number from a string.

Details
You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

//PARAMETERS: a string with letters and numbers

//RETURNS: remove all the letters and return only the numbers in the same order they are presented in

//EXAMPLES: 
    (filterString("123"), 123, `For the input "123"`);
    (filterString("a1b2c3"), 123, `For the input "a1b2c3"`);
    (filterString("aa1bb2cc3dd"), 123, `For the input "aa1bb2cc3dd"`);

//PSEUDOCODE: convert the string to an array, iterate through the array with filter, and return each character where it is equal in value to the character converted to a number, then join back to a string and return the whole thing as a number
*/

function filterString(val){
    return +val.split('').filter(x => x == +x).join('');
}

console.log(filterString("123"), 123);
console.log(filterString("a1b2c3"), 123);
console.log(filterString("aa1bb2cc3dd"), 123);
