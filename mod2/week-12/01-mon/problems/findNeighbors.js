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

console.log(findNeighbors(land, [2, 2])); // [[1,1],[1,2], [1,3], [2,1], [2,3], [3,1]]
