/*
8 Kyu
Will You Make It?

Description:
You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

Considering these factors, write a function that tells you if it is possible to get to the pump or not.

Function should return true if it is possible and false if not.

//PARAMETERS: 3 numbers, the distance to the fuel pump, your car's fuel efficiency, and the gallons of fuel left

//RETURNS: a boolean, true if you have enough fuel to get to the next pump

//EXAMPLES: 
    (zeroFuel(50, 25, 2), true);
    (zeroFuel(100, 50, 1), false);

//PSEUDOCODE: write a ternary operator checking if the distance to the pump is equal or less than the mpg times the gallons of fuel left
*/

function zeroFuel(distanceToPump, mpg, fuelLeft){
    return distanceToPump <= mpg * fuelLeft;
}

console.log(zeroFuel(50, 25, 2), true);
console.log(zeroFuel(100, 50, 1), false);