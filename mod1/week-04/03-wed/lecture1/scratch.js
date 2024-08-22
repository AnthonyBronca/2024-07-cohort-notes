

// global scope


// const outterFunc = () => {
//     // function scope - outterfunc
//     let sum = 0;


//     const innerFunc = (num) => {
//         // function scope - innerfunc
//         sum += num;
//         return sum;
//     }

//     return innerFunc;

// }


// const innerFunc = outterFunc();


// console.log(innerFunc(2));
// console.log(innerFunc(5));



// operation -> plus, minus, multiply, divide

const calculatorFunctionality = (operation) => {

    let total = 0;
    if(operation === "multiply" || operation === "divide"){
        total = 1;
    }

    return (n) => {
        if(operation === "plus"){
            total += n;
            return total;
        } else if(operation === "minus"){
            total -= n;
            return total;
        } else if(operation === "multiply"){
            total *= n;
            return total;
        } else{
            console.log("You did not pass in a valid operation")
        }
    }


}
//  -- adder --
console.log("----------------- Adder ---------------");
const adder = calculatorFunctionality("plus");

console.log(adder(2));
console.log(adder(5));


// -- subber --
console.log("----------------- Subber ---------------");
const subber = calculatorFunctionality("minus");
console.log(subber(5));
console.log(subber(10));


// -- multiplier --
console.log("----------------- Multiplier ---------------");
const multiplier = calculatorFunctionality("multiply");
console.log(multiplier(5));
console.log(multiplier(5));
