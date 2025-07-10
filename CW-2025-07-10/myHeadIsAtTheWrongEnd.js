/*
8 Kyu
My head is at the wrong end!

Description:
You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics

Simples!

//PARAMETERS: an array of meerkats body parts

//RETURNS: the body parts arranged correctly

//EXAMPLES: 
    (fixTheMeerkat(["tail", "body", "head"]), ["head", "body", "tail"]);
    (fixTheMeerkat(["tails", "body", "heads"]), ["heads", "body", "tails"]);
    (fixTheMeerkat(["bottom", "middle", "top"]), ["top", "middle", "bottom"]);
    (fixTheMeerkat(["lower legs", "torso", "upper legs"]), ["upper legs", "torso", "lower legs"]);
    (fixTheMeerkat(["ground", "rainbow", "sky"]), ["sky", "rainbow", "ground"]);

//PSEUDOCODE: reverse the array
*/

function fixTheMeerkat(arr){
    return arr.reverse();
}

console.log(fixTheMeerkat(["tail", "body", "head"]), ["head", "body", "tail"]);
console.log(fixTheMeerkat(["tails", "body", "heads"]), ["heads", "body", "tails"]);
console.log(fixTheMeerkat(["bottom", "middle", "top"]), ["top", "middle", "bottom"]);
console.log(fixTheMeerkat(["lower legs", "torso", "upper legs"]), ["upper legs", "torso", "lower legs"]);
console.log(fixTheMeerkat(["ground", "rainbow", "sky"]), ["sky", "rainbow", "ground"]);