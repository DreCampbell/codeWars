/*
7 Kyu
Clean up after your Dog

You have stumbled across the divine pleasure that is owning a dog and a garden. Now time to pick up all the cr@p! :D

Given a 2D array to represent your garden, you must find and collect all of the dog cr@p - represented by '@'.

You will also be given the number of bags you have access to (bags), and the capactity of a bag (cap). If there are no bags then you can't pick anything up, so you can ignore cap.

You need to find out if you have enough capacity to collect all the cr@p and make your garden clean again.

If you do, return 'Clean', else return 'Cr@p'.

Watch out though - if your dog is out there ('D'), he gets very touchy about being watched. If he is there you need to return 'Dog!!'.

For example:

bags = 2
cap = 2
x (or garden) =
[[ _ , _ , _ , _ , _ , _ ],
 [ _ , _ , _ , _ , @ , _ ],
 [ @ , _ , _ , _ , _ , _ ]]
returns 'Clean'

//PARAMETERS: an array, the number of bags, and the capacity of each bag

//RETURNS: a string, 'Clean' or 'Cr@p'. 'Clean' if the there are enough bags with big enough capacity to hold all the crap, if the dog is in the yard, 'D', return 'Dog!!'

//EXAMPLES: 
    crap([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 2, 2, "Clean");
    crap([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 1, 1, "Cr@p");
    crap([['_','_'], ['_','@'], ['D','_']], 2, 2, "Dog!!");
    crap([['_','_','_','_'], ['_','_','_','@'], ['_','_','_', '_']], 1, 1, "Clean");
    crap([['_','_','_','_'], ['_','_','_','_'], ['_','_','_', '_']], 2, 2, "Clean");
    crap([['@','@'], ['@','@'], ['@','@']], 3, 2, "Clean");
    crap([['@','@'], ['@','@'], ['@','D']], 2, 2, "Dog!!");
    crap([['@','_'], ['_','_']], 2, 0, "Cr@p");
    crap([['_','_','_','_'], ['_','_','_','_']], 0, 1, "Clean");
    crap([['@','_'], ['_','D']], 2, 0, "Dog!!");
    crap([['_'], ['_'], ['_']], 0, 0, "Clean");
  
//PSEUDOCODE: create a variable that iterates through the garden and filters for only crap, then add the number of crap, then write a conditional that checks if the garden array includes 'D', if so return 'Dog!!', if not write a template literal that checks if the number of bags times the capacity is greater than or equal to the numOfCrap variable, if so return "Clean", if not return "Cr@p"
*/

function crap(garden, bags, cap) {
  let numOfCrap = garden
    .map((x) => x.filter((y) => y == "@").length)
    .reduce((a, b) => a + b, 0);
  return garden.join(", ").includes("D")
    ? "Dog!!"
    : bags * cap >= numOfCrap
      ? "Clean"
      : "Cr@p";
}

console.log(
  crap(
    [
      ["_", "_", "_", "_"],
      ["_", "_", "_", "@"],
      ["_", "_", "@", "_"],
    ],
    2,
    2,
  ),
  "Clean",
);
console.log(
  crap(
    [
      ["_", "_", "_", "_"],
      ["_", "_", "_", "@"],
      ["_", "_", "@", "_"],
    ],
    1,
    1,
  ),
  "Cr@p",
);
console.log(
  crap(
    [
      ["_", "_"],
      ["_", "@"],
      ["D", "_"],
    ],
    2,
    2,
  ),
  "Dog!!",
);
console.log(
  crap(
    [
      ["_", "_", "_", "_"],
      ["_", "_", "_", "@"],
      ["_", "_", "_", "_"],
    ],
    1,
    1,
  ),
  "Clean",
);
console.log(
  crap(
    [
      ["_", "_", "_", "_"],
      ["_", "_", "_", "_"],
      ["_", "_", "_", "_"],
    ],
    2,
    2,
  ),
  "Clean",
);
console.log(
  crap(
    [
      ["@", "@"],
      ["@", "@"],
      ["@", "@"],
    ],
    3,
    2,
  ),
  "Clean",
);
console.log(
  crap(
    [
      ["@", "@"],
      ["@", "@"],
      ["@", "D"],
    ],
    2,
    2,
  ),
  "Dog!!",
);
console.log(
  crap(
    [
      ["@", "_"],
      ["_", "_"],
    ],
    2,
    0,
  ),
  "Cr@p",
);
console.log(
  crap(
    [
      ["_", "_", "_", "_"],
      ["_", "_", "_", "_"],
    ],
    0,
    1,
  ),
  "Clean",
);
console.log(
  crap(
    [
      ["@", "_"],
      ["_", "D"],
    ],
    2,
    0,
  ),
  "Dog!!",
);
console.log(crap([["_"], ["_"], ["_"]], 0, 0), "Clean");
