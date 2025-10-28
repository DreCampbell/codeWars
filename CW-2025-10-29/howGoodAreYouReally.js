/*
8 Kyu
How good are you really?

Description:
There was a test in your class and you passed it. Congratulations!

But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return true if you're better, else false!

Note:
Your points are not included in the array of your class's points. Do not forget them when calculating the average score!

//PARAMETERS: an array of test scores and your test score

//RETURNS: a boolean, true if your score is greater than the average

//EXAMPLES: 
    (betterThanAverage([2, 3], 5), true);

//PSEUDOCODE: get 
*/

function betterThanAverage(classPoints, yourPoints){
    return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
}

console.log(betterThanAverage([2, 3], 5), true);

