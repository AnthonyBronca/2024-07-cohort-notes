/*

Write a function called removeFromBack that will take an array and remove the element to the back of the array.
The function should return the modified array

*/

function removeFromBack(arr){
    let output = arr.pop();
    return arr;
}




let arr1 = ["a", "b", "c", "d"];
let arr2 = ["anthony", "sam", "edward", "gabe"];
let arr3 = [1, 2, 3];

console.log(removeFromBack(arr1)); // ["a", "b", "c"];
console.log(removeFromBack(arr2)); // ["anthony", "sam", "edward"];
console.log(removeFromBack(arr3)); // [1, 2];
