/*

THIS IS A CHALLENGE PROBLEM


Write a function called indexOfOnes. It will take in an array of arrays, where each element can be either a 0 or a 1.
Return an array of arrays, where the subarray tells us the index of the subarray, and the index within the subarray where a 1 was found.

Example:

let arr = [
    [0,1,0], 0
    [0,0,1], 1
    [1,0,0,] 2
]


Output should be: -> [[0,1], [1,2], [2,0]].
Explanation: A 1 was found in subarray at index 0. wtihin that subarray, the 1 was at index 1. Hence: [0,1]
Another 1 was found in subarray at index 1. Within that subarray, the 1 was found at index 2. hence: [1,2]
Another 1 was found in aubarray at index 2. Within that subarray, the 1 was found at index 9. hence: [2,0]


*/


/*
1. create a function called indexOfOnes that will take an array of arrays
2. iterate through the array to get each subArray -- use for...loop because we need index
    2a. For each subArray iterate through each element  -- use for...loop because we need index
        2ab. For each element check if the element is a 1
            - if it is, add it to some coordinate array
            - if it is not, do nothing

3. return the array of arrays

*/



function indexOfOnes(board){

    let res = [];
    for(let i = 0; i < board.length; i++){
        let subArr = board[i];
        for(let j = 0; j < subArr.length; j++){
            let coordinates = [];
            let el = subArr[j];
            if(el === 1){
                coordinates.push(i, j);
                res.push(coordinates);
            }
        }
    }
    return res;
}





let circutBoard = [
    [0,1,0], // i
    [1,1,0],
    [0,0,0],
    [0,0,1]
];

console.log(indexOfOnes(circutBoard)); // [[0,1],[1,0],[1,1],[3,2]];
