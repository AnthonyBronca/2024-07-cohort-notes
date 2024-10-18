
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


const findNeighbors = (graph, node) => {
    const [ row, col ] = node;

    const neighbors = [
        // TOP
        [ row - 1, col],
        // BOTTOM
        [ row + 1, col],
        // LEFT
        [ row, col - 1],
        // RIGHT
        [ row, col + 1],
    ]

    // keep only items that come out to be 1
//  this is one way to do it
    // const filteredNeighbors = [];
    // for(let neighbor of neighbors){
    //     const [ x, y ] = neighbor;
    //     if(graph[x] && graph[x][y] === 1){
    //         filteredNeighbors.push(neighbor);
    //     }
    // }

    // return filteredNeighbors


    // ----- THIS IS ANOTHER WAY TO DO IT -------
    return neighbors.filter((coord) => {
        const [ x, y ] = coord;
        //    this is a check
        return graph[x] && graph[x][y] === 1
    })

}


const findPath = (graph, starting, ending) => {
    const queue = [ [starting] ];
    const visited = new Set();
    let successfulPaths = 0;

    const endStr = `[${ending}]`;

    while(queue.length){
        const currPath = queue.shift(); // remove from the front of a queue
        const lastNode = currPath[currPath.length - 1];
        const [ x, y] = lastNode;
        let currStr = `[${x},${y}]`;

        // do the thing, check if this is a valid path
        if(currStr === endStr){
            successfulPaths++;
        }

        if(!visited.has(currStr)){
            visited.add(currStr);
        }

        // grab neighbors
        const neighbors = findNeighbors(graph, lastNode);
        for(let neighbor of neighbors){
            let neighborStr = `[${neighbor}]`;
            if(!visited.has(neighborStr) || neighborStr === endStr){
                let newPath = [...currPath, neighbor];
                queue.push(newPath);
            }

        }

    };

    return successfulPaths;
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

// console.log(findNeighbors(maze1, [2,0])); // [2, 1]


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
