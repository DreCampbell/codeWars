/*
7 Kyu
Cat and Mouse - Easy Version

You will be given a string featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'. The string will start with the cat, and end with the mouse.

You need to find out if the cat can catch the mouse from its current position. The cat can jump over at most three characters. So:

"C.....m" returns "Escaped!" <-- more than three characters between

"C...m" returns "Caught!" <-- as there are three characters between the two, the cat can jump.

*/

function catMouse(x){
    let count = 0;
    for(let i = 0; i < x.length; i++){
        if(x[i] === '.'){
            count++;
        }
    }
    return count > 3 ? "Escaped!" : "Caught!";
}

console.log(catMouse('C....m'), "Escaped!");
console.log(catMouse('C..m'), "Caught!");
console.log(catMouse('C.....m'), "Escaped!");
