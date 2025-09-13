/*
7 Kyu
Insert Dashes

Write a function that takes an integer num (num >= 0) and inserts dashes ('-') between each two odd digits in num.

Examples
454793 ---> "4547-9-3"
     0 ---> "0"
     1 ---> "1"
13579  ---> "1-3-5-7-9"
 86420 ---> "86420"

 //PARAMETERS: a number

 //RETURNS: return that number as a string with dashes between each odd digit

 //EXAMPLES: 
    (insertDash(454793),'4547-9-3');
    (insertDash(123456),'123456');
    (insertDash(1003567),'1003-567');

 //PSEUDOCODE: parse the number to a string, split the string into an array, map through the array and if the number is odd add a dash infront of it
 */

function insertDash(num){
    num = String(num).split('');

    for(let i = 0; i < num.length; i++){
        if(num[i] % 2 == 1 && num[i+1] % 2 == 1){
            num[i] = num[i] + '-';
        }
    }
    return num.join('')
}

console.log(insertDash(454793),'4547-9-3');
console.log(insertDash(123456),'123456');
console.log(insertDash(1003567),'1003-567');
