/*
8 Kyu
A Needle in the Haystack

Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
Note: In COBOL, it should return "found the needle at position 6"

//PARAMETERS: an array of strings

//RETURNS: a string saying "found the needle at position " + the index where the needle is found

//EXAMPLES: 
    (findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]), "found the needle at position 5")

//PSEUDOCODE: in a variable store the index where the needle is found using indexOf() on the array, then in a template literal return with the desired string with the variable inserted
*/

function findNeedle(haystack){
    let index = haystack.indexOf('needle')
    return `found the needle at position ${index}`;
}

console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]), "found the needle at position 5")