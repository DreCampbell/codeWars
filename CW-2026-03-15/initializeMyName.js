/*
7 Kyu
Initialize My Name

Some people just have a first name; some people have first and last names and some people have first, middle and last names.

You task is to initialize the middle names (if there is any).

Examples
'Jack Ryan'                   => 'Jack Ryan'
'Lois Mary Lane'              => 'Lois M. Lane'
'Dimitri'                     => 'Dimitri'
'Alice Betty Catherine Davis' => 'Alice B. C. Davis'

//PARAMETERS: a string name

//RETURNS: the name with any middle names initialized

//EXAMPLES: 
    (initializeNames('Dimitri'), 'Dimitri');
    (initializeNames('Jack Ryan'), 'Jack Ryan');
    (initializeNames('Lois Mary Lane'), 'Lois M. Lane');
    (initializeNames('Alice Betty Catherine Davis'), 'Alice B. C. Davis');

//PSEUDOCODE: split the string into an array of names, if the array is 2 names or less return as a joined string, else iterate through the array and if the index is not the first or last name, return the first letter of the name with a '.'
*/

function initializeNames(name) {
  name = name.split(" ");
  if (name.length <= 2) {
    return name.join(" ");
  } else {
    return name
      .map((x, i) => {
        if (i == 0 || i == name.length - 1) {
          return name[i];
        } else {
          return `${name[i][0]}.`;
        }
      })
      .join(" ");
  }
}

console.log(initializeNames("Dimitri"), "Dimitri");
console.log(initializeNames("Jack Ryan"), "Jack Ryan");
console.log(initializeNames("Lois Mary Lane"), "Lois M. Lane");
console.log(
  initializeNames("Alice Betty Catherine Davis"),
  "Alice B. C. Davis",
);
