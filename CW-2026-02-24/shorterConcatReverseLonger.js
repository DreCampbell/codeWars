/*
7 Kyu
Shorter Concat [Reverse Longer]

Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.

Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
If a and b have the same length treat a as the longer producing b+reverse(a)+b

//PARAMETERS: two strings

//RETURNS: the shorter string around the reversed longer string

//EXAMPLES: 
    (shorterReverseLonger("first", "abcde"), "abcdetsrifabcde", 'Incorrect answer for a="first", b="abcde"');
    (shorterReverseLonger("hello", "bau"  ), "bauollehbau"    , 'Incorrect answer for a="hello", b="bau"'  );
    (shorterReverseLonger("fghi",  "abcde"), "fghiedcbafghi"  , 'Incorrect answer for a="fghi", b="abcde"' );

//PSEUDOCODE: create a variable to hold the shorter and longer strings, then write a conditional checking if string a is longer or string b is longer and reassign to the correct variable, then using a template literal return the shorter string around the longer string
*/

function shorterReverseLonger(a, b){
    let shorter, longer;

    if(a.length < b.length){
        shorter = a;
        longer = b;
    }else{
        shorter = b;
        longer = a;
    }
    return `${shorter}${longer.split('').reverse().join('')}${shorter}`; 
}

console.log(shorterReverseLonger("first", "abcde"), "abcdetsrifabcde", 'Incorrect answer for a="first", b="abcde"');
console.log(shorterReverseLonger("hello", "bau"  ), "bauollehbau"    , 'Incorrect answer for a="hello", b="bau"'  );
console.log(shorterReverseLonger("fghi",  "abcde"), "fghiedcbafghi"  , 'Incorrect answer for a="fghi", b="abcde"' );