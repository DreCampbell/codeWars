/*
7 Kyu
Credit Card Mask

Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples (input --> output):
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"
"Skippy" --> "##ippy"
"Nananananananananananananananana Batman!" --> "####################################man!"

//PARAMETERS: a string of characters

//RETURNS: change all but the last 4 characters to '#'

//EXAMPLES:
    (maskify('4556364607935616'), '############5616');
    (maskify('1'), '1');
    (maskify('11111'), '#1111');

//PSEUDOCODE: split the string to an array, iterate through with map, checking if the index is
*/

function maskify(cc){
    return cc.split('').map((x, i) => i < cc.length - 4 ? '#' : x).join('');
}

console.log(maskify('4556364607935616'), '############5616');
console.log(maskify('1'), '1');
console.log(maskify('11111'), '#1111');