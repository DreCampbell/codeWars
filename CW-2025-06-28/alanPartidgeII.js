/*
8 Kyu
Alan Partridge II - Apple Turnover

Task
Your job is simple, if x squared is more than 1000, return It's hotter than the sun!!, else, return Help yourself to a honeycomb Yorkie for the glovebox.

//PARAMETERS: a positive number or a string number

//RETURNS: if x squared is greater than 1000, return 'It's hotter than the sun!!', if not return 'Help yourself to a honeycomb Yorkie for the glovebox.'

//EXAMPLES: 
    (apple('50'), 'It\'s hotter than the sun!!'); 
    (apple(4), 'Help yourself to a honeycomb Yorkie for the glovebox.'); 

//PSEUDOCODE: write a conditional checking if x ** 2 is greater than 1000, and return the correct statement based on that
*/

function apple(x){
    return x**2 > 1000 ? `It's hotter than the sun!!` : `Help yourself to a honeycomb Yorkie for the glovebox.`;
}

console.log(apple('50'), 'It\'s hotter than the sun!!'); 
console.log(apple(4), 'Help yourself to a honeycomb Yorkie for the glovebox.'); 