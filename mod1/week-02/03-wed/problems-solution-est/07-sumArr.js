/*

Write a function called sumArr that will take an array of numbers and return the sum of all the numbers within an array

*/

// function sumArr(arr){
//     let sum = 0;
    // for(let i = 0; i < arr.length; i++){
    //     let el = arr[i];
    //     sum += el;
    // }
//     return sum;
// }


// function sumArr(arr){
//     let sum = 0;
//     for(let el of arr){
//         sum += el
//     }
//     return sum;
// }

function sumArr(arr){
    let i = 0;
    let sum = 0;

    while(i < arr.length){
        sum += arr[i];
        i++
    }
    return sum;
}


let arr1 = [1,2,3];
let arr2 = [5,5,5];
let arr3 = [0,0,2,1];

console.log(sumArr(arr1)); // 6
console.log(sumArr(arr2)); // 15
console.log(sumArr(arr3)); // 3
