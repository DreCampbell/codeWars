/*
7 Kyu
Numbers to Letters 

Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

All inputs will be valid.

//PARAMETERS: an array of numbers

//RETURNS: convert each number to its corresponding letter in the alphabet


//EXAMPLES: 
    (switcher(['24', '12', '23', '22', '4', '26', '9', '8']), 'codewars');
    (switcher(['25','7','8','4','14','23','8','25','23','29','16','16','4']), 'btswmdsbd kkw'); 
    (switcher(['4', '24']), 'wc'); 

//PSEUDOCODE: iterate through the array then use a switch case to change the number to the correct letter, then join the array to a string
*/

// function switcher(x){
//     return x.map(num => {
//         switch(num){
//             case '29':
//                 return " ";
//             break;
//             case '28':
//                 return "?";
//             break;
//             case '27':
//                 return "!";
//             break;
//             case '26':
//                 return "a";
//             break;
//             case '25':
//                 return "b";
//             break;
//             case '24':
//                 return "c";
//             break;
//             case '23':
//                 return "d";
//             break;
//             case '22':
//                 return "e";
//             break;
//             case '21':
//                 return "f";
//             break;
//             case '20':
//                 return "g";
//             break;
//             case '19':
//                 return "h";
//             break;
//             case '18':
//                 return "i";
//             break;
//             case '17':
//                 return "j";
//             break;
//             case '16':
//                 return "k";
//             break;
//             case '15':
//                 return "l";
//             break;
//             case '14':
//                 return "m";
//             break;
//             case '13':
//                 return "n";
//             break;
//             case '12':
//                 return "o";
//             break;
//             case '11':
//                 return "p";
//             break;
//             case '10':
//                 return "q";
//             break;
//             case '9':
//                 return "r";
//             break;
//             case '8':
//                 return "s";
//             break;
//             case '7':
//                 return "t";
//             break;
//             case '6':
//                 return "u";
//             break;
//             case '5':
//                 return "v";
//             break;
//             case '4':
//                 return "w";
//             break;
//             case '3':
//                 return "x";
//             break;
//             case '2':
//                 return "y";
//             break;
//             case '1':
//                 return "z";
//             break;
//             default:
//                 num;
//         }
//     }).join('');
// }

function switcher(x){
    let alphabet = ' zyxwvutsrqponmlkjihgfedcba!? '
    return x.map(num => alphabet[num]).join('');
}

// console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8']), 'codewars');
console.log(switcher(['25','7','8','4','14','23','8','25','23','29','16','16','4']), 'btswmdsbd kkw'); 
// console.log(switcher(['4', '24']), 'wc'); 