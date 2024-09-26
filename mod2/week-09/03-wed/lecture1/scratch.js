// /*

// ADDING COMPLEXITIES TOGETHER

// */


// // let arr = [];
// // time complexity: 2 O(n)
// function addToAnArray(el){
//     let sum = 0;

//     // TIME Compexlity?: O(n) => linear
//     for(let i = 0; i < arr.length; i++){
//             sum += 1;
//         };
//     arr.unshift(el); // TIME COMPLEXITY: O(n) => linear

//     return arr;
// }


// // addToAnArray("a");
// // console.log(addToAnArray("b"));


// // MULTIPLYING TIME COMPLEXITIES

// //                        1        2         3            4
// const ingredientList = ["apple", "banana", "onions", "strawberries"];

// const ingredientList2 = ["apple", "banana", "onions", "strawberries", "watermelon"];
// const ingredientList3 = ["strawberries", "watermelon"];


// // TIME Complexity: O(n)
// function groceryList(list){
//     let totalCost = 0;
//     for(let item of list){ // O(n)
//         arr.unshift() // O(n)
//         if(item === "apple"){
//             totalCost += 1;
//         } else if(item === "banana"){
//             totalCost += 2;
//         } else if(item === "onions"){
//             totalCost += 3;
//         } else{
//             totalCost += 4;
//         }
//     }

//     return totalCost;
// }

// costOfListA = groceryList(ingredientList);
// costOfListB = groceryList(ingredientList2);

// // TIME COMPLEXITY:
// function addLists(arrOfLists){
//     let maxCost = 0;
//     let maxList = undefined;

//     for(let list of arrOfLists){ // O(n)
//         let currCost = groceryList(list); // -> function time complexity: O(n)
//         if(currCost > maxCost){
//             maxCost = currCost;
//             maxList = list;
//         }
//     }
//     return maxList
// }

// console.log(addLists([ingredientList, ingredientList2, ingredientList3]))


// O(1)
// function loopTest(){
//     for(let i = 0; i < 10; i++){
//         console.log("hello world")
//     }
// }
// loopTest();



// function spaceFunc(arr){
//     if(arr.length === -1) return;
//     console.log(arr[0]);
//     return spaceFunc(arr.slice(1));
// }

// spaceFunc(["anthony", "sam", "alexi", "zaviar"])
