/*
7 Kyu
Help Suzuki rake his garden!

Description:
Help Suzuki rake his garden!

The monastery has a magnificent Zen garden made of white gravel and rocks and it is raked diligently everyday by the monks. Suzuki having a keen eye is always on the lookout for anything creeping into the garden that must be removed during the daily raking such as insects or moss.

You will be given a string representing the garden such as:

garden = 'gravel gravel gravel gravel gravel gravel gravel gravel gravel rock slug ant gravel gravel snail rock gravel gravel gravel gravel gravel gravel gravel slug gravel ant gravel gravel gravel gravel rock slug gravel gravel gravel gravel gravel snail gravel gravel rock gravel snail slug gravel gravel spider gravel gravel gravel gravel gravel gravel gravel gravel moss gravel gravel gravel snail gravel gravel gravel ant gravel gravel moss gravel gravel gravel gravel snail gravel gravel gravel gravel slug gravel rock gravel gravel rock gravel gravel gravel gravel snail gravel gravel rock gravel gravel gravel gravel gravel spider gravel rock gravel gravel'
Rake out any items that are not a rock or gravel and replace them with gravel such that:

garden = 'slug spider rock gravel gravel gravel gravel gravel gravel gravel'
Returns a string with all items except a rock or gravel replaced with gravel:

garden = 'gravel gravel rock gravel gravel gravel gravel gravel gravel gravel'

//PARAMETERS: a string of words, 'gravel', 'rock' & etc.

//RETURNS: anything that is not 'rock' or 'gravel' converted to 'gravel'

//EXAMPLES: 
    let garden = 'slug spider rock gravel gravel gravel gravel gravel gravel gravel';
    
    (rakeGarden(garden),'gravel gravel rock gravel gravel gravel gravel gravel gravel gravel');
    
//PSEUDOCODE: split the garden into an array of individual words, then iterate through the array with map, then run a conditional checking if the word is rock, if not return it, else, return gravel, then join the array into a string separated by ' '
*/  

function rakeGarden(garden){
    return garden.split(' ').map(x => x == 'rock' ? x : 'gravel').join(' ');
}

let garden = 'slug spider rock gravel gravel gravel gravel gravel gravel gravel';

console.log(rakeGarden(garden),'gravel gravel rock gravel gravel gravel gravel gravel gravel gravel');