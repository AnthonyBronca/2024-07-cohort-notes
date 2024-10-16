
/*

Write a function that returns the total number of valid paths to get to the end

WE CAN NOT MOVE DIAGONALLY

Example:


valid nodes we can walk on -> 1's
invalid nodes we can not walk on -> 0's

Starting point: [2, 0]
Ending Point: [2, 3]



Valid Paths:

A: [ [2,0], [2, 1], [2, 2], [2,3] ]
B: [ [2,0], [2, 1], [3, 1], [4, 1], [5, 1], [5, 2], [5, 3], [4, 3], [3, 3], [2, 3]]

Answer: Number of valid paths - > 2

[
    [0,0,0,0],
    [0,0,0,0],
    [1,1,1,1],
    [0,1,0,1],
    [0,1,0,1],
    [0,1,1,1],
]

HINTTTTT!! YOU MAY NEED TO USE STRING PATHS

*/

// YOUR CODE HERE






// ------------------------- DO NOT TOUCH BELOW THIS LINE -----------------
const maze1 = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 1, 0, 1],
    [0, 1, 0, 1],
    [0, 1, 1, 1],
]; // 2 valid paths from [2,0] -> [2, 3]

const maze2 = [
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [1, 1, 1, 0],
]; // 1 valid path from [0, 2] -> [2, 0]

const maze3 = [
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0],
    [1, 1, 1, 1]
]; // 0 valid paths from [0, 2] -> [3, 0]

console.log(findPath(maze1, [2, 0], [2, 3]));
console.log(findPath(maze2, [0, 2], [2, 0]));
console.log(findPath(maze3, [0, 2], [3, 0]));
