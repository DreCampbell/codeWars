/*
7 Kyu
Interview Question (easy)

You receive the name of a city as a string, and you need to return a string that shows how many times each letter shows up in the string by using asterisks (*).

For example:

"Chicago"  -->  "c:**,h:*,i:*,a:*,g:*,o:*"
As you can see, the letter c is shown only once, but with 2 asterisks.

The return string should include only the letters (not the dashes, spaces, apostrophes, etc). There should be no spaces in the output, and the different letters are separated by a comma (,) as seen in the example above.

Note that the return string must list the letters in order of their first appearance in the original string.

More examples:

"Bangkok"    -->  "b:*,a:*,n:*,g:*,k:**,o:*"
"Las Vegas"  -->  "l:*,a:**,s:**,v:*,e:*,g:*"
Have fun! ;)

//PARAMETERS: a name of a city as a string

//RETURNS: a string that shows how many times each letter appears in the words indicated by *'s

//EXAMPLES: 
    (getStrings("Chicago"), "c:**,h:*,i:*,a:*,g:*,o:*");
    (getStrings("Bangkok"), "b:*,a:*,n:*,g:*,k:**,o:*");
    (getStrings("Las Vegas"), "l:*,a:**,s:**,v:*,e:*,g:*");

//PSEUDOCODE: reassign the city string to all lowercase, create a variable holding an empty object as well as an empty string; run a for loop for each element in the city string, if the element does not exist, assign '*' to the element, if it does, add '*'; then run another for loop for each key in the object and if the key does not equal " " add the key + ":" plus the object key + ","; then using the substring method return the first to the last index of the str
*/

function getStrings(city) {
  city = city.toLowerCase();
  let obj = {};
  let str = "";

  for (let elem of city) {
    if (!(elem in obj)) {
      obj[elem] = "*";
    } else {
      obj[elem] += "*";
    }
  }

  for (let key in obj) {
    if (key != " ") {
      str += key + ":" + obj[key] + ",";
    }
  }
  return str.substring(0, str.length - 1);
}

console.log(getStrings("Chicago"), "c:**,h:*,i:*,a:*,g:*,o:*");
console.log(getStrings("Bangkok"), "b:*,a:*,n:*,g:*,k:**,o:*");
console.log(getStrings("Las Vegas"), "l:*,a:**,s:**,v:*,e:*,g:*");
