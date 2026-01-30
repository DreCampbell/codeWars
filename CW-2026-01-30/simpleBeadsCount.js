/*
7 Kyu
Simple Beads Count

Two red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement below work out the number of red beads.

@ @@ @ @@ @ @@ @ @@ @ @@ @

Implement a function returning the number of red beads.
If there are less than 2 blue beads return 0.

//PARAMETERS: a number, the number of blue beads in the sequence

//RETURNS: the number of red beads in the sequence

//EXAMPLES: 
    (countRedBeads(0), 0);
    (countRedBeads(1), 0);
    (countRedBeads(3), 4);
    (countRedBeads(5), 8);

//PSEUDOCODE: check if n is greater than 1, if so multiple the number of blue beads by 2 then subtract 2, if not return 0
*/

function countRedBeads(n){
    return n > 1 ? (n * 2) - 2 : 0;
}

console.log(countRedBeads(0), 0);
console.log(countRedBeads(1), 0);
console.log(countRedBeads(3), 4);
console.log(countRedBeads(5), 8);