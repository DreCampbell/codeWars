/*
8 Kyu
Simple Change Machine

Your task is to create a change machine.

The machine accepts a single coins or notes, and returns change in 20p and 10p coins. The machine will try to avoid returning its exact input, but will otherwise return as few coins as possible. For example, a 50p piece should become two 20p pieces and one 10p piece, but a 20p piece should become two 10p pieces.

The machine can exclusively process these coins and notes: £5, £2, £1, 50p, 20p. Any coins and notes which are not accepted by the machine will be returned unprocessed. For example, if you were to put a £20 note into the machine, it would be returned to you and not broken into change. (Note that £1 is worth 100p.)

This change machine is programmed to accept and distribute strings rather than numbers. The input will be a string containing the coin or note to be processed, and the change should be returned as one string with the coin names separated by single spaces with no commas. The values of the string should be in descending order. For example, an input of "50p" should yield the exact string "20p 20p 10p".

//PARAMETERS: a string dollar amount

//RETURNS: if the input is £5, £2 £1, 50p, or 20p, return the change that would be given back, else return the input

//EXAMPLES: 
    
    (changeMe(50p), "20p 20p 10p");
    (changeMe(£1), "20p 20p 20p 20p 20p");
    (changeMe("Money"), "Money");

//PSEUDOCODE: write switch statements for the input to return '20p ' then use the repeat method to return 20p 25, 10, and 5 times for "£5", "£2", and "£1" respectively, then use the trim method to remove the trailing space
*/

function changeMe(moneyIn){
    switch(moneyIn){
        case "£5":
            return "20p ".repeat(25).trim();
            break;
        case "£2":
            return "20p ".repeat(10).trim();
            break;
        case "£1":
            return "20p ".repeat(5).trim();
            break;
        case "50p":
            return "20p 20p 10p";
            break;
        case "20p":
            return "10p 10p";
            break;
        default:
            return moneyIn;
    }
}

console.log(changeMe("20p"), "10p 10p");
console.log(changeMe("50p"), "20p 20p 10p");
console.log(changeMe("£1"), "20p 20p 20p 20p 20p");
console.log(changeMe("£2"), "20p 20p 20p 20p 20p 20p 20p 20p 20p 20p");
console.log(changeMe("£5"), "20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p");
console.log(changeMe("Money"), "Money");

