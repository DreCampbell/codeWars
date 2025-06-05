/*
8 Kyu
Printing Array Elements with Comma Delimiters

Input: Array of elements

["h","o","l","a"]

Output: String with comma delimited elements of the array in th same order.

"h,o,l,a"

Note: if this seems too simple for you try the next level

Note2: the input data can be: boolean array, array of objects, array of string arrays, array of number arrays... 😕

//PARAMETERS: an array of elements

//RETURNS: the elements in the array separated by a comma

//EXAMPLES: 
    (printArray([ 2, 4, 5, 2 ], "2,4,5,2"));
    (printArray([ 2.0, 4.2, 5.1 ,2.2 ], "2,4.2,5.1,2.2"));
    (printArray([ "2", "4", "5", "2" ], "2,4,5,2"));
    (printArray([ [ "hello", "this", "is", "an", "array!" ], [ 1, 2, 3, 4, 5 ] ], "hello,this,is,an,array!,1,2,3,4,5"));
    (printArray([ { firstName: "Ruslan", lastName: "López" }, { firstName: "John", lastName: "Doe" } ], '[object Object],[object Object]'));
    (printArray([ true, false ], 'true,false'));

//PSEUDOCODE: join the array
*/

function printArray(arr){
    return arr.join();
}

console.log(printArray([ 2, 4, 5, 2 ]), "2,4,5,2");
console.log(printArray([ 2.0, 4.2, 5.1 ,2.2 ]), "2,4.2,5.1,2.2");
console.log(printArray([ "2", "4", "5", "2" ]), "2,4,5,2");
console.log(printArray([ true, false ]), 'true,false');

console.log(printArray( [ "hello", "this", "is", "an", "array!" , [ 1, 2, 3, 4, 5 ] ]), "hello,this,is,an,array!,1,2,3,4,5");
console.log(printArray( { firstName: "Ruslan", lastNam: "López" }), { firstName: "John", lastName: "Doe" } , '[object Object],[object Object]');
