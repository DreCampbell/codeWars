/*
8 Kyu
A Wolf in Sheep's Clothing

Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
   7      6      5      4      3            2      1
If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

Note: there will always be exactly one wolf in the array.

Examples
Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

Input: ["sheep", "sheep", "wolf"]
Output: "Pls go away and stop eating my sheep"

//PARAMETERS: an array where elements are 'sheep' and one 'wolf'

//RETURNS: depending on the position of the wolf, tell the wolf to go away or warn the sheep of the danger

//EXAMPLES: 
    (["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"],
		"Oi! Sheep number 2! You are about to be eaten by a wolf!"
	);
    (["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"],
		"Oi! Sheep number 5! You are about to be eaten by a wolf!"
	);
    (["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"],
		"Oi! Sheep number 6! You are about to be eaten by a wolf!"
	);
    (["sheep", "wolf", "sheep"],
		"Oi! Sheep number 1! You are about to be eaten by a wolf!"
	);
    (["wolf"],
		"Pls go away and stop eating my sheep"
	);
    (["sheep", "sheep", "wolf"],
		"Pls go away and stop eating my sheep"

//PSEUDOCODE: find the index of the sheep using the indexOf method
*/

function warnTheSheep(queue){
    let wolfPos = queue.reverse().indexOf('wolf');
    if(wolfPos === 0){
        return `Pls go away and stop eating my sheep`;
    }else{
        return `Oi! Sheep number ${wolfPos}! You are about to be eaten by a wolf!`
    }
}

console.log(warnTheSheep( ["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"],
		"Oi! Sheep number 2! You are about to be eaten by a wolf!" ))
console.log(warnTheSheep( ["sheep", "wolf", "sheep"],
		"Oi! Sheep number 1! You are about to be eaten by a wolf!" ))
console.log(warnTheSheep( ["sheep", "sheep", "wolf"], "Pls go away and stop eating my sheep" ))