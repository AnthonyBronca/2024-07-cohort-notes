// const maze = [
//     ["-", "-", "-", "-", "-", "|",], // 0
//     ["|", "-", "-",  0 ,  0 , "|",], // 1
//     ["|",  0 ,  0 ,  0 , "-", "|",], // 2
//     [ 0 ,  0 , "-", "-", "-", "|",], // 3
//     ["|",  0 , "-",  0 , "-", "|",], // 4
//     ["|",  0 , "-",  0 , "-", "|",], // 5
//     ["|",  0 ,  0 ,  0 , "-", "|",], // 6
//     ["|", "-", "-",  0 ,  0 , "|",], // 7
//     ["|", "-", "-", "-",  0 , "|",], // 8
//     ["|", "-", "-", "-",  1 , "|",], // 9
//     //0    1    2    3    4    5
// ];

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
// 1st part of a graph -> finding neighbors
const findNeighbors = (graph, node) => {
    const [row, col ] = node;
    // console.log(row, col);
    const neighbors = [
        // top
        [row - 1, col],
        // bottom
        [row + 1, col],
        // left
        [row, col - 1],
        // right
        [row, col + 1]
    ];

    // filter out the non-viable neighbors, keep anything that is a 0 or a 1
    return neighbors.filter((coord) => {
        const [ x, y ] = coord;
        return graph[x] && (graph[x][y] === 0 || graph[x][y] === 1);
    })

}

// 2nd part of a graph function -> do the traversal (walk )

const solveMaze = (graph, starting, ending) => {

    const queue = [[starting]]; // a queue contains many paths. a path contains many nodes
    const visited = new Set();

    const [endingX, endingY] = ending;
    const endingVal = graph[endingX][endingY];

    // debugging
    // let iterationCount = 0;
    while(queue.length){
        const currPath = queue.shift();
        const lastNode = currPath[currPath.length - 1];
        const [ x, y ] = lastNode;
        const currVal = graph[x][y];

        // check to see if the last node in our path is the exit (1)
        if(currVal === endingVal){
            return currPath;
        }

        if(!visited.has(currPath)){
            visited.add(currPath);
        }

        const neigbors = findNeighbors(graph, lastNode)
        // console.log(neigbors)
        for(let neighbor of neigbors){
            const newPath = [...currPath, neighbor];
            queue.push(newPath);
        }

        // console.log(queue)
        // iterationCount++;
    }
    return "No solution to the maze";

};


console.log(solveMaze(maze, [3, 0], [9, 4])); // traversal -> gives the path that we want to take
//  [ [3, 0], [3, 1], [4, 1], [5, 1], [6, 1], [6, 2], [6, 3], [7, 3], [7, 4], [8, 4], [9, 4]  ]
