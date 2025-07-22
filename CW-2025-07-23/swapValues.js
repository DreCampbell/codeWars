/*
8 Kyu
Alan Partridge III - London

s:

Rejection
Disappointment
Backstabbing Central
Shattered Dreams Parkway
If all the stops appear in the given list / array, return Smell my cheese you mother!, if not, return No, seriously, run. You will miss it..

//PARAMETERS: an array of words

//RETURNS: a string based on if the array contains all the correct words/phrases

//EXAMPLES: 
    (alan(['Norwich', 'Rejection', 'Disappointment', 'Backstabbing Central', 'Shattered Dreams Parkway', 'London']), 'Smell my cheese you mother!');

    (alan(['London', 'Norwich']), 'No, seriously, run. You will miss it.');

    (alan(['Norwich', 'Tooting', 'Bank', 'Rejection', 'Disappointment', 'Backstabbing Central', 'Exeter', 'Shattered Dreams Parkway', 'Belgium','London']), 'Smell my cheese you mother!');


//PSEUDOCODE: 
*/

function alan(x){
  let arr = [`Rejection`, `Disappointment`, `Backstabbing Central`, `Shattered Dreams Parkway`]
    return arr.every(val => x.includes(val)) ?
    `Smell my cheese you mother!` : `No, seriously, run. You will miss it.`;
}