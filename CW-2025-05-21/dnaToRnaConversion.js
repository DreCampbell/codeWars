/*
8 Kyu
DNA to RNA Conversion

Description:
Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"
The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

// PARAMETERS: a string of DNA bases

//RETURNS: convert the T in the DNA string to U for the RNA string

//EXAMPLES: 
    (DNAtoRNA("TTTT"), "UUUU")
    (DNAtoRNA("GCAT"), "GCAU")
    (DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC")

//PSEUDOCODE: use the replaceAll method to replace 'T' with 'U'
*/

function DNAtoRNA(dna) {
  return dna.replaceAll('T', 'U');
}

console.log(DNAtoRNA("TTTT"), "UUUU")
console.log(DNAtoRNA("GCAT"), "GCAU")
console.log(DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC")