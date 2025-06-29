/*
7 Kyu
Alan Partridge I - Partridge Watch

Task
Given an array of terms, if any of those terms relate to Alan Partridge, return Mine's a Pint!

The number of exclamation mark (!) after the t should be determined by the number of Alan related terms you find in the given array (x). The related terms are as follows:

Partridge
PearTree
Chat
Dan
Toblerone
Lynn
AlphaPapa
Nomad
If you don't find any related terms, return Lynn, I've pierced my foot on a spike!!

//PARAMETERS: an array of terms, some related to Alan Partridge

//RETURNS: the phrase "Mine's a Pint!" with the number of '!' repeated x number of times for the number of Alan related terms

//EXAMPLES: 
    (part(['Grouse', 'Partridge', 'Pheasant']), 'Mine\'s a Pint!');
    (part(['Pheasant', 'Goose', 'Starling', 'Robin']), 'Lynn, I\'ve pierced my foot on a spike!!');
    (part(['Grouse', 'Partridge', 'Pheasant', 'Goose', 'Starling', 'Robin', 'Thrush', 'Emu', 'PearTree', 'Chat', 'Dan', 'Square', 'Toblerone', 'Lynn', 'AlphaPapa', 'BMW', 'Graham', 'Tool', 'Nomad', 'Finger', 'Hamster']), 'Mine\'s a Pint!!!!!!!!');

//PSEUDOCODE: create a variable array to hold the related terms and a variable set to 0 to hold the number of terms found; then iterate through the given array checking if any of the elements are related terms, if so add 1 to the nums variable
*/

function part(x){
    let terms = ['Partridge', 'PearTree', 'Chat', 'Dan', 'Toblerone', 'Lynn', 'AlphaPapa', 'Nomad'];
    let numOfTerms = 0;
    let exclaim = '!';
    x.map(term => {
        if(terms.includes(term)){
            numOfTerms++;
        }
    })

    return numOfTerms > 0 ? `Mine's a Pint${exclaim.repeat(numOfTerms)}` : `Lynn, I've pierced my foot on a spike!!`;
}

console.log(part(['Grouse', 'Partridge', 'Pheasant']), 'Mine\'s a Pint!');
console.log(part(['Pheasant', 'Goose', 'Starling', 'Robin']), 'Lynn, I\'ve pierced my foot on a spike!!');
console.log(part(['Grouse', 'Partridge', 'Pheasant', 'Goose', 'Starling', 'Robin', 'Thrush', 'Emu', 'PearTree', 'Chat', 'Dan', 'Square', 'Toblerone', 'Lynn', 'AlphaPapa', 'BMW', 'Graham', 'Tool', 'Nomad', 'Finger', 'Hamster']), 'Mine\'s a Pint!!!!!!!!');