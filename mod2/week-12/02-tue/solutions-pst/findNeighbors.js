/*

You are a cartographer and are tasked with navigating a map. For now, we just need to know which
directions relative to where we currently are are valid

In this map, -1 is water, 0 is land, and 1 is a mountain. We can:
    - walk from land to mountain
    - walk from land to water
    - walk from water to land
    - walk from mountain to land


For example, we can not walk from water to mountain as that is too big of a distance per step

MAP:

[
    [0,1,1],
    [-1, -1, -1],
    [1,1,1]
]


In this map, if you are located at [0,0] (0) then you can go in either direction within the map
But if you are at [0,1], you are in a mountain and can not go south towars water (row 1).

A valid path, in this makeshift map, will have us needing to go south from 0 if we want to get to the
southern most mountain range



Write a function that will let us find valid neighbors for this map
*/


const land = [
    [-1, -1, -1, 0, 0, 0, 1, 1],
    [0, 0, -1, -1, -1, -1, 0, 0],
    [0, 0, -1, 0, 0, 0, -1, -1],
    [0, 0, 1, 1, 1, 1, 1, 1],
]


// YOUR CODE HERE

const findNeighbors = (graph, node) => {
    const [ row, col ] = node;
    // console.log(row, col);
    const neighbors = [
        [ row - 1, col - 1 ],
        [ row -1 , col  ],
        [ row -1 , col +  1 ],
        [ row, col - 1],
        [ row, col + 1],
        [ row + 1, col -1],
        [ row + 1, col ],
        [ row + 1, col + 1]
    ];

    // // if we are currently looking at a negative 1, allowed would be -1, and 0
    if(graph[row] && graph[row][col] === 0 || graph[row][col] === -1 ){
        return neighbors.filter((coord) => {
            let [x, y] = coord;
            return graph[x] && (graph[x][y] === -1 || graph[x][y] === 0)
        })
    }
    // if we are currently looking at a positive 1, allowed would be positive and 0
    if(graph[row] && graph[row][col] === 0 || graph[row][col] === 1){
        return neighbors.filter((coord) => {
            let [x, y] = coord;
            return graph[x] && (graph[x][y] === 1 || graph[x][y] === 0)
        })
    }

    // if you want to do one filter
    // return neighbors.filter((coord) => {
    //     let [x, y] = coord;
    //     if(graph[row] && graph[row][col]){
    //         let curr = graph[row][col];
    //         if(graph[x] && (graph[x][y] === curr) || Math.abs(graph[x][y]) !== Math.abs(curr)){
    //             return true;
    //         } else{
    //             return false;
    //         }
    //     }
    // })


}



console.log(findNeighbors(land, [2, 2])); // [[1,1],[1,2], [1,3], [2,1], [2,3], [3,1]]
