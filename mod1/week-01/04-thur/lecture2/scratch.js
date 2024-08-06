


// let arr = ["a", "b", "c"];



// let arr = [
//     "A", // 0
//     "B",// 1
//     ["Cat", "Dog", "Elephant"] //2
// ];


// console.log(arr[2][2][3])


// let arr = [
//     [1,2,3], // iteration 0
//     [4,5,6], // iteration 1
//     [7,8,9] // iteration 2
// ]


// for(let i = 0; i < arr.length; i++){
//     let subArr = arr[i];
//     // 0
//     console.log("outter loop", i)
//     for(let j = 0; j < subArr.length; j++){
//         let el = subArr[j];
//         console.log("inner loop", j)
//     }
// }

// console.log(arr[2][2])

// console.table(arr)


let arr = ["anthony", "sam", "gabe"];


for(let name of arr){
    console.log(name, "for of loop ")
}

console.log("-----------------------------", "\n")

for(let i = 0; i < arr.length; i+=2){
    let name = arr[i];
    console.log(name, "for regular loop");
}

// let i = 0;
// while(i < arr.length){
//     let name = arr[i];
//     console.log(name);
//     i++
// }
