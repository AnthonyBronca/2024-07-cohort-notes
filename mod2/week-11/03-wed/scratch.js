
// let arr = [3, 2, 0, 1];

// // func to merge arr
// function mergeSort(arr) {
//     if (arr.length <= 1) {
//         return arr;
//     }
//     const mid = Math.floor(arr.length / 2);
//     const left = arr.slice(0, mid);
//     const right = arr.slice(mid);
//     return merge(mergeSort(left), mergeSort(right));
// }

// //func to merge the left and right elements
// function merge(left, right) {
//     const result = [];

//     while (left.length && right.length) {
//         if (left[0] < right[0]) {
//             result.push(left.shift());
//         } else {
//             result.push(right.shift());
//         }
//     }

//     return [...result, ...left, ...right];
// }

// console.log(mergeSort(arr));



let people = ["anthony", "sam", "alexi", "zaviar"];

console.log(people.sort((a,b) => {
    // return b - a; // -1, 0 ,1
    if(b < a){
        return -1
    }
}));


// let arr2 = [10,1,100,3,5,300];
// let people2 = [
//     {
//         name: "anthony",
//         age: 25
//     },
//     {
//         name: "mary",
//         age: 45
//     },
//     {
//         name: "jerry",
//         age: 10
//     },
//     {
//         name: "zaviar",
//         age: 16
//     }
// ];

// console.log(arr.sort()); // -> auto sorts from desc -> ascending

// console.log(arr.sort((a,b) => {
//     return b - a;
// })) // sorts from asc -> desc


// console.log(people.sort()); // auto sorts names in alphbetical order
// console.log(arr2.sort()); // this will break because we are sorting based on starting digits, not actual values.
// console.log(arr2.sort((a, b)=> {
//     return a - b;
// })) // will sort based on if a is smaller than b

// console.log(people2.sort()); // this can't work because we can't compare objects;
// console.log(people2.sort((a, b) => {
//     return a.age - b.age;
// })) // now we can sort based on age.
