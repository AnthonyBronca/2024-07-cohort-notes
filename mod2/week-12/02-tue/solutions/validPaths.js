
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

// FIRST GRAPH PROBLEM  -> start with neighbors

const findNeighbors = (graph, node) => {

    // destructure
    const [row, col] = node;

    // neighbors -> grabs in all directions, we will have to filter out later
    const neighbors = [
        // TOP
        [ row - 1, col],
        // BOTTOM
        [ row + 1, col],
        // LEFT
        [ row, col - 1],
        // RIGHT
        [ row, col + 1]
    ];

    // filter out anything that is not a 1
    // THIS IS THE FOR LOOP WAY
    const filteredNeighbors = [];
    for(let node of neighbors){
        const [x, y] = node; // so I dont have to do node[0] or node[1]
        // look up the x and y within the graph to see what the value us
        if(graph[x] && graph[x][y] === 1){
            filteredNeighbors.push(node);
        }
    }
    return filteredNeighbors;
    // ------------------------ another way to do it ------------------

    // THIS IS THE FILTERED WAY
    // return neighbors.filter((coord) => {
    //     const [x, y ]  = coord;
    //     return graph[x] && graph[x][y] === 1;
    // })

}

const findPath = (graph, starting, ending) => {

    let successfulPaths = 0;
    const queue = [ [starting] ];
    const visited = new Set(); // add unique paths where the nodes are string coordinates, ex: "x,y"
    // make a string to check our ending
    const endStr = `[${ending}]`;

    while(queue.length){
        const currPath = queue.shift();
        const lastNode = currPath[currPath.length - 1];
        const [x, y] = lastNode;
        const coordStr = `[${x},${y}]`;

        // compare my coordStr and see if that is the same thing as the ending
        if(coordStr === endStr){
            successfulPaths ++;
        }

        // add our visited coordinate to our visisted
        if(!visited.has(coordStr)){
            visited.add(coordStr);
        }

        // find all neighbors, and go through each neighbor adding it to our path
        const neighbors = findNeighbors(graph, lastNode);
        for(let neigbor of neighbors){
            // console.log(neigbor);
            let neighborStr = `[${neigbor}]`;
            if (!visited.has(neighborStr) || neighborStr === endStr){
                let newPath = [...currPath, neigbor];
                queue.push(newPath);
            }
        }
    }
    return successfulPaths

}


// ------------------------- DO NOT TOUCH BELOW THIS LINE -----------------
const maze1 = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 1, 0, 1],
    [0, 1, 0, 1],
    [0, 1, 1, 1],
]; // 2 valid paths from [2,0] -> [2, 3]
// console.log(findNeighbors(maze1, [2, 0])); // [2,1]
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
