/*
7 Kyu
Alternate Capitalization

Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

//PARAMETERS: a string with no spaces and only lowercase letters

//RETURNS: the string with two instances of even and odd indices capitalized separatly

//EXAMPLES: 
    (capitalize("codewars"), ['CoDeWaRs', 'cOdEwArS']);
    (capitalize("abracadabra"), ['AbRaCaDaBrA', 'aBrAcAdAbRa']);
    (capitalize("codewarriors"), ['CoDeWaRrIoRs', 'cOdEwArRiOrS']);

//PSEUDOCODE: 
*/

function capitalize(s){
    let even = s.split('').map((x, i) => i % 2 === 0 ? x.toUpperCase() : x).join('')
    let odd = s.split('').map((x, i) => i % 2 !== 0 ? x.toUpperCase() : x).join('')
    return [even, odd];
}

console.log(capitalize("codewars"), ['CoDeWaRs', 'cOdEwArS']);
console.log(capitalize("abracadabra"), ['AbRaCaDaBrA', 'aBrAcAdAbRa']);
console.log(capitalize("codewarriors"), ['CoDeWaRrIoRs', 'cOdEwArRiOrS']);
