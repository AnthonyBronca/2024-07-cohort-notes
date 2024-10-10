// let arr = [3, 2, 0 , 1, 5];

// // func to merge the arr;

// function mergeSort(arr){
//     if(arr.length <= 1){
//         return arr;
//     }

//     // mid
//     const mid = Math.floor(arr.length / 2); //establish a middle point
//     // left
//     const left = arr.slice(0, mid); // beg -> mid
//     // right
//     const right = arr.slice(mid);// mid -> end

//     return merge(mergeSort(left), mergeSort(right));
// }

// // function to merge the left hand side and the right hand side
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



// BUILT IN SORTING METHOD -> WHOEVER BUILT THIS IS A GOD
// UNDER THE HOOD, IT USES QUICKSORT/MERGE SORT/TIM SORT DEPENDING ON THE BROWSER


// let arr = [3, 2, 0 , 1, 5];

// console.log(arr.sort());



let people = ["anthony", "alexi", "sam", "zaviar"];
console.log(people.sort((a,b)=>{
    return a - b;
}));

// <min       max>
// A B C D E F
// console.log(people.sort((a, b) => {
//     console.log(a, b)
//     return a - b;
// }));

// let nums = [5, 1, 2, 4, 6];
// console.log(nums.sort())


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


const newP2 = people2.slice().sort((a,b) => {
    return a.age - b.age;
})

// console.log(people2);
// console.log(newP2)




// let nums2 = [1,50,100,10,30];
// console.log(nums2.sort((a,b)=>{
//     return b - a
// }));
