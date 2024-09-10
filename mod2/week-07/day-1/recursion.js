/*
let sha256 = require('sha256');

// base > when stop
// return 0
// recursive case > keep iterating
  // recursive step > step towards base
//   return function()

function mapArray(array, memo=[]) {
    if (array.length == 0) return []

    let el = array.shift() * 2;

    let res = mapArray(array);
    return [el, ...res]
}

console.log(mapArray([1,2,3]))

function outer(super_secret_password) {
    let password = sha256(super_secret_password);

    return (confirm) => {
        return password == sha256(confirm);
    }
}

let getHash = outer('password');
console.log(getHash('password'))
console.log(getHash('password1'))
// console.log(password)
*/
let sha256 = require('sha256');

// recursion
function recursiveDouble(arr) {
    if (arr.length == 0) {
        // base case : when to stop iterating
        return [];
    } else {
        // recursive case : when to keep iterating
            // recursive step : action taken to approach base case
        let el = arr.shift() * 2;

        let res = recursiveDouble(arr);
        return [el, ...res];
    }

    // if arr is empty, return empty arr
    // else
    // take out first item
      // double it
      // repeat with rest of arr
    // put contents in new arr
    // return arr
}

console.log(recursiveDouble([1,2,3])) // [2, 4, 6]
console.log(recursiveDouble([])) // []

// closures
// function outer(password) {
//     let hash = sha256(password);

//     return (attempt) => {
//         return sha256(attempt) == hash;
//     }
// }

// let closureHash = outer('password');
// console.log(closureHash('password'))
// console.log(closureHash('password1'))
// console.log(hash)

function multiply(multiplier) {
    return (number) => {
        return number * multiplier
    }
}
let double = multiply(2)
console.log(double(1))
console.log(double(5))

// callbacks
function performCallback(cb, ...args) {
    return cb(...args);
}

function addOne(arr) {
    return arr.map(el => {
        return el + 1;
    });
}
function addTwo(num1, num2) {
    return num1 + num2;
}

console.log(performCallback(addOne, [1,2,3,4,5]))
console.log(performCallback(addTwo, 1, 2))
// addTwo(1,2) == 3
// addTwo      == function