# Graphs - Expanded

## Stack vs Queue

Remember, that a stack goes as far deep as possible in one direction, before it picks the next direction. A queue, will go out in every direction one at a time until it reaches its destination. This is important when we want to consider how to get to a destination as fast as possible.


*To Reach a Node fast we use a `queue`*


```js

const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5],
    5: [1, 2, 4],
    6: []
};

// fastest path from 1 -> 4
// 1 -> 5 -> 4  < a achieved with a queueue
// vs
// 1 -> 2 -> 3 -> 4

const shortestPath = (graph, starting, ending) => {

    const queue = [[starting]]; // start with a path
    const visited = new Set();

    while(queue.length){
        const path = queue.shift(); // remove a single path
        const node = path[path.length - 1]; // reference for last element in the path

        if(node === ending){ // check if we now have a valid path
            return path;
        }

        if(!visited.has(node)){ // visit the node
            visited.add(node);
        }

        for(let neighbor of graph[node]){
            const newPath = [...path, neighbor]; // add current path and neighbor
            queue.push(newPath); // add the path to the queue
        }
    }
    return "No Valid Path";

};

console.log(shortestPath(adjList, 1, 4)); // [1,5,4];

```

What we are doing here is creating multiple paths at once. Our queue will be maintaining multiple paths at once, and it will slowly grow as we go out in each direction.


## Matrix

A Matrix is a graph represented in 2D as nested arrays:

Below is a representation of a Tic-Tac-Toe using graphs and placeholders

```js
const board = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];

```

We could have easily placed `null` or `undefined` in each box, but this will help for now when visualizing


### Getting Neighbors

In an `adjcency list`, neighbors are provided via the values within the array. In a `Matrix`, we will have to write some code to figure this out. Now, there are multiple ways to solve this. But for now we will look at two ways.


The things we need to keep track of are:

1. The row and col where our current node is found
2. Does our current node have a node in all directions (TR, TL, TC, BL, BR, BC, R, T, B, L)
    - If it does not, we need to account for that when keying into the row
    - If it does, we have found a neighbor


```js
const findNeighbors = (graph, node) => {
    const res = [];

    const [row,col] = node;

    for(let i = 0; i < graph.length; i++){
        for(let j = 0; j < graph[i].length; j++){
            let curr = graph[i][j];
            // top exists
            if(curr !== undefined){
                // top is neighbor
                if(graph[i+1] && graph[i+1][j] === graph[row][col]){
                    res.push([i,j]);
                }
            }

            // bottom exists
            if(curr !== undefined){
                if(graph[i-1] && graph[i-1][j] === graph[row][col]){
                    res.push([i,j]);
                }
            }

            // right exists
            if(curr !== undefined){
                if(graph[i] && graph[i][j-1] === graph[row][col]){
                    res.push([i,j]);
                }
            }
            // left exists
            if(curr !== undefined){
                if(graph[i] && graph[i][j+1] === graph[row][col]){
                    res.push([i,j]);
                }
            }
            // bottomRight exists
            if(curr !== undefined){
                if(graph[i-1] && graph[i-1][j-1] === graph[row][col]){
                    res.push([i,j])
                }
            }
            // bottomLeft exists
            if(curr !== undefined){
                if(graph[i-1] && graph[i-1][j+1] === graph[row][col]){
                    res.push([i,j])
                }
            }
            // topLeft exists
            if(curr !== undefined){
                if(graph[i+1] && graph[i+1][j+1] === graph[row][col]){
                    res.push([i,j])
                }
            }
            // topRight exists
            if(curr !== undefined){
                if(graph[i+1] && graph[i+1][j-1] === graph[row][col]){
                    res.push([i,j])
                }
            }
        }
    }
    return res;
};


console.log(findNeighbors(board, [1,2])); // [[0,2], [1,1], [2,2], [0,1], [2,1]]
```



While this is the more "text book" way, let's make it more advanced because this is actually easier to type.


For this method, we can just "hardcode" all the directions in a progromatic way. Keep in mind, some of the directions will point to undefined and others will point to actual points on a graph. We want to filter the ones that point to undefined, and that will give us our valid neighors:


```js
const board = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

const findNeighbors = (graph, node) => {
    const [row, col]  = node;
    let curr = graph[row][col];

    const neighbors = [
        [row - 1, col], // top
        [row + 1, col], // bottom
        [row, col + 1], // right
        [row, col -1], //left
        [row + 1, col + 1], // bottom right
        [row + 1, col - 1], // bottom left
        [row - 1, col + 1], // top right
        [row - 1, col - 1], // top left
    ];

    const filteredNeighbors = neighbors.filter((coord) => {
        const [x, y ] = coord;
        return graph[x] && graph[x][y];
    })

    return filteredNeighbors;


}

```
