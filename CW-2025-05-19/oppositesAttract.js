/*
8 Kyu
Opposites Attract

Description:
Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

//PARAMETERS: two numbers

//RETURNS: a boolean, true if one flower has even petals and the other has odd

//EXAMPLES: 
    (lovefunc(1,4), true)
    (lovefunc(2,2), false)
    (lovefunc(0,1), true)
    (lovefunc(0,0), false)

//PSEUDOCODE: using modulus, return that flower1 mod 2 does not equal flower2 mod 2
*/

function lovefunc(flower1, flower2){
  return flower1 % 2 !== flower2 % 2;
}

console.log(lovefunc(1,4), true)
console.log(lovefunc(2,2), false)
console.log(lovefunc(0,1), true)
console.log(lovefunc(0,0), false)