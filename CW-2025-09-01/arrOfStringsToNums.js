/*
7 Kyu
Convert an array of strings to array of numbers

Oh no!
Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

You need to cast the whole array to the correct type.

Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

ie:["1", "2", "3"] to [1, 2, 3]

Note that you can receive floats as well.

//PARAMETERS: an array of string numbers

//RETURNS: parse the strings to numbers

//EXAMPLES: 
    (toNumberArray(["1.1","2.2","3.3"]), [1.1,2.2,3.3]);

//PSEUDOCODE: 
*/

function toNumberArray(strArr){
    return strArr.map(Number)
}

console.log(toNumberArray(["1.1","2.2","3.3"]), [1.1,2.2,3.3]);