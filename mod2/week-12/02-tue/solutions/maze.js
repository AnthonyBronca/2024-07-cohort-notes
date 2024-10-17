
/*

You are given a maze. "-" and "|" are considered walls. 0s represent a path a player can take, but 1 represents the end of the path.

Write up a function/s that can find the way out of the maze.

Starting point -> [3, 0]
Ending point -> [9, 4]

Solution: [ [3, 0], [3, 1], [4, 1], [5, 1], [6, 1], [6, 2], [6, 3], [7, 3], [7, 4], [8, 4], [9, 4]  ]

HINT: We can not travel diagonally
-----------------------------------------------------
*/


// YOUR CODE HERE --- good luck, adventurer...

// 1st part of a graph function -> the ability to find a neigbbor

const findNeighbor = (graph, node) => {

    const [row, col] = node;

    const neighbors = [
        //  TOP
        [row - 1, col],
        // BOTTOM
        [row + 1, col],
        // LEFT
        [row, col - 1],
        // RIGHT
        [row, col + 1]

    ];

  // remove all the garbage neighbors not part of the problem / or if they are out of bounds
    return neighbors.filter((coords) => {
        const [x, y] = coords;
        // keep all the 0s, and keep all the 1s
        if(graph[x] && graph[x][y] === 0 || graph[x][y] === 1){
            return true;
        } else{
            return false;
        }
    })

}

// traverse and find a path -> it will use our neighbors

const solveMaze = (maze, starting, ending) => {
    // to find the shortest path out of the maze - use a queue
    const queue = [[starting]]; // inner brackets -> is a path
    const visited = new Set(); // this will allow us to handle unique paths

    const [endingX, endingY] = ending;

    let endingVal = maze[endingX][endingY];

    // let incrementcount = 0;
    while(queue.length){
        const currPath = queue.shift(); // remove from front of queue
        const lastNode = currPath[currPath.length - 1];
        const [x, y] = lastNode;
        const currVal = maze[x][y];
        // do the thing: -> check if the currentNode is the ending Node
        if(currVal === endingVal){
            return currPath;
        }

        if(!visited.has(currPath)){
            visited.add(currPath);
        }


        const neigbors = findNeighbor(maze, lastNode);
        // console.log(neigbors, "this is neighbors");
        for(let neigbor of neigbors){
            const newPath = [...currPath, neigbor];
            queue.push(newPath);
        }

    }
    return "No valid solution."
}





const maze = [
    ["-", "-", "-", "-", "-", "|",], // 0
    ["|", "-", "-",  0 ,  0 , "|",], // 1
    ["|",  0 ,  0 ,  0 , "-", "|",], // 2
    [ 0 ,  0 , "-", "-", "-", "|",], // 3
    ["|",  0 , "-",  0 , "-", "|",], // 4
    ["|",  0 , "-",  0 , "-", "|",], // 5
    ["|",  0 ,  0 ,  0 , "-", "|",], // 6
    ["|", "-", "-",  0 ,  0 , "|",], // 7
    ["|", "-", "-", "-",  0 , "|",], // 8
    ["|", "-", "-", "-",  1 , "|",], // 9
    //0    1    2    3    4    5
];
// console.log(findNeighbor(maze, [3,0]));

console.log(solveMaze(maze, [3, 0], [9, 4])); // traversal
//  [ [3, 0], [3, 1], [4, 1], [5, 1], [6, 1], [6, 2], [6, 3], [7, 3], [7, 4], [8, 4], [9, 4]  ]
