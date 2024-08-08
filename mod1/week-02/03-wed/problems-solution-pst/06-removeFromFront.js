/*

Write a function called removeFromFront that will take an array and remove the element from the front of the array.
The function should return the modified array

*/

function removeFromFront(arr){
    let output = arr.shift();
    return arr;
}






let arr1 = ["a", "b", "c", "d"];
let arr2 = ["anthony", "sam", "edward", "gabe"];
let arr3 = [1, 2, 3];

console.log(removeFromFront(arr1)); // ["b", "c", "d"];
console.log(removeFromFront(arr2)); // ["sam", "edward", "gabe"];
console.log(removeFromFront(arr3)); // [2 , 3];
