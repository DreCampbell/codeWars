/*
8 Kyu
Polish Alphabet

There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

Your task is to change the letters with diacritics:

ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z
and print out the string without the use of the Polish letters.

For example:

"Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"

//PARAMETERS: a string

//RETURNS: return the string with any diacritics replaced with their corresponding letters

//EXAMPLES: 
    (correctPolishLetters("Jędrzej Błądziński"), "Jedrzej Bladzinski");
    (correctPolishLetters("Lech Wałęsa"), "Lech Walesa");
    (correctPolishLetters("Maria Skłodowska-Curie"), "Maria Sklodowska-Curie");

//PSEUDOCODE: split the string into an array of individual letters, iterate through the array with map and use a switch case to switch out the incorrect letters with the correct ones, then join the array to a string
*/

function correctPolishLetters(string){
    return string.split('').map(letter =>{
        switch(letter){
            case "ą": 
                return "a";
                break;
            case "ć": 
                return "c";
                break;
            case "ę": 
                return "e";
                break;
            case "ł": 
                return "l";
                break;
            case "ń": 
                return "n";
                break;
            case "ó": 
                return "o";
                break;
            case "ś": 
                return "s";
                break;
            case "ź": 
                return "z";
                break;
            case "ż": 
                return "z";
                break;
            default:
                return letter;
        }
    }).join('');
}

console.log(correctPolishLetters("Jędrzej Błądziński"), "Jedrzej Bladzinski");
console.log(correctPolishLetters("Lech Wałęsa"), "Lech Walesa");
console.log(correctPolishLetters("Maria Skłodowska-Curie"), "Maria Sklodowska-Curie");
