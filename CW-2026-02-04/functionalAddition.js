/*
7 Kyu
Functional Addition

Create a function add(n)/Add(n) which returns a function that always adds n to any number

Note for Java: the return type and methods have not been provided to make it a bit more challenging.

var addOne = add(1);
addOne(3); // 4

var addThree = add(3);
addThree(3); // 6

*/

function add(n){
    return function (num) {
        return n + num;
    }
}

console.log(add(1)(3), 4, 'add(1)(3)');
console.log(add(1)(-5), -4, 'add(1)(-5)');
console.log(add(3)(20), 23, 'add(3)(20)');
