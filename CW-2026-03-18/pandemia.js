/*
7 Kyu
Pandemia

⚠️ The world is in quarantine! There is a new pandemia that struggles mankind. Each continent is isolated from each other but infected people have spread before the warning. ⚠️

🗺️ You would be given a map of the world in a type of string:

string s = "01000000X000X011X0X"

'0' : uninfected

'1' : infected

'X' : ocean
⚫ The virus can't spread in the other side of the ocean.

⚫ If one person is infected every person in this continent gets infected too.

⚫ Your task is to find the percentage of human population that got infected in the end.

☑️ Return the percentage % of the total population that got infected.

❗❗ The first and the last continent are not connected!

💡 Example:

 start: map1 = "01000000X000X011X0X"
 end:   map1 = "11111111X000X111X0X"
 total = 15
 infected = 11
 percentage = 100*11/15 = 73.33333333333333
➕ For maps without oceans "X" the whole world is connected.

➕ For maps without "0" and "1" return 0 as there is no population.

//PARAMETERS: a string with "0", "1", & "X" representing uninfected people, infected people, and the ocean separating contenints

//RETURNS: a number, the percentage of the world who are infected 

//EXAMPLES: 
    ( infected("01000000X000X011X0X"), 73.33333333333333 );
    ( infected("01X000X010X011XX"), 72.72727272727273 );
    ( infected("XXXXX"), 0 );
    ( infected("0000000010"), 100 );
    ( infected("X00X000000X10X0100"), 42.857142857142854 );

//PSEUDOCODE: split the string into an array separated at "X"; iterate through each string array checking if it includes "1", if so change all elements to "1"
*/

function infected(s) {
  let infected = 0;
  s = s
    .split("X")
    .map((x) => (x.split("").includes("1") ? x.replaceAll("0", "1") : x))
    .join("")
    .trim();

  for (let i = 0; i < s.length; i++) {
    if (s[i] === null) {
      s[i] = 0;
    }
    if (s[i].includes("1")) {
      infected += s[i].length;
    }
  }

  let population = s.length;

  return infected > 0 ? (infected / population) * 100 : 0;
}

console.log(infected("01000000X000X011X0X"), 73.33333333333333);
console.log(infected("01X000X010X011XX"), 72.72727272727273);
console.log(infected("XXXXX"), 0);
console.log(infected("0000000010"), 100);
console.log(infected("X00X000000X10X0100"), 42.857142857142854);
