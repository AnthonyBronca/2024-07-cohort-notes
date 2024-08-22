



// global scope

// let name = "anthony";


// const outterFunction = () => {
//     // functional scope - outter
//     let name = "sam";

//     const innerFunction = () => {
//         return name
//     }
//     return innerFunction;
// }

// // console.log(outterFunction())

// const innerFunc = outterFunction();
// console.log(innerFunc())



// operation -> addition, subtraction, multiplication
const calculation = (operation) => {
    let total = 0; // function scoped - outter function - calculation scope
    if(operation === "multiplication"){
        total = 1;
    }

    return (num) => {
        if(operation === "addition"){
            total += num;
            return total;
        } else if (operation === "subtraction"){
            total -= num;
            return total;
        } else {
            total *= num;
            return total;
        }

    }

}

console.log(" -------- ADDER -------");
const adder = calculation("addition");
console.log(adder(2)); // 2 + 0; -> total -> 2
console.log(adder(5));// 2 + 5 ; -> total -> 7

console.log(" -------- SUBBER -------");
const subber = calculation("subtraction");
console.log(subber(2));
console.log(subber(10));

console.log(" -------- MULTIPLIER -------");

const multplier = calculation("multiplication");
console.log(multplier(2)); // 2  * 1 = 2;
console.log(multplier(5)); // 2  * 5 = 10;
console.log(multplier(6)); // 6  * 10 = 60;


console.log(adder(10), "this is part of adder");
