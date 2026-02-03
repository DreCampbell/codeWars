/*
7 Kyu
My Language Skills

Task
You are given a dictionary-like object (implementation may vary by language) containing languages as keys and your corresponding test results as values. Return the list of languages where your score is at least 60, in descending order of the scores.

Note: the scores will always be unique (so no duplicate values)

Examples
Input object with key-value pairs:
"Java" -> 10, "Ruby" -> 80, "Python" -> 65
Ouput:
[ "Ruby", "Python" ]

Input object with key-value pairs:
"Hindi" -> 60, "Greek" -> 71, "Dutch" -> 93
Output:
[ "Dutch", "Greek", "Hindi" ]

Input object with key-value pairs:
"C++" -> 50, "ASM" -> 10, "Haskell" -> 20
Output:
[ ]

//PARAMETERS: an object of language and test score key and value pairs

//RETURNS: the languages where the test score is >= 60

//EXAMPLES: 
    (myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65}), ["Ruby", "Python"])
    (myLanguages({"Hindi" : 60, "Greek" : 71, "Dutch" : 93}), ["Dutch", "Greek", "Hindi"])
    (myLanguages({"C++" : 50, "ASM" : 10, "Haskell" : 20}), [])

//PSEUDOCODE: use the Object.keys() method to get the keys of the object, then filter for scores that are >= 60, then sort in descending order
*/

function myLanguages(results){
    return Object.keys(results).filter(score => results[score] >= 60).sort((a, b) => results[b] - results[a])
}

console.log(myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65}), ["Ruby", "Python"])
console.log(myLanguages({"Hindi" : 60, "Greek" : 71, "Dutch" : 93}), ["Dutch", "Greek", "Hindi"])
console.log(myLanguages({"C++" : 50, "ASM" : 10, "Haskell" : 20}), [])