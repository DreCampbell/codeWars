/*
8 Kyu
I love you a little, a lot, passionately, not at all

Description:
Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

"I love you"
"a little"
"a lot"
"passionately"
"madly"
"not at all"
If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.


//PARAMETERS: a number greater than 0

//RETURNS: a phrase based on the number given from 1-6

//EXAMPLES: 
    (howMuchILoveYou(7),"I love you")
    (howMuchILoveYou(3),"a lot")
    (howMuchILoveYou(6),"not at all")

/PSEUDOCODE: divide the number by 6 and round to the lowest whole number
*/

function howMuchILoveYou(nbPetals){
    nbPetals = nbPetals % 6;
    switch(nbPetals){
        case 1:
            return "I love you";
        break;
        case 2:
            return "a little";
        break;
        case 3:
            return "a lot"
        break;
        case 4:
            return "passionately"
        break;
        case 5:
            return "madly"
        break;
        default:
            return "not at all"
    }
}

console.log(howMuchILoveYou(7),"I love you")
console.log(howMuchILoveYou(3),"a lot")
console.log(howMuchILoveYou(6),"not at all")
console.log(howMuchILoveYou(2),"a little")
console.log(howMuchILoveYou(4),"passionately")
console.log(howMuchILoveYou(5),"madly")