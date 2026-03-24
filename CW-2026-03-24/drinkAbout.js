/*
8 Kyu
Drink About

Kids drink toddy.
Teens drink coke.
Young adults drink beer.
Adults drink whisky.
Make a function that receive age, and return what they drink.

Rules:

Children under 14 old.
Teens under 18 old.
Young under 21 old.
Adults have 21 or more.
Examples: (Input --> Output)

13 --> "drink toddy"
17 --> "drink coke"
18 --> "drink beer"
20 --> "drink beer"
30 --> "drink whisky"


//PARAMETERS: a number represents an age

//RETURNS: a string of what people that age drink

//EXAMPLES: 
    (peopleWithAgeDrink(13), "drink toddy");
    (peopleWithAgeDrink(17), "drink coke");
    (peopleWithAgeDrink(18), "drink beer");
    (peopleWithAgeDrink(20), "drink beer");
    (peopleWithAgeDrink(30), "drink whisky");

//PSEUDOCODE: write a conditionals based on the rules for what people of certain ages drink
*/

function peopleWithAgeDrink(age) {
  return age < 14
    ? "drink toddy"
    : age < 18
      ? "drink coke"
      : age < 21
        ? "drink beer"
        : "drink whisky";
}

console.log(peopleWithAgeDrink(13), "drink toddy");
console.log(peopleWithAgeDrink(17), "drink coke");
console.log(peopleWithAgeDrink(18), "drink beer");
console.log(peopleWithAgeDrink(20), "drink beer");
console.log(peopleWithAgeDrink(30), "drink whisky");
