/*
7 Kyu
Minimize Sum Of Array (Array Series #1)

Task
Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

Notes
Array/list will contain positives only .
Array/list will always have even size
Input >> Output Examples
minSum({5,4,2,3}) ==> return (22) 
Explanation:
The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22
minSum({12,6,10,26,3,24}) ==> return (342)
Explanation:
The minimum sum obtained from summing each two integers product ,  26*3 + 24*6 + 12*10 = 342
minSum({9,2,8,7,5,4,0,6}) ==> return (74)
Explanation:
The minimum sum obtained from summing each two integers product ,  9*0 + 8*2 +7*4 +6*5 = 74

//PARAMETERS: an array of numbers

//RETURNS: the smallest number by multiplying numbered pairs then adding them together

//EXAMPLES: 
    (minSum([5,4,2,3]), 22);
    (minSum([12,6,10,26,3,24]), 342);
    (minSum([9,2,8,7,5,4,0,6]), 74);

//PSEUDOCODE: create a variable holding the result and set it to 0, then reassign the array to sort it in ascending order, then run a while loop the length of the array using the pop and shift methods to multiply the last and first numbers in the array and add them to the result
*/

// function minSum(arr){
//     arr = arr.sort((a, b) => a - b)
//     let sortedLow = [];
//     let sortedHigh = [];
//     let product = []
//     for(let i = 0; i < arr.length; i++){
//         if(i < arr.length /2){
//             sortedLow.push(arr[i])
//         }else{
//             sortedHigh.unshift(arr[i])
//         }
//     }

//     for(let i = 0; i < sortedLow.length; i++){
//         product.push(sortedHigh[i] * sortedLow[i])
//     }

//     return product.reduce((a, b) => a + b, 0);
// }
function minSum(arr){
    let res = 0;
    arr = arr.sort((a, b) => a - b);

    while(arr.length){
        res += arr.pop() * arr.shift();
    }
    return res
}

console.log(minSum([5,4,2,3]), 22);
console.log(minSum([12,6,10,26,3,24]), 342);
console.log(minSum([9,2,8,7,5,4,0,6]), 74);