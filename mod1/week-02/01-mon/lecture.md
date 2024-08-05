# Monday Week 2

## Helper Functions

As a reminder, a function serves the purpose of performing some action every time it is called. We can declare it in a few ways, and the ways we know of now are `function declaration` and `function expression`

```js
// function declaration
function returnHello(){
    return "hello";
}

// function expression
let returnHello = function (){
    return "hello";
}


```

A function, or `pure function` has a few definitons:

1. It can be be called
2. It can take in arguments and parameters
3. It can be passed in to other functions

These points are very important as they are the hallmark of what lets us use `pure functions` as `helper functions`.

A `helper function` is a function where the main purpose is to be called as a support to another function. Here is an example:

```js

function double(num){
    return num * 2;
}

function triple(num){
    return num * 3;
}

function multiplier(number, func){
    return func(number);
}


console.log(multiplier(2, double)); // 4; -> 2 goes to double, 2 * 2 = 4;
console.log(multiplier(3, triple)); // 9; -> 3 goes to triple, 3 * 3 = 9;
```

We use helper functions a lot to break apart logic that may be reused in other functions, or to clean up functions that start getting really long.

A real world example of this is video game starting logic. There is typically some `init` function that starts the game, which takes a bunch of start up functions. Those start up functions can take helper functions that can manipulate data as needed.
