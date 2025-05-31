/*
8 Kyu
Neutralisation

Description:
Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:

When positives and positives interact, they remain positive.
When negatives and negatives interact, they remain negative.
But when negatives and positives interact, they become neutral, and are shown as the number 0.
Worked Example
("+-+", "+--") ➞ "+-0"
# Compare the first characters of each string, then the next in turn.
# "+" against a "+" returns another "+".
# "-" against a "-" returns another "-".
# "+" against a "-" returns "0".
# Return the string of characters.
Examples
("--++--", "++--++") ➞ "000000"

("-+-+-+", "-+-+-+") ➞ "-+-+-+"

("-++-", "-+-+") ➞ "-+00"
Notes
The two strings will be the same length.

//PARAMETERS: two strings of + and -

//RETURNS: a new string showing how the original strings interact where each index will be compared; + and + stays positive; - and - stays negative, but + and - return 0

//EXAMPLES: 
    (neutralise("--++--", "++--++"), "000000");
    (neutralise("-+-+-+", "-+-+-+"), "-+-+-+");
    (neutralise("-++-", "-+-+"), "-+00");
    (neutralise("--++", "++++"), "00++");
    (neutralise("+++--+---", "++----++-"), "++0--000-");
    (neutralise("-----", "-----"), "-----");
    (neutralise("-+", "++"), "0+");
    (neutralise("--", "-+"), "-0");
    (neutralise("-++", "+--"), "000");
    (neutralise("++-++--++-", "-+++-++-++"), "0+0+0000+0");
    (neutralise("-++-+-++-", "+-++++---"), "00+0+000-");
    (neutralise("---++-+--", "-+++--++-"), "-00+0-+0-");
    (neutralise("+-----+++-", "--+-+-++--"), "0-0-0-++0-");
    (neutralise("+-----+-", "---++-++"), "0--00-+0");
    (neutralise("-+--+-+---", "-+--+-+-+-"), "-+--+-+-0-");
    (neutralise("+-+", "-++"), "00+");
    (neutralise("-++", "-+-"), "-+0");
    (neutralise("---+", "-+++"), "-00+");
    (neutralise("+--", "+--"), "+--");
    (neutralise("--+++-+-", "+++++---"), "00+++-0-");

//PSEUDOCODE: create a variable holding an empty string, run a for loop checking each element in s1 & s2, if they are the same element, concatinate it to the str variable, if not concatinate '0'
*/

function neutralise(s1, s2){
    let str = '';
    for(let i = 0; i < s1.length; i++){
        str += s1[i] === s2[i] ? s1[i] : '0';
    }
    return str;
}

console.log(neutralise("--++--", "++--++"), "000000");
console.log(neutralise("-+-+-+", "-+-+-+"), "-+-+-+");
console.log(neutralise("-++-", "-+-+"), "-+00");
console.log(neutralise("--++", "++++"), "00++");
console.log(neutralise("+++--+---", "++----++-"), "++0--000-");
console.log(neutralise("-----", "-----"), "-----");
