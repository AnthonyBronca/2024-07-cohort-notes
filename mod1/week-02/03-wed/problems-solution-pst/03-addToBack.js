/*

Write a function called addToBack that will take an array and an element and add the element to the back of the array.
The function should return the modified array

*/

function addToBack(arr, el){
    let output = arr.push(el);
    return arr;
}





let arr1 = ["a", "b", "c", "d"];
let arr2 = ["anthony", "sam", "edward", "gabe"];
let arr3 = [1, 2, 3];

console.log(addToBack(arr1, "e")); // ["a", "b", "c", "d", "e"];
console.log(addToBack(arr2, "alexi")); // ["anthony", "sam", "edward", "gabe", "alexi"];
console.log(addToBack(arr3, 4)); // [1, 2, 3, 4];