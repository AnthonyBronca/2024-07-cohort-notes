
// const adjList = {
//   A: ["B", "C"],
//   B: ["A", "C"],
//   C: ["B", "D"],
//   D: ["C"]
// }



// function traverseAdjList(graph, starting, ending){
//     const stack = [starting];
//     // keep track of unique nodes
//     const visited = new Set();
//     const path = [];




//     while(stack.length){
//         let curr = stack.pop();
//         visited.add(curr);
//         path.push(curr);
//         // manage the path, stack, visited

//         //  do the thing
//         if(curr === ending){
//             return path;
//         }
//         // -------


//         // Grab the "neigbors", which used to be the left/right hand side
//         const neighbors = graph[curr]
//         for(let neighbor of neighbors){
//             if(!visited.has(neighbor)){
//                 stack.push(neighbor);
//             }
//         }
//     }
//     return path;
// }


// console.log(traverseAdjList(adjList, "A", "C"));
// console.log(traverseAdjList(adjList, "A", "D"));
// console.log(traverseAdjList(adjList, "A", "F"));


const airports = {
    Atlanta: [
        "NYC",
        "Miami",
        "Lax",
        "Seattle",
        "Austin"
    ],
    NYC: [
        "Miami",
        "Lax",
        "Seattle",
        "Atlanta"
    ],
    Miami: [
        "NYC",
    ],
    Seattle: [
        "Atlana",
        "NYC"
    ],
    Lax: [
        "Atlanta",
        "NYC",
        "Austin"
    ],
    Austin: [
        "Atlanta",
        "Lax"
    ]
}


function shortestFlightPath(graph, starting, ending){
    // path of flights we are taking
    const path = []; // VERY IMPORTANT
    // number of flights that we are taking
    let numOfFlights = 0;
    // stack
    const stack = [starting];
    // airports we have already visited
    const visited = new Set(); // VERY IMPORTANT

    while(stack.length){
        let curr = stack.pop();
        visited.add(curr);
        path.push(curr);
        numOfFlights += 1;
        // do the thing
        if(curr === ending){
            return {totalNumberOfFlights: numOfFlights - 1, airPorts: path};
        }
        // traversals
        const neigbors = graph[curr];
        for(let neighbor of neigbors){
            if (!visited.has(neighbor)){
                stack.push(neighbor);
            }
        }

    }
    return `No Flights found from ${starting} to ${ending}`;
    // return a string if we did not have a path
}


// console.log(shortestFlightPath(airports, "Miami", "NYC")); // 1 flight -> direct flight
// console.log(shortestFlightPath(airports, "Miami", "Atlanta")); // 2 -> NYC layover -> atlanta
// console.log(shortestFlightPath(airports, "Miami", "Austin")); // 3  Miami -> NYC -> LAX -> Austin
// console.log(shortestFlightPath(airports, "Miami", "Japan")); // "No Flights found from Miami to Japan"
