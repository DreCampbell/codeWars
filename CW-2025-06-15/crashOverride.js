/*
8 Kyu
Crash Override

Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and Crash Override are some notable examples from the film Hackers.

Your task is to create a function that, given a proper first and last name, will return the correct alias.

Notes:
Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given. See the examples below for further details.

If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."

Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.

Examples
// These two objects are preloaded, you need to use them in your code
var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache' ...}
var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst' ...}

aliasGen('Larry', 'Brentwood') === 'Logic Bomb'
aliasGen('123abc', 'Petrovic') === 'Your name must start with a letter from A - Z.'

//PARAMETERS: two strings representing a first and last name pair

//RETURNS: based on the initials, return a hacker codename from the preloaded objects

//EXAMPLES: 
    (aliasGen("Mike", "Millington"), "Malware Mike");
    (aliasGen("Fahima", "Tash"), "Function T-Rex");
    (aliasGen("Daisy", "Petrovic"), "Data Payload");
    (aliasGen("7393424", "Anumbha"), "Your name must start with a letter from A - Z.");
    (aliasGen("Anuddanumbha", "23200"), "Your name must start with a letter from A - Z.");

//PSEUDOCODE: create a variable to hold the letters of the alphabet,then get the first letter from each name, reassign it to the given parameters, and capitalize it. Then run a conditional checking that both initials are a letter from A-Z, if so within a template literal return the corresponding alias from the given objects, else return 'Your name must start with a letter from A - Z.'
*/

function aliasGen(first, last){
    let abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    first = first[0].toUpperCase();
    last = last[0].toUpperCase();
    if(abc.includes(first) && abc.includes(last)){
        return `${firstName[first]} ${surname[last]}`;
    }else{
        return 'Your name must start with a letter from A - Z.';
    }
}

console.log(aliasGen("Mike", "Millington"), "Malware Mike");
console.log(aliasGen("Fahima", "Tash"), "Function T-Rex");
console.log(aliasGen("Daisy", "Petrovic"), "Data Payload");
console.log(aliasGen("7393424", "Anumbha"), "Your name must start with a letter from A - Z.");
console.log(aliasGen("Anuddanumbha", "23200"), "Your name must start with a letter from A - Z.");