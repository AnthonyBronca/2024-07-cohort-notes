/*

Write a function called printVowels that will print all the vowels in a nested array, where the subArray has 1 string per element:

Example:
    [
        ["A", "n", "t", "h", "o", "n", "y"],
        ["S", "a", "m"],
        ["E", "d"]
    ]


Prints out:
 "A",
 "o",
 "a",
 "E"

*/



let example1 = [
    ["A", "n", "t", "h", "o", "n", "y"],
    ["S", "a", "m"],
    ["E", "d"]
]

let example2 = [
    ["W", "i", "l", "l"],
    ["G", "a", "b", "e"],
    ["J", "e", "s", "s", "e"]
]

printVowels(example1); // "A". "o", "a","E"
printVowels(example2); // "i", "a", "e", "e", "e"
