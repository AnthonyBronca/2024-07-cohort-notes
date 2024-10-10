// let arr = [3, 2, 0 , 1, 5];

// // sort the arrays, by spliting it in half
// function mergeSort(arr){
//     // if arr is empty or has 1 item, it is sorted
//     if(arr.length <= 1){
//         return arr;
//     }
//     const mid = Math.floor(arr.length / 2);
//     const left = arr.slice(0, mid);
//     const right = arr.slice(mid);
//     return merge(mergeSort(left), mergeSort(right));

// };


// // function to split the arrays apart until we can put them back together in ordr
// function merge(left, right){
//     const res = [];
//     while(left.length && right.length){
//         if(left[0] < right[0]){
//             res.push(left.shift());
//         } else{
//             res.push(right.shift());
//         }
//     }
//     return [...res, ...left, ...right];
// }

// console.log(mergeSort(arr));

// MERGE SORT -> O(LOG N )

// BUILT IN SORTING METHOD -> WHOEVER BUILT THIS IS A GOD
// SORT, MUTATES THE ARRAY THAT IT IS INVOKED ON
// let arr = [3, 2, 0, 1, 5];

// console.log(arr.slice().sort());

// console.log(arr);

// let people = ["anthony", "alexi", "sam", "zaviar"];

// console.log(people.sort());


// let nums = [5, 50, 2, 22, 6]; // 2, 5, 6, 22, 50
// console.log(nums.sort((a, b) => {
//     // console.log(a, "this is a");
//     // console.log(b, "this is b");
//     return a - b


// }));
let people2 = [
    {
        name: "anthony",
        age: 20
    },
    {
        name: "alexi",
        age: 17
    },
    {
        name: "sam",
        age: 45
    },
    {
        name: "zaviar",
        age: 10
    }
];


console.log(people2.sort((a,b) => {
    return b.age - a.age
}));
