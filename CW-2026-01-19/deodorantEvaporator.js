/*
7 Kyu
Deodorant Evaporator

This program tests the life of an evaporator containing a gas.

We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.

The program reports the nth day (as an integer) on which the evaporator will be out of use.

Example:
evaporator(10, 10, 5) -> 29
Note:
Content is in fact not necessary in the body of the function "evaporator", you can use it or not use it, as you wish. Some people might prefer to reason with content, some other with percentages only. It's up to you but you must keep it as a parameter because the tests have it as an argument.

//PARAMETERS: 3 positive numbers, the content remaining in the container, the percentage of that content lost each day, and the percentage when the content is no longer usable

//RETURN: the number of days until the content is no longer usable

//EXAMPLES: 
    evaporator(10, 10, 10, 22);
    evaporator(10, 10, 5, 29);
    evaporator(100, 5, 5, 59);
    evaporator(50, 12, 1, 37);

//PSEUDOCODE: crate a variable to hold the number of days and set it to 0; reassign the evapPerDay by dividing it by 100; then reassign the threshold to the threshold divided by 100 * by the content; then run a while loop where you subtract the percentage/day by the content remaining and reassign the content to that new number, while content is greater than the threshold and add one to the days counter
*/

function evaporator(content, evapPerDay, threshold){
    let daysTilEmpty = 0;
    threshold = content * threshold/100;
    evapPerDay = evapPerDay/100;
    while(content > threshold){
        content = content - (content * evapPerDay);
        daysTilEmpty++;
    }
    return daysTilEmpty;
}

console.log(evaporator(10, 10, 10), 22);
console.log(evaporator(10, 10, 5), 29);
console.log(evaporator(100, 5, 5), 59);
console.log(evaporator(50, 12, 1), 37);