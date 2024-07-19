# Thursday

## Interpolation

Interpolation allows us to use strings with passed in variables. We use backticks to signify interpolation, instead of single/double quotes.

```js
let num = 100

console.log(`I have ${num} dollars`) // I have 100 dollars
console.log(`I have $${num} dollars`) // I have $100 dollars

```

## Functions

Javascript has 3 main ways to create functions, each with their own use case and syntax. For now, we are going to focus on `function declaration`.

Functions are used to be able to run functionality within code repeatedly. These are the hallmarks of all programming languages

A function is built using:
1. A variable name
2. Optional - Parameter/s (often used though)
3. The functionality the function will do
4. Optional - a return value (often used though)

```js

// Write a function that says "Hello <name>" to the person passed in to the function

// function declaration that sets PARAMETERS
function sayHello(name){
    console.log(`Hello ${name}`);
}

// These are called function invocations and they take ARGUMENTS
sayHello("Anthony"); // prints "Hello Anthony"
sayHello("Sam"); // prints "Hello Sam"
```


### In CLASS PRACTICE:

```js
/*
Write a function called twoSum that will take in 2 arguments, num1 and num2.
The function should return the sum of num1 and num2


*/


```

```js
/*

Write a function called isFourteen. The function will take in a number and check if the number is equal to 14 or not. If it is, it will return true. If not, it will return false

HINT: We do not need to use `if` statements here, as we have not learned it yet

*/

```
