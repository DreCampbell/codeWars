/*
7 Kyu
List Filtering

Description:
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

//PARAMETERS: an array of positive numbers and strings

//RETURNS: the array with all the strings removed

//EXAMPLES: 
    (filter_list([1,2,'a','b']),[1,2], 'For input [1,2,"a","b"]');
    (filter_list([1,'a','b',0,15]),[1,0,15], 'For input [1,"a","b",0,15]');
    (filter_list([1,2,'aasf','1','123',123]),[1,2,123], 'For input [1,2,"aasf","1","123",123]');

//PSEUDOCODE: use the filter method to only return elements with a typeof === "number"
*/

function filter_list(l){
    return l.filter(x => typeof x === 'number');
}

console.log(filter_list([1,2,'a','b']),[1,2], 'For input [1,2,"a","b"]');
console.log(filter_list([1,'a','b',0,15]),[1,0,15], 'For input [1,"a","b",0,15]');
console.log(filter_list([1,2,'aasf','1','123',123]),[1,2,123], 'For input [1,2,"aasf","1","123",123]');