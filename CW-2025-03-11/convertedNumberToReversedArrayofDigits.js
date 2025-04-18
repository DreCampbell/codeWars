/*Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example (Input => Output):
35231 => [1,3,2,5,3]
0     => [0]

//PARAMETERS: a positive number

//RETURN: the digits of the given number within an array in reverse order

//EXAMPLES: 
    (digitize(35231),[1,3,2,5,3]);
    (digitize(0),[0]);

//PSEUDOCODE: convert n to a string then split into an array with the split method, then reverse with the reverse method, then iterate through the array with map and convert each string number into a number
*/

function digitize(n) {
    return n.toString().split('').reverse().map(Number);
}

console.log(digitize(35231),[1,3,2,5,3]);
console.log(digitize(0),[0]);