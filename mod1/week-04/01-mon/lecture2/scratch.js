

// BASIC FOR LOOP

// let nums = [1,2,3,4];


// let sum = 0;
// let newArr = [];

// for(let i = 0; i < nums.length; i++){
//     let el = nums[i];
//     if(el % 2 === 0){
//         newArr.push(el * 2);
//     }
// }

// console.log(sum);
// console.log(newArr)


// FOR EACH
// CONDITION: when we have to go through every element, perfoming an action on each element.
// note: can't stop it early, does not return anything.



// let nums = [1, 2, 3, 4];

// let sum = 0;
// let doubledArr = [];

// nums.forEach((el)=> doubledArr.push(el * 2));


// for(let el of nums){
//     doubledArr.push(el * 2);
// }
// console.log(doubledArr)

//  MAP
// CONDITION: when you want to iterate over every element, and push some el or updated el to a new array.
// this returns the new array



// let nums = [1, 2, 3, 4];
// const doubledArr = nums.map((el) => el * 2);

// console.log(nums, "this is old arr")
// console.log(doubledArr, "this is new array");



// FILTER
// condition: go through each element, and add the elements that meet the condition to a new array


// let nums = [1, 2, 3, 4];
// const yoavarray = nums.filter((el) => el > 1 && el < 4);


// console.log(nums, "this is old arr")
// console.log(yoavarray, "this is new array");




// REDUCE
// condtion: when we want to go through every element in the array, and accumulate some variable over time.
// reduce has an optional default value that determines what our accumulator starts at. If nothing is passed in, it defaults as index 0

// let nums = [1,2,3,4];


// const sum = nums.reduce((accum, el) => {
//     // console.log(el)
//     // console.log(accum)
//     if(el % 2 === 0){
//         return accum += el
//     } else{
//         return accum;
//     }
// }, 0);


// console.log(sum);







// let sum = 10; // accumulator

// for(let i = 0; i < nums.length; i++){
//     let el = nums[i];
//    if(el % 2 === 0){
//     sum += el
// }
// }

// console.log(sum);
