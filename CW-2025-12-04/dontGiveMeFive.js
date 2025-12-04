/*
7 Kyu
Don't give me Five

In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

Examples:

1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
The result may contain fives. ;-)
The start number will always be smaller than the end number. Both numbers can be also negative!

I'm very curious for your solutions and the way you solve it. Maybe someone of you will find an easy pure mathematics solution.

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata!

//PARAMETERS: two numbers, the starting number and the ending number

//RETURNS: the number of digits from the start to the end, excluding any number with 5 

//EXAMPLES: 
    (dontGiveMeFive(1,9), 8);
    (dontGiveMeFive(4,17), 12);

//PSEUDOCODE: run a for loop from the start number to the end number and push each number to an array to hold all the numbers, then filter out any number with a 5 and return the length of the remaining array
*/

function dontGiveMeFive(start, end){
    let nums = [];
    for(let i = start; i <= end; i++){
        nums.push(i)
    }
    return nums.filter(x => !String(x).includes(5)).length;
}

console.log(dontGiveMeFive(1,9), 8);
console.log(dontGiveMeFive(4,17), 12);