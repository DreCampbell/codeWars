/*
7 Kyu
Keypad Horror

Having two standards for a keypad layout is inconvenient!
Computer keypad's layout:
7 8 9  \n
4 5 6  \n
1 2 3  \n
  0 \n

Cell phone keypad's layout:
1 2 3\n 
4 5 6\n  
7 8 9\n  
  0\n

Solve the horror of unstandardized keypads by providing a function that converts computer input to a number as if it was typed on a phone.

Example:
"789" -> "123"

Notes:
You get a string with numbers only

//PARAMETERS: a string of numbers

//RETURNS: the string as if the numbers on a computer were in the place where they appear on a phone

//EXAMPLES: 
    computerToPhone("0789456123", "0123456789");
    computerToPhone("000", "000");
    computerToPhone("94561", "34567");
    computerToPhone("", "");

//PSEUDOCODE: split the string into an array, iterate through the string, then use a switch case to change the numbers, then join the array back to a string
*/

function computerToPhone(numbers) {
  return numbers
    .split("")
    .map((n) => {
      switch (n) {
        case "1":
          return "7";
          break;
        case "2":
          return "8";
          break;
        case "3":
          return "9";
          break;
        case "7":
          return "1";
          break;
        case "8":
          return "2";
          break;
        case "9":
          return "3";
          break;
        default:
          return n;
      }
    })
    .join("");
}

console.log(computerToPhone("0789456123"), "0123456789");
console.log(computerToPhone("000"), "000");
console.log(computerToPhone("94561"), "34567");
console.log(computerToPhone(""), "");
