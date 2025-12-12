/*
7 Kyu
Check the Exam

The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

If the score < 0, return 0.

For example:

    Correct answer    |    Student's answer   |   Result         
 ---------------------|-----------------------|-----------
 ["a", "a", "b", "b"]   ["a", "c", "b", "d"]  →     6
 ["a", "a", "c", "b"]   ["a", "a", "b", "" ]  →     7
 ["a", "a", "b", "c"]   ["a", "a", "b", "c"]  →     16
 ["b", "c", "b", "a"]   ["" , "a", "a", "c"]  →     0


//PARAMETERS: two string arrays, the answer key and the student's test

//RETURNS: the students score

//EXMAPLES: 
    (checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]), 6);
    (checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]), 7);
    (checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]), 16);
    (checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]), 0);  

//PSEUDOCODE: create a variable and set it to 0, run a loop from 0 to the length of the answer key array, checking if the test array element is the same as the score, if is an empty string, add 0, if it is the same element, add 4, and if it is a different element, minus 1. Then return that the score is greater than 0, if it is return it, if not return 0
*/

function checkExam(arr1, arr2){
    let score = 0;
    for(let i = 0; i < arr1.length; i++){
        if(arr2[i] === ''){
            score += 0;
        }else if(arr1[i] === arr2[i]){
            score += 4;
        }else{
            score -= 1;
        }
    }
    return score > 0 ? score : 0;
}

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]), 6);
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]), 7);
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]), 16);
console.log(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]), 0);  