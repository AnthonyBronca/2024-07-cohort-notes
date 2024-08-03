/*

THIS IS A CHALLENGE PROBLEM


Write a function called indexOfOnes. It will take in an array of arrays, where each element can be either a 0 or a 1.
Return an array of arrays, where the subarray tells us the index of the subarray, and the index within the subarray where a 1 was found.

Example:

let arr = [
    [0,1,0], 0
    [0,0,1], 1
    [1,0,0,] 2
]


Output should be: -> [[0,1], [1,2], [2,0]].
Explanation: A 1 was found in subarray at index 0. wtihin that subarray, the 1 was at index 1. Hence: [0,1]
Another 1 was found in subarray at index 1. Within that subarray, the 1 was found at index 2. hence: [1,2]
Another 1 was found in aubarray at index 2. Within that subarray, the 1 was found at index 9. hence: [2,0]




*/



let circutBoard = [
    [0,1,0],
    [1,1,0],
    [0,0,0],
    [0,0,1]
];

console.log(indexOfOnes(circutBoard)); // [[0,1],[1,0],[1,1],[3,2]];
