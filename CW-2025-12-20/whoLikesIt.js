/*
6 Kyu
Who Likes It?

You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

//PARAMETERS: an array of names

//RETURNS: a string, the list of names who likes it

//EXAMPLES: 
    (likes([]), 'no one likes this');
    (likes(['Peter']), 'Peter likes this');
    (likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
    (likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
    (likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');

//PSEUDOCODE: create a conditional checking if the array has any elements, if not, return 'no one likes this, if there are 1, 2 or 3 names in the array, return those names and the "like this" string, if more than 3 names are in the array return the first two names and 'and __ others like this'
*/

function likes(names){
    if(names.length == 0){
        return `no one likes this`
    }else if(names.length == 1){
        return `${names.join(', ')} likes this`
    }else if(names.length == 2){
        return `${names[0]} and ${names[1]} like this`
    }else if(names.length == 3){
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
    }else if(names.length > 3){
        return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    }
}

console.log(likes([]), 'no one likes this');
console.log(likes(['Peter']), 'Peter likes this');
console.log(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
console.log(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');
