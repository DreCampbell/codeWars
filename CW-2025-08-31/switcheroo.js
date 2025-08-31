/*
7 Kyu
Switcheroo

Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'

//PARAMETERS: a string of the letters "a", "b", and/or "c"

//RETURNS: switch the places of "a" and "b"

//EXAMPLES: 
    (switcheroo('abc'), 'bac');
    (switcheroo('aaabcccbaaa'), 'bbbacccabbb'); 
    (switcheroo('ccccc'), 'ccccc');    

//PSEUDOCODE: 
*/

function switcheroo(x){
    return x.split('').map(e => {
        switch(e){
            case "a": 
                return "b";
            break;
            case "b":
                return "a";
            break;
            default:
                return e;
        }
    }).join('');
}

console.log(switcheroo('abc'), 'bac');
console.log(switcheroo('aaabcccbaaa'), 'bbbacccabbb');
console.log(switcheroo('ccccc'), 'ccccc');