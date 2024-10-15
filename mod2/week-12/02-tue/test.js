const maze = [
    ["-", "-", "-", "-", "-", "|",], // 0
    ["|", "-", "-", 0, 0, "|",], // 1
    ["|", 0, 0, 0, "-", "|",], // 2
    [0, 0, "-", "-", "-", "|",], // 3
    ["|", 0, "-", 0, "-", "|",], // 4
    ["|", 0, "-", 0, "-", "|",], // 5
    ["|", 0, 0, 0, "-", "|",], // 6
    ["|", "-", "-", 0, 0, "|",], // 7
    ["|", "-", "-", "-", 0, "|",], // 8
    ["|", "-", "-", "-", 1, "|",], // 9
    //   0    1    2    3    4    5
];

/*

You are given a maze. "-" and "|" are considered walls. 0s represent a path a player can take, but 1 represents the end of the path.

Write up a function/s that can find the way out of the maze.

Starting point -> [3, 0]
Ending point -> [9, 4]

Solution: [ [3, 0], [3, 1], [4, 1], [5, 1], [6, 1], [6, 2], [6, 3], [7, 3], [7, 4], [8, 4], [9, 4]  ]

HINT: We can not travel diagonally

*/

// YOUR CODE HERE

console.log(solveMaze(maze, [3, 0], [9, 4]));
//  [ [3, 0], [3, 1], [4, 1], [5, 1], [6, 1], [6, 2], [6, 3], [7, 3], [7, 4], [8, 4], [9, 4]  ]
