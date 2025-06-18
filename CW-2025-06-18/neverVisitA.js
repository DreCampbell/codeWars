/*
8 Kyu?
Never visit a...!?

Complete the function which get an input number n such that n >= 10 and n < 10000, then:

Sum all the digits of n.
Subtract the sum from n, and it is your new n.
If the new n is in the list below return the associated fruit, otherwise return back to task 1.
Example
n = 325
sum = 3+2+5 = 10
n = 325-10 = 315 (not in the list)
sum = 3+1+5 = 9
n = 315-9 = 306 (not in the list)
sum = 3+0+6 = 9
n =306-9 = 297 (not in the list)
.
.
.
...until you find the first n in the list below.

There is no preloaded code to help you. This is not about coding skills; think before you code

1-kiwi
2-pear
3-kiwi
4-banana
5-melon
6-banana
7-melon
8-pineapple
9-apple
10-pineapple
11-cucumber
12-pineapple
13-cucumber
14-orange
15-grape
16-orange
17-grape
18-apple
19-grape
20-cherry
21-pear
22-cherry
23-pear
24-kiwi
25-banana
26-kiwi
27-apple
28-melon
29-banana
30-melon
31-pineapple
32-melon
33-pineapple
34-cucumber
35-orange
36-apple
37-orange
38-grape
39-orange
40-grape
41-cherry
42-pear
43-cherry
44-pear
45-apple
46-pear
47-kiwi
48-banana
49-kiwi
50-banana
51-melon
52-pineapple
53-melon
54-apple
55-cucumber
56-pineapple
57-cucumber
58-orange
59-cucumber
60-orange
61-grape
62-cherry
63-apple
64-cherry
65-pear
66-cherry
67-pear
68-kiwi
69-pear
70-kiwi
71-banana
72-apple
73-banana
74-melon
75-pineapple
76-melon
77-pineapple
78-cucumber
79-pineapple
80-cucumber
81-apple
82-grape
83-orange
84-grape
85-cherry
86-grape
87-cherry
88-pear
89-cherry
90-apple
91-kiwi
92-banana
93-kiwi
94-banana
95-melon
96-banana
97-melon
98-pineapple
99-apple
100-pineapple

//PARAMETERS: a number, 10 >= n < 10000

//RETURNS: sum all the digits of n, then subtract n from that sum, and if that new number is between 1 and 100 return the assigned fruit

//EXAMPLES: 
    (subtractSum(10), "apple");

//PSEUDOCODE: run a do while loop, reassigning n to n minus n parsed to a string, split to an array, converted to a number with map, then reduced to a sum with reduce, while that new n is less than or equal to 100
*/
function SubtractSum(n){
    do{
        n = n - (n.toString().split('').map(Number).reduce((acc, cur) => acc + cur, 0)); 
    } while(n >= 100)
    switch(n){
        case 1: return "kiwi";
        case 2: return "pear";
        case 3: return "kiwi";
        case 4: return "banana";
        case 5: return "melon";
        case 6: return "banana";
        case 7: return "melon";
        case 8: return "pineapple";
        case 9: return "apple";
        case 10: return "pineapple";
        case 11: return "cucumber";
        case 12: return "pineapple";
        case 13: return "cucumber";
        case 14: return "orange";
        case 15: return "grape";
        case 16: return "orange";
        case 17: return "grape";
        case 18: return "apple";
        case 19: return "grape";
        case 20: return "cherry";
        case 21: return "pear";
        case 22: return "cherry";
        case 23: return "pear";
        case 24: return "kiwi";
        case 25: return "banana";
        case 26: return "kiwi";
        case 27: return "apple";
        case 28: return "melon";
        case 29: return "banana";
        case 30: return "melon";
        case 31: return "pineapple";
        case 32: return "melon";
        case 33: return "pineapple";
        case 34: return "cucumber";
        case 35: return "orange";
        case 36: return "apple";
        case 37: return "orange";
        case 38: return "grape";
        case 39: return "orange";
        case 40: return "grape";
        case 41: return "cherry";
        case 42: return "pear";
        case 43: return "cherry";
        case 44: return "pear";
        case 45: return "apple";
        case 46: return "pear";
        case 47: return "kiwi";
        case 48: return "banana";
        case 49: return "kiwi";
        case 50: return "banana";
        case 51: return "melon";
        case 52: return "pineapple";
        case 53: return "melon";
        case 54: return "apple";
        case 55: return "cucumber";
        case 56: return "pineapple";
        case 57: return "cucumber";
        case 58: return "orange";
        case 59: return "cucumber";
        case 60: return "orange";
        case 61: return "grape";
        case 62: return "cherry";
        case 63: return "apple";
        case 64: return "cherry";
        case 65: return "pear";
        case 66: return "cherry";
        case 67: return "pear";
        case 68: return "kiwi";
        case 69: return "pear";
        case 70: return "kiwi";
        case 71: return "banana";
        case 72: return "apple";
        case 73: return "banana";
        case 74: return "melon";
        case 75: return "pineapple";
        case 76: return "melon";
        case 77: return "pineapple";
        case 78: return "cucumber";
        case 79: return "pineapple";
        case 80: return "cucumber";
        case 81: return "apple";
        case 82: return "grape";
        case 83: return "orange";
        case 84: return "grape";
        case 85: return "cherry";
        case 86: return "grape";
        case 87: return "cherry";
        case 88: return "pear";
        case 89: return "cherry";
        case 90: return "apple";
        case 91: return "kiwi";
        case 92: return "banana";
        case 93: return "kiwi";
        case 94: return "banana";
        case 95: return "melon";
        case 96: return "banana";
        case 97: return "melon";
        case 98: return "pineapple";
        case 99: return "apple";
        case 100: return "pineapple";
    }
}

// function SubtractSum(getSum){
//     return getSum;
// }

console.log(SubtractSum(10), "apple");