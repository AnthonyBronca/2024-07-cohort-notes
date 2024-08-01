/*

You are given an array of ordered numbers that start at 1 and go to 10, sequentially. Write a function called onlyOdds, that will print only odd indices.
Your goal for this, is to modify the existing code/ How can you cut the number of iterations in half?

You should be able to change the iterations to run

*/

let iterationCount = 0; // do not modify this
let testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] //  do not modify this


function onlyOdds(arr){
    for(let i = 0; i < arr.length; i++){
        iterationCount++ // do not modify this
        let num = arr[i];
        if(num % 2 !==0){
            console.log(num)
        }
    }
}


onlyOdds(testArr)


/* DO NOT MODIFY ANYTHING BELOW THIS LINE */
let passingStatus = iterationCount <= testArr.length / 2
console.log("Passing Status:  ", passingStatus)
