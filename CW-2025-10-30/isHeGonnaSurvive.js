/*
8 Kyu
Is he gonna survive?

Description:
A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

Return true if yes, false otherwise :)

//PARAMETERS: a specifice number of bullets and a specific number of dragons

//RETURNS: true if the number of bullets divided by 2 is greater or equal to the number of dragons

//EXAMPLES: 
    (hero(10, 5), true);
    (hero(7, 4), false);
    (hero(4, 5), false);
    (hero(100, 40), true);
    (hero(1500, 751), false);
    (hero(0, 1), false);
 
//PSEUDOCODE: return that the number of bullets divided by 2 is greater or equal to the number of dragons
*/

function hero(bullets, dragons){
    return bullets / 2 >= dragons; 
}

console.log(hero(10, 5), true);
console.log(hero(7, 4), false);
console.log(hero(4, 5), false);
console.log(hero(100, 40), true);
console.log(hero(1500, 751), false);
console.log(hero(0, 1), false);