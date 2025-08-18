/*
7 Kyu
Complementary DNA

Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"

//PARAMETERS: a string 

//RETURNS: the string converted to the complementary dna strand

//EXAMPLES :
    (dnaStrand("AAAA"),"TTTT","String AAAA is")
    (dnaStrand("ATTGC"),"TAACG","String ATTGC is")
    (dnaStrand("GTAT"),"CATA","String GTAT is")

//PSEUDOCODE: write a switch case to return the correct amino acid
*/

function dnaStrand(dna){
    return dna.split('').map(x => {
        switch(x){
            case('A'): 
                return 'T';
            break;
            case('T'): 
                return 'A';
            break;
            case('C'): 
                return 'G';
            break;
            case('G'): 
                return 'C';
            break;
        }
    }).join('');
}

console.log(dnaStrand("AAAA"),"TTTT","String AAAA is")
console.log(dnaStrand("ATTGC"),"TAACG","String ATTGC is")
console.log(dnaStrand("GTAT"),"CATA","String GTAT is")
