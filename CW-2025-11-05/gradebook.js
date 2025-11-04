/*
8 Kyu
Grasshopper - Grade book

Description:
Grade book
Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

//PARAMETERS: three scores

//RETURNS: the average of the scores represented by the letter value for that grade

//EXAMPLES: 
    (getGrade(95,90,93), 'A')
    (getGrade(100,85,96), 'A')
    (getGrade(92,93,94), 'A')

//PSEUDOCODE: create a variable to hold the average of the scores, then write a switch case to return the corresponding grade value
*/

function getGrade(s1, s2, s3){
    let score = (s1+s2+s3)/3;
    switch(true){
        case score >= 90:
            return 'A';
            break;
        case score >=80:
            return 'B';
            break;
        case score >= 70:
            return 'C';
            break;
        case score >= 60:
            return 'D';
            break;
        default: 
            return 'F';
    }
}

console.log(getGrade(95,90,93), 'A')
console.log(getGrade(100,85,96), 'A')
console.log(getGrade(92,93,94), 'A')
