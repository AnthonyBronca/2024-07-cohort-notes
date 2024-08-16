



// const numbers = [1,2,3,4,5,6];

// let sum = numbers[0]; // accumulator

// for(let i = 1; i < numbers.length; i++){
//     let el = numbers[i];
//     sum += el;
// }


// for(let el of numbers){
//     console.log(el)
// }


// forEach - does not return anything

// let sum = 0;

// numbers.forEach((el) => sum += el);

// console.log(sum)

// let people = [
//     {name: "anthony"},
//     {name: "sam"},
//     {name: "alexi"},
//     {name: "gabe"},
// ]

// people.forEach((person) => console.log(person.name))




// map

// const doubledNumbers = numbers.map((el) => el * 2);
// const doubledNumbers = numbers.map((el) => {
    //     return el * 2
    // });




// filter
// const numbers = [1, 2, 3, 4, 5, 6];

// const filteredNumbers = numbers.filter((number) => {
//     // return a boolean -> true we keep | false we toss it out
//     if(number === 2){
//         return true;
//     }
//     if(number === 6){
//         return true;
//     }
// })

// const filteredNumbers = numbers.filter((number) => number % 2 !== 0);



// const fancyRestuarant = [
//     {name: "anthony", isVip: true},
//     {name: "sam", isVip: true},
//     {name: "gabe", isVip: false},
//     {name: "edward", isVip: false},
//     {name: "alexi", isVip: true},
// ];

// const vipList = fancyRestuarant.filter((personObj) => personObj.isVip)

// console.log(vipList)


// console.log(numbers);
// console.log(filteredNumbers);




// reduce


// const numbers = [1,2,3,4,5,6];

// // default -> index 0
// const sum = numbers.reduce((accumulator, el) => {
//     console.log(accumulator, "this is the accum");
//     console.log(el, "this is our el");

//         // accumulation -> numbers[0] -> 1 -> 3 -> 6
//         // el -> numerbers[2] -> 3


//     return accumulator += el;
// })


// console.log(sum, "this sum")



// const expenses = [20,50, 30, 200, 10, 1];

// const bankBalance = expenses.reduce((budget, expense) => {
//     return budget -= expense;
// })

// console.log(bankBalance)
