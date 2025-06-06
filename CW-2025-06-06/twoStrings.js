/*
8 Kyu
Two Strings
Task
Give you two strings: s1 and s2. If they are opposite, return true; otherwise, return false. Note: The result should be a boolean value, instead of a string.

The opposite means: All letters of the two strings are the same, but the case is opposite. you can assume that the string only contains letters or it's a empty string. Also take note of the edge case - if both strings are empty then you should return false/False.

Examples (input -> output)
"ab","AB"     -> true
"aB","Ab"     -> true
"aBcd","AbCD" -> true
"AB","Ab"     -> false
"",""         -> false

//PARAMETERS: 

//RETURNS: 

//EXAMPLES: 
    isOpposite("ab", "AB", true);
    isOpposite("aB", "Ab", true);
    isOpposite("aBcd", "AbCD", true);
    isOpposite("aBcde", "AbCD", false);
    isOpposite("AB", "Ab", false);
    isOpposite("Ab", "cD", false);
    isOpposite("", "", false);


//PSEUDOCODE: 
*/

function isOpposite(s1, s2){
    s1 = s1.split('').map(x =>{
        if(x.toLowerCase() === x){
            return x.toUpperCase()
        }else{
            return x.toLowerCase()
        }
    }
    ).join('');
    return s1.length > 0 ? s1 === s2 : false;
}

console.log(isOpposite("ab", "AB"), true);
console.log(isOpposite("aB", "Ab"), true);
console.log(isOpposite("aBcd", "AbCD"), true);
console.log(isOpposite("aBcde", "AbCD"), false);
console.log(isOpposite("AB", "Ab"), false);
console.log(isOpposite("Ab", "cD"), false);
console.log(isOpposite("", ""), false);