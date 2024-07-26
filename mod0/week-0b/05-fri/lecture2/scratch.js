
let arr1 = ["a", "b", "c"];

let copyArr1 = arr1.slice();

copyArr1.push("d");

console.log(arr1) // ["a","b","c"]
console.log(copyArr1) // ["a","b","c","d"]



let arr2 = ["hello", "how", "are", "you"];

let copyArr2 = arr2.slice(2, 3);

console.log(arr2); // [ 'hello', 'how', 'are', 'you' ]
console.log(copyArr2); // [ 'are' ]


let arr3 = ["the", "cat", "ran", "up", "the", "wall", "to", "catch", "a", "mouse"];
let copyArr3 = arr3.slice(2);

console.log(arr3); //['the', 'cat','ran','up', 'the', 'wall', 'to', 'catch', 'a', 'mouse']
console.log(copyArr3); //['ran', 'up','the', 'wall','to', 'catch','a', 'mouse']
