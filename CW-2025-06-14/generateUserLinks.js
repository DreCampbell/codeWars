/*
8 Kyu
Generate User Links

Your task is to create userlinks for the url, you will be given a username and must return a valid link.

Example
generate_link('matt c')
http://www.codewars.com/users/matt%20c
*/

const generateLink = user => `http://www.codewars.com/users/${encodeURIComponent(user)}`;


'http://www.codewars.com/users/J.{Y5}8…'
'http://www.codewars.com/users/J.%7BY5…'


console.log(generateLink('matt c'),'http://www.codewars.com/users/matt%20c');
console.log(generateLink('g964'),'http://www.codewars.com/users/g964');
console.log(generateLink('GiacomoSorbi'),'http://www.codewars.com/users/GiacomoSorbi');
console.log(generateLink('ZozoFouchtra'),'http://www.codewars.com/users/ZozoFouchtra');
console.log(generateLink('colbydauph'),'http://www.codewars.com/users/colbydauph');
