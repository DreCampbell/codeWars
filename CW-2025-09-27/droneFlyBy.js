/*
7 Kyu
Drone Fly-By

The other day I saw an amazing video where a guy hacked some wifi controlled lightbulbs by flying a drone past them. Brilliant.

In this kata we will recreate that stunt... sort of.

You will be given two strings: lamps and drone. lamps represents a row of lamps, currently off, each represented by x. When these lamps are on, they should be represented by o.

The drone string represents the position of the drone T (any better suggestion for character??) and its flight path up until this point =. The drone always flies left to right, and always begins at the start of the row of lamps. Anywhere the drone has flown, including its current position, will result in the lamp at that position switching on.

Return the resulting lamps string. See example tests for more clarity.

//PARAMETERS: a string of lights (x == off & o == on), and a string of a drone's path (x == previoius position && T equals current position)

//RETURNS: switch the lights on where the drone has flown past

//EXAMPLES: 
    (flyBy('xxxxxx', '====T'), 'ooooox');
    (flyBy('xxxxxxxxx', '==T'), 'oooxxxxxx'); 
    (flyBy('xxxxxxxxxxxxxxx', '=========T'), 'ooooooooooxxxxx'); 

//PSEUDOCODE: get the length of the drone path string, split the lamps string into an array and iterate through with map, changing any index less than the length change it to 'o', else leave at 'x'
*/

function flyBy(lamps, drone){
    let dronePath = drone.length;
    return lamps.split('').map((x, i) => i < dronePath ? 'o' : 'x').join('');
}

console.log(flyBy('xxxxxx', '====T'), 'ooooox');
console.log(flyBy('xxxxxxxxx', '==T'), 'oooxxxxxx'); 
console.log(flyBy('xxxxxxxxxxxxxxx', '=========T'), 'ooooooooooxxxxx'); 