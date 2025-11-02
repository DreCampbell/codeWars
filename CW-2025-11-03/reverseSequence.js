/*
8 Kyu
Reverse Sequence

Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]

//PARAMETERS: 

//RETURNS: 

//EXAMPLES: 

//PSEUDOCODE: 
*/

const reverseSeq = n => {
    let seq = [];
    for(let i = n; i > 0; i--){
        seq.push(i);
    }
    return seq;
}

console.log(reverseSeq(5), [5, 4, 3, 2, 1]);
