/*
8 Kyu
Pirates!! Are the Cannons Ready!??

Ahoy Matey!

Welcome to the seven seas.

You are the captain of a pirate ship.

You are in battle against the royal navy.

You have cannons at the ready.... or are they?

Your task is to check if the gunners are loaded and ready, if they are: Fire!

If they aren't ready: Shiver me timbers!

Your gunners for each test case are 2, 3 or 4.

When you check if they are ready their answers are in a dictionary and will either be: aye or nay

Firing with less than all gunners ready is non-optimum (this is not fire at will, this is fire by the captain's orders or walk the plank, dirty sea-dog!)

If all answers are 'aye' then Fire! if one or more are 'nay' then Shiver me timbers!

//PARAMETERS: an object with key value pairs of the names of the gunners and whether they are ready to fire 'aye' or not 'nay'

//RETURNS: if all gunners are ready to fire, then return 'Fire!', if not then return 'Shiver me timbers!'

//EXAMPLES: 
    let a = {'Mike':'aye','Joe':'aye','Johnson':'aye','Peter':'aye'};
    let b = {'Mike':'aye','Joe':'nay','Johnson':'aye','Peter':'aye'};

    (cannonsReady(a), 'Fire!');
    (cannonsReady(b), 'Shiver me timbers!');


//PSEUDOCODE: run a for...in loop checking if the value of 'nay' in in the gunners object, if so return 'Shiver me timbers!', outside of the for...in loop return 'Fire!'
*/

function cannonsReady(gunners) {
    for(reply in gunners){
        if(gunners[reply] === 'nay'){
            return 'Shiver me timbers!';
        }
    };
    return 'Fire!';
}

let a = {'Mike':'aye','Joe':'aye','Johnson':'aye','Peter':'aye'};
let b = {'Mike':'aye','Joe':'nay','Johnson':'aye','Peter':'aye'};

console.log(cannonsReady(a), 'Fire!');
console.log(cannonsReady(b), 'Shiver me timbers!');