
// ADDING TIME COMPLEXITIES

// let newArr = [];


// // TIME COMPLEXITY: O(1)
// function doSomething(el){
//     newArr.push(el); // Time Complexity: O(1)
//     return newArr;
// }

// TIME COMPLEXITY: 2 O(n) -> O(n)
// function doSomething(...els){
//     for(let i = 0; i < els.length; i++){ // O(n) -> n number of elements to iterate
//         let el = els[i];
//         console.log(el);
//     }

//     newArr.unshift(els); // Time Complexity: O(N) -> move n number of items over to account for index changing
//     return newArr;
// }

// console.log(doSomething("a", "b", "c", "d", "e", "f", "g", "h", "i", "j"));



//                1         2             3           4
// const listA = ["apple", "watermelon", 'banana', "strawberry"]; // 10
// const listB = ["apple", "banana", "strawberry"]; // 8
// const listC = ["strawberry"]; // 4

// // TIME COMPLEXITY: O(n)
// function getTotalCostOfList(list){
//     let sum = 0;
//     for(let i = 0; i < list.length; i++){
//         let item = list[i];
//         if(item === "apple"){
//             sum += 1;
//         } else if(item === "watermelon"){
//             sum += 2;
//         } else if(item === "banana"){
//             sum += 3;
//         } else{
//             sum += 4;
//         }
//     }
//     return sum;
// }


// // TIME COMPLEXITY: O(n ^ 2)
// function getMostExpensiveList(arrOfLists){
//     let maxList = undefined;
//     let maxCost = 0;
//     for(let list of arrOfLists){ // TIME COMPLEXITY: O(n)
//         const currCost = getTotalCostOfList(list); // TIME COMPLEXITY: O(n)
//         if(maxCost < currCost){
//             maxCost = currCost;
//             maxList = list;
//         }
//     }
//     return maxList;
// }

// console.log(getMostExpensiveList([listA, listB, listC]));


// console.log(getTotalCostOfList(listA));


// function doSomething(){
//     // O(1) -> because there is unknown growth.
//     for(let i = 0; i < 50; i++){
//         const start = Date.now()
//         let el = i
//         const end = Date.now();
//         console.log(end - start);
//     }
// }

// doSomething();


// O(n) time - n number of elements to loop over
// O(n) space -> because there are n number of call stack items generated
function doSomething(arr){
    if(arr.length === -1) return;
    console.log(arr[0]);
    return doSomething(arr.slice(1));
}

doSomething(["anthony", 'sam', "alexi", "zaviar"]);
