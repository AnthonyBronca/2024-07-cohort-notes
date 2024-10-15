// traversals -> shorting PATH

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
//     const queue = [ [starting] ];
//     const visited = new Set();
//     while(queue.length){
//         const currPath = queue.shift();
//         let lastNode = currPath[currPath.length - 1];

//         if(lastNode === ending){
//             return currPath;
//         }

//         if(!visited.has(lastNode)){
//             visited.add(lastNode);
//         }

//         // traverse neighbors
//         const neighbors = graph[lastNode];
//         for(let neighbor of neighbors){
//             const newPath = [...currPath, neighbor];
//             queue.push(newPath);
//         }
//     }

//     return "No Valid Paths";
// }

// console.log(shortestPath(adjList, 1, 4)); // [1, 5, 4]









// ----- MATRIX ---------

// const adjList = {
//     1 : [2, 4, 5],
//     2 : [1, 4, 5, 6, 3],
//     3 : [2, 5, 6],
//     4 : [1, 2, 5, 7, 8],
//     5 : [1, 2, 3, 4, 6, 7, 8, 9],

// }



// find neighors - text book addition

// const findNeighbors = (graph, node) => {
//     const res = [];

//     const [row, col] = node;

//     for (let i = 0; i < graph.length; i++) {
//         for (let j = 0; j < graph[i].length; j++) {
//             let curr = graph[i][j];
//             // top exists
//             if (curr !== undefined) {
//                 // top is neighbor
//                 if (graph[i + 1] && graph[i + 1][j] === graph[row][col]) {
//                     res.push([i, j]);
//                 }
//             }

//             // bottom exists
//             if (curr !== undefined) {
//                 if (graph[i - 1] && graph[i - 1][j] === graph[row][col]) {
//                     res.push([i, j]);
//                 }
//             }

//             // right exists
//             if (curr !== undefined) {
//                 if (graph[i] && graph[i][j - 1] === graph[row][col]) {
//                     res.push([i, j]);
//                 }
//             }
//             // left exists
//             if (curr !== undefined) {
//                 if (graph[i] && graph[i][j + 1] === graph[row][col]) {
//                     res.push([i, j]);
//                 }
//             }
//             // bottomRight exists
//             if (curr !== undefined) {
//                 if (graph[i - 1] && graph[i - 1][j - 1] === graph[row][col]) {
//                     res.push([i, j])
//                 }
//             }
//             // bottomLeft exists
//             if (curr !== undefined) {
//                 if (graph[i - 1] && graph[i - 1][j + 1] === graph[row][col]) {
//                     res.push([i, j])
//                 }
//             }
//             // topLeft exists
//             if (curr !== undefined) {
//                 if (graph[i + 1] && graph[i + 1][j + 1] === graph[row][col]) {
//                     res.push([i, j])
//                 }
//             }
//             // topRight exists
//             if (curr !== undefined) {
//                 if (graph[i + 1] && graph[i + 1][j - 1] === graph[row][col]) {
//                     res.push([i, j])
//                 }
//             }
//         }
//     }
//     return res;
// };

// const board = [
//     [1, 2, 3],
//     [4, 5, 6], // 1 row
//     [7, 8, 9] // 2 row
//               // row 3
// ]

// // the cool way 😎

const findNeighbors = (graph, node) => {
    const [ row, col ] =  node;
    // console.log(row, col);
    const neighbors = [
        // top left,
        [ row - 1, col - 1],
        // top center,
        [ row - 1, col],
        // top right
        [ row - 1, col + 1],
        // left
        [ row, col - 1],
        // right
        [ row, col + 1],
        // bottom left
        [ row + 1, col - 1 ],
        // center
        [ row + 1, col],
        // bottom right
        [ row + 1, col + 1]
    ]


    return neighbors.filter((coord) => {
        let [x, y] = coord;
        return graph[x] && graph[x][y];
        // short circuit if the x is out of bounds so we dont try to index y when x does not exist
    })

}



// console.log(findNeighbors(board, [1, 1])); // [ [0, 0], [0, 1 ], [0, 2], [1, 0], [1, 2], [2, 0], [2, 1], [2, 2] ]
// console.log(findNeighbors(board, [2, 2])); // [ [1, 2], [1, 1], [2, 1] ]
