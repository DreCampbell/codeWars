/*
8 Kyu
Who is going to pay for the wall?

Don Drumphet lives in a nice neighborhood, but one of his neighbors has started to let his house go. Don Drumphet wants to build a wall between his house and his neighbor’s, and is trying to get the neighborhood association to pay for it. He begins to solicit his neighbors to petition to get the association to build the wall. Unfortunately for Don Drumphet, he cannot read very well, has a very limited attention span, and can only remember two letters from each of his neighbors’ names. As he collects signatures, he insists that his neighbors keep truncating their names until two letters remain, and he can finally read them.

Your code will show Full name of the neighbor and the truncated version of the name as an array. If the number of the characters in name is less than or equal to two, it will return an array containing only the name as is.

//PARAMETERS: 

//RETURNS: 

//EXAMPLES: 
    (whoIsPaying("Mexico"), ["Mexico", "Me"]);
    (whoIsPaying("Melania"), ["Melania", "Me"]);
    (whoIsPaying("Melissa"), ["Melissa", "Me"]);
    (whoIsPaying("Me"), ["Me"]);
    (whoIsPaying(""), [""]);
    (whoIsPaying("I"), ["I"]);

//PSEUDOCODE: 
*/

function whoIsPaying(name){
    return name.length > 2 ? [name, name.slice(0,2)] : [name];
}

console.log(whoIsPaying("Mexico"), ["Mexico", "Me"]);
console.log(whoIsPaying("Melania"), ["Melania", "Me"]);
console.log(whoIsPaying("Melissa"), ["Melissa", "Me"]);
console.log(whoIsPaying("Me"), ["Me"]);
console.log(whoIsPaying(""), [""]);
console.log(whoIsPaying("I"), ["I"]);