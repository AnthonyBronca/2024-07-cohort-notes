
// // interpolation

// const name = "bob";



// const greetingMessage = `Hello, my name is ${name}`;

// console.log(greetingMessage[0])

//                      0         1          2
// const shoppingList = ["apple", "banana", "carrot"];
// const costs = [2, 4, 5];

// console.log(shoppingList.includes("eggs"));


// for(let i = 0; i < shoppingList.length; i++){
//     let item = shoppingList[i];
//     let cost = costs[i]
//     console.log(`The ${item} costs: ${cost}`);
// }


// let i = 0;
// while(i < shoppingList.length){
//     let item = shoppingList[i];
//     console.log(item);
//     i++
// }

// 3

// function isOdd(num){
//     return num % 2 !== 0;
// }


const isOdd = num => num % 2 !== 0;

const costs = [2, 4, 5];

console.log(costs.map((el)=> el *2));


console.log(isOdd(3));
console.log(isOdd(5));
console.log(isOdd(2));
