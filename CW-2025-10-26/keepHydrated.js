/*
8 Kyu
Keep Hydrated

Description:
Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded down.

For example:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5

//PARAMETER: a number, the time in hours Nathan rides

//RETURNS: the number of litres he would drink in the time rode, rounded down

//EXAMPLES: 
    litres(1.4), 0, 'litres(1.4) should return 0';
    litres(12.3), 6, 'litres(12.3) should return 6';
    litres(0.82), 0, 'litres(0.82) should return 0';
    litres(11.8), 5, 'litres(11.8) should return 5';
    litres(1787), 893, 'litres(1787) should return 893';

//PSEUDOCODE: divide the time my 2 then round down with Math.floor
*/

function litres(time){
    return Math.floor(time/2);
}

console.log(litres(1.4), 0, 'litres(1.4) should return 0');
console.log(litres(12.3), 6, 'litres(12.3) should return 6');
console.log(litres(0.82), 0, 'litres(0.82) should return 0');
console.log(litres(11.8), 5, 'litres(11.8) should return 5');
console.log(litres(1787), 893, 'litres(1787) should return 893');
