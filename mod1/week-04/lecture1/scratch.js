

// const nums = [1,2,3,4,5,6]; // old array

// BASIC FOR LOOP
// purpose, to go through each element in nums
// let sum = 0;
// let doubled = []; // new array
// for(let i = 0; i < nums.length; i++){
//     let el = nums[i];
//     sum += el;
//     if(el % 2 === 0){
//         doubled.push(el * 2); // this is what map does behind the scenes
//     }

// }

// console.log(sum);
// console.log(doubled);


// FOR EACH
// CONDITION WHEN WE HAVE TO GO THROUGH EVERY ELEMENT
// no return value

// const nums = [1, 2, 3, 4, 5, 6];
// let sum = 0;
// let doubled = [];
// nums.forEach((el) => doubled.push(el * 2));

// console.log(doubled)

// for(let el of nums){
//     return el
// }


// MAP
// CONDITION WHEN WE HAVE TO GO THROUGH EVERY ELEMENT AND ADD THE ELEMENT OR SOME VARIATION OF IT TO A NEW ARRAY

// const nums = [1, 2, 3, 4, 5, 6];
// const newArrayFromMap = nums.map((el) =>  el);

// console.log(nums, "My old array");
// console.log(newArrayFromMap, "My new array");


// FILTER
// CONDITION WHEN WE HAVE TO GO THROUGH EVERY SINGLE ELEMENT, CHECK EACH ELEMENT AGAINST A CONDITION
// filter returns a new array where the element returned true when passed into the condition


// const nums = [1, 2, 3, 4, 5, 6];

// const filteredArr = nums.filter((el) => {
//     if(el > 1 && el < 6){
//         return true
//     }
// });


// const names = ["anthony", "sam", "kate", "ryan", "gabe", "william", "edward"];

// const filteredArr = names.filter((el) => {
//     let vowels = "aeiouAEIOU";
//     if(!vowels.includes(el[0])){
//         return true;
//     }
// })


// console.log(names, "My old array");
// console.log(filteredArr, "My new array");



// REDUCE
// CONDITION FOR REDUCE IS WHEN YOU HAVE ONE SINGLE VARIABLE THAT YOU WANT TO MUTATE BASED ON EACH ELEMENT
// OPTIONAL: A STARTING POINT FOR YOUR CONDITION


// const nums = [1,2,3,4,5,6];

// let accum = 9

// const sum = nums.reduce((accum, el) => {
//     if(el % 2 !== 0){
//         return accum += el;
//     } else{
//         return accum;
//     }
// });



// let sum = 0;
// for(let i = 0; i < nums.length; i++){
//     let el = nums[i];
//     if(el % 2 !== 0){
//         sum +=el
//     }

// }

// console.log(sum);
