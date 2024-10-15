// const adjList = {
//     1: [2, 5],
//     2: [1, 3, 5],
//     3: [2, 4],
//     4: [3, 5],
//     5: [1, 2, 4],
//     6: []
// };


// fastest path from 1 -> 4
// 1 -> 5 -> 4  < a achieved with a queueue
// vs
// 1 -> 2 -> 3 -> 4


// const shortestPath = (graph, starting, ending) => {
//     const queue = [[starting]] // the queue - contain many paths
//     const visited = new Set();
//     while(queue.length){
//         const currPath = queue.shift(); // remove a path from the front of the queue
//         const lastNode = currPath[currPath.length - 1]; // grab the last node touched within that path

//         // DO THE THING
//         if(lastNode === ending){
//             return currPath;
//         }

//         if(!visited.has(lastNode)){
//             visited.add(lastNode);
//         }

//         // grab the neighbors
//         for(let neighbor of graph[lastNode]){
//             const newPath = [...currPath, neighbor];
//             queue.push(newPath);
//         }
//     }

//     return "No Valid Paths";

// };

// console.log(shortestPath(adjList, 1, 4)); // [1, 5, 4]




// ------------ MATRIX --------

// const board = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

const findNeighbors = (graph, node) => {
    const res = [];

    const [row, col] = node;

    for (let i = 0; i < graph.length; i++) {
        for (let j = 0; j < graph[i].length; j++) {
            let curr = graph[i][j];
            // top exists
            if (curr !== undefined) {
                // top is neighbor
                if (graph[i + 1] && graph[i + 1][j] === graph[row][col]) {
                    res.push([i, j]);
                }
            }

            // bottom exists
            if (curr !== undefined) {
                if (graph[i - 1] && graph[i - 1][j] === graph[row][col]) {
                    res.push([i, j]);
                }
            }

            // right exists
            if (curr !== undefined) {
                if (graph[i] && graph[i][j - 1] === graph[row][col]) {
                    res.push([i, j]);
                }
            }
            // left exists
            if (curr !== undefined) {
                if (graph[i] && graph[i][j + 1] === graph[row][col]) {
                    res.push([i, j]);
                }
            }
            // bottomRight exists
            if (curr !== undefined) {
                if (graph[i - 1] && graph[i - 1][j - 1] === graph[row][col]) {
                    res.push([i, j])
                }
            }
            // bottomLeft exists
            if (curr !== undefined) {
                if (graph[i - 1] && graph[i - 1][j + 1] === graph[row][col]) {
                    res.push([i, j])
                }
            }
            // topLeft exists
            if (curr !== undefined) {
                if (graph[i + 1] && graph[i + 1][j + 1] === graph[row][col]) {
                    res.push([i, j])
                }
            }
            // topRight exists
            if (curr !== undefined) {
                if (graph[i + 1] && graph[i + 1][j - 1] === graph[row][col]) {
                    res.push([i, j])
                }
            }
        }
    }
    return res;
};



const board = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];



// const findNeighbors = (graph, node) => {
//     const [row,col] = node;
//     // console.log(row, col);

//     const neighbors = [
//         // top left,
//         [ row - 1, col - 1 ],
//         // top
//         [ row - 1, col ],
//         // top right,
//         [ row - 1, col + 1 ],
//         // right
//         [ row, col + 1],
//         // bottom right
//         [ row + 1, col +1],
//         // bottom
//         [ row + 1, col],
//         // bottom left
//         [ row + 1, col -1 ],
//         // left
//         [ row, col - 1],
//     ]

//     const validNeighbors = neighbors.filter((coord) => {
//         let [x, y] = coord;
//         return graph[x] && graph[x][y]
//     })
//     return validNeighbors;
// }



// console.log(findNeighbors(board, [1, 2])); // [[0,2], [1,1], [2,2], [0,1], [2,1]]

// console.log(findNeighbors(board, [1, 1])); // 5 on the graph ->  [ [0, 0], [0, 1], [0,2], [1, 0], [1, 2], [2, 0], [2, 1], [2, 2] ]
console.log(findNeighbors(board, [2, 2])); // 9 on the graph -> [ [1, 2], [1, 1], [2, 1] ]
