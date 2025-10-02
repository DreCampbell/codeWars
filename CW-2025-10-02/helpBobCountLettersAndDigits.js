/*
7 Kyu
Help Bob count letters and digits

Bob is a lazy man.

He needs you to create a method that can determine how many letters (both uppercase and lowercase ASCII letters) and digits are in a given string.

Example:

"hel2!lo" --> 6

"wicked .. !" --> 6

"!?..A" --> 1

//PARAMETERS: a string of letters, numbers, and random characters

//RETURNS: the total number of letters and numbers

//EXAMPLES: 
    (countLettersAndDigits("hel2!lo"), 6);
    (countLettersAndDigits("n!!_ice!!123"), 7);
    (countLettersAndDigits("1"), 1);
    (countLettersAndDigits("?"), 0);
    (countLettersAndDigits("12345f%%%t5t&/6"), 10);
    (countLettersAndDigits("aBcDeFg090"), 10);
    (countLettersAndDigits("u_n_d_e_r__S_C_O_R_E"), 10);

//PSEUDOCODE: create a variable to hold the count and set it to 0, create another variable to hold the alphabet, then run a for loop checking if each element is either included in the alphabet variable, or is a number, and if so and 1 to the count variable
*/

function countLettersAndDigits(input){
    let count = 0;
    let abc = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
    for(let i = 0; i < input.length; i++){
        if(abc.includes(input[i]) || input[i] == +input[i] && input[i] != " "){
            count++;
        }else{
            count;
        }
    }
    return count;
}

console.log(countLettersAndDigits("   "), 0);
console.log(countLettersAndDigits("RO$.n2 #CjGh5uis|&1~-;ITg$ "), 16);
console.log(countLettersAndDigits("hel2!lo"), 6);
console.log(countLettersAndDigits("n!!_ice!!123"), 7);
console.log(countLettersAndDigits("1"), 1);
console.log(countLettersAndDigits("?"), 0);
console.log(countLettersAndDigits("12345f%%%t5t&/6"), 10);
console.log(countLettersAndDigits("aBcDeFg090"), 10);
console.log(countLettersAndDigits("u_n_d_e_r__S_C_O_R_E"), 10);