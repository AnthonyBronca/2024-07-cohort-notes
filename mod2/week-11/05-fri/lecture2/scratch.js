
// const adjList = {
//     A: ["B", "C"],
//     B: ["A", "C", "D"],
//     C: ["A", "D"],
//     D: ["C"]
// }



// function traverseAdjList(graph, starting, ending ){
//     // stack/queue
//     const stack = [starting];
//     // path
//     const path = [];
//     // visisted
//     const visisted = new Set();
//     // ------
//     // loop
//     while(stack.length){
//         // variables to manage the above
//         let curr = stack.pop();
//         // add the visited stuff here later
//         visisted.add(curr);
//         path.push(curr);
//         // ---- DO THE THING HERE ----
//         if(curr === ending){
//             return path;
//         }
//         // neighbors
//         const neighbors = graph[curr];
//         for(let neighbor of neighbors){
//             // only check the neighbor that we have not already visted
//             if(!visisted.has(neighbor)){
//                 stack.push(neighbor);
//             }
//         }

//     }
//     // return our path
//     return "Did not find the path you were looking for";
// }


// console.log(traverseAdjList(adjList, "D", "F"));




const battleshipCoords = [
    [x,o,x],
    [x,o,x],
    [o,x,o],
]



const airports = {
    Atlanta : [
        "NYC",
        "Miami",
        "LAX",
        "Seattle",
        "Austin"
    ],
    NYC: [
        "Miami",
        "LAX",
        "Seattle",
        "Atlanta"
    ],
    Miami: [
        "NYC"
    ],
    Seattle: [
        "Atlanta",
        "NYC",
        "LAX"
    ],
    LAX: [
        "Atlanta",
        "NYC",
        "Austin",
        "Seattle"
    ],
    Austin: [
        "Atlanta",
        "LAX"
    ]
}




function adjList(graph, starting, ending){
    const stack = [starting];
    const visited = new Set();
    const path = [];
    let numOfFlights = 0;

    while(stack.length){
        // do the variables
        let curr = stack.pop();
        visited.add(curr);
        path.push(curr);
        numOfFlights+=1;
        // do the thing
        if(curr === ending){
            return {numFligts: numOfFlights - 1, airportStops: path }
        }
        // do the traversal stuff
        const neighbors = graph[curr];
        for(let neighbor of neighbors){
            // check if we have already visited the neighbor
            if(!visited.has(neighbor)){
                stack.push(neighbor);
            }
        }

    }
    return `No fligts found from ${starting} to ${ending}`

}

console.log(adjList(airports, "Miami", "NYC")); // 1 - MIAMI -> NYC
console.log(adjList(airports, "Miami", "Atlanta")); // 2 - MIAMI -> NYC -> Atlanta
console.log(adjList(airports, "Miami", "Austin")); // 3 -> MIAMI -> NYC -> Atlanta -> Austin
// console.log(adjList(airports, "Miami", "Japan")); // "No flights found from <starting> <ending location>"
// console.log(adjList(airports, "NYC", "Tokyo")); // "No flights found from <starting> <ending location>"
// console.log(adjList(airports, "Tokyo", "Miami"))
