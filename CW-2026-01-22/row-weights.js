/*
7 Kyu
Row Weights

Several people are standing in a row divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

Task
Given an array of positive integers (the weights of the people), return a new array / tuple of two integers (depending on your language), whereby the first one is the total weight of team 1, and the second one is the total weight of team 2. Note that the array will never be empty.

Examples
[13, 27, 49] returns [62, 27] or (62, 27) (depending on your language) because the total weight of team 1 is 
13
+
49
=
62
13+49=62 and the total weight of team 2 is 
27
27.
[50, 60, 70, 80] returns [120, 140] or (120, 140) (depending on your language) because the total weight of team 1 is 
50
+
70
=
120
50+70=120 and the total weight of team 2 is 
60
+
80
=
140
60+80=140.
[80] returns [80, 0] or (80, 0) (depending on your language) because the total weight of team 1 is 
80
80 and the total weight of team 2 is 
0
0.

//PARAMETERS: an array of numbers, the weight of each person

//RETURNS: an array with the total weight of team 1 and team 2

//EXAMPLES: 
    (rowWeights([80]), [80,0]);
    (rowWeights([100,50]), [100,50]);
    (rowWeights([50,60,70,80]), [120,140]);
    (rowWeights([13,27,49]), [62,27]);
    (rowWeights([70,58,75,34,91]), [236,92]);
    (rowWeights([29,83,67,53,19,28,96]), [211,164]);
    (rowWeights([100,51,50,100]), [150,151]);
    (rowWeights([39,84,74,18,59,72,35,61]), [207,235]);

//PSEUDOCODE: create 2 variable to hold team1 and team two, then filter through the given array and filter all the even indices into team 1 and the odd into team 2, then use reduce to get the total weight, then return the two totals in an array
*/

function rowWeights(arr){
    let team1 = arr.filter((x, i) => i % 2 === 0).reduce((a, b) => a + b, 0);
    let team2 = arr.filter((x, i) => i % 2 !== 0).reduce((a, b) => a + b, 0);
    return [team1, team2];
}

console.log(rowWeights([80]), [80,0]);
console.log(rowWeights([100,50]), [100,50]);
console.log(rowWeights([50,60,70,80]), [120,140]);
console.log(rowWeights([13,27,49]), [62,27]);
console.log(rowWeights([70,58,75,34,91]), [236,92]);
console.log(rowWeights([29,83,67,53,19,28,96]), [211,164]);
console.log(rowWeights([100,51,50,100]), [150,151]);
console.log(rowWeights([39,84,74,18,59,72,35,61]), [207,235]);
