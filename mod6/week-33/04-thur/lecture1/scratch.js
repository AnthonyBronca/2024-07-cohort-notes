

// const name = "bob";


// const customGreeting = `Hello, ${name} how are you doing today!?`
// console.log(customGreeting);


// console.log(customGreeting[0]);


// let num1 = 5; // is this bigger than 0?
// let num2 = 10; // is this bigger than 0?

// console.log((num1 > 0) && (num2 < 0)) // and
// console.log((num1 > 0) || (num2 < 0)) // or


//                    0         1          2
// let shoppingList = ["apple", "carrot", "banana"];
const costs = [2, 3, 6]

// costs.map((el)=>  el* 2)


// for(let i = 0; i < shoppingList.length; i++){
//     let item = shoppingList[i];
//     let cost = costs[i];
//     console.log(`The ${item} costs: ${cost}`)
// }


// for(let item of shoppingList){
//     console.log(item)
// }




// let i = 0;
// while(i < shoppingList.length){
//     let item = shoppingList[i];
//     console.log(item);
//     i++;
// }


// function isOdd(num){
//     return num % 2 !== 0
// }

// fat arrow function
const isOdd = num => num % 2 !== 0




console.log(isOdd(3));
console.log(isOdd(5));
console.log(isOdd(2));
