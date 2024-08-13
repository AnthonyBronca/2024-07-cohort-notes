# Week 3 - Monday

## Variable Declarations - recaps

We have learned we can create a variable using the `let` keyword. A variable is a reference to a spot in memory that we can call to access that data.

```js

let name = "anthony";

```

But it is time to cover some of the other variable declarations keywords.

The dreaded `var`. Long ago, `var` was the only way to create a variable in JavaScript. This was fine at first, but it caused a lot of `scoping` hell. `Scoping` refers to the area of access code has. We will learn more about `scoping` later this week when we cover `hoisting`. `var` lets us create variables, sort of like `let`, but because of the `hoisting` bugs it causes, it should be avoided now.


So what can we use instead of `let`? `const`. `const` allows us to create variables that are not able to be reassigned. These work great for things that should not change in memory such as function names, arrays, `objects`, and variables that should not point to something else.


let's 🥁 look at an example of a let issue.

```js
let user = "anthony";

user = [1,2,3]; // we can reassign


```

Imagine we needed to use user in order to sign in somewhere, but somehow we hit code that reassigned the `user` variable to be an array of ```[1,2,3]```
This would cause a lot of issues in our code. To make sure other developers do not reassign this, we can use `const`

```js
const user = "anthony";

user = [1,2,3]; // this throws an error

```

Good examples of `const`:

```js

const myArray = [1,2,3];
const username = "anthony";
const myFunction = function(){

};

```

Common misconceptions:

- `const` is not "better" than `let`, but it is good practice to use it when you want to avoid something from being reassigned

- `let` is the best. Let works great and all, but not everything should be flexible. It can cause issues if stuff gets changed than it is supposed to be.



## Fat Arrow Function

We have learned two ways to create a functions:

```js
// function declaration
function myFunction(){

}

// function expression
const myFunction = function(){}

```

But there is another way to declare functions. This is the `fat arrow` syntax (it is also my personal favorite for usage, especially due to scope issues that arise with function declaration)

```js

const myFunction = () => {

}


```

Nice and easy, and we can omit the `function` keyword. What is also cooler, is you can use this to do `implicit returns`. We can use `implicit returns` if we don't need to do multiple lines of code. Here is an example of a function done in multiple lines and one done in one line.


```js

const doubleNum = (num) => {
    return num * 2;
}

const doubleNum = (num) => num * 2;

```

Both do the same thing. Since we are omitting the curly braces and putting it in one line, the `fat arrow` will auto return for us.



## Ternaries

Ternaries are a way to control logic flow. We can use Ternaries, sort of like `if...else` blocks, except they are useful when you need to check one or two things.


For example, lets say we want to write a function that will return true/false if a function argument is a number or not.

Here is the if version

```js

const isNum = (el) => {
    if(typeof el === "number"){
        return true;
    } else{
        return false;
    }
}

```

We can refactor this to use a `ternary`. The `ternary` is created using a `?` mark. The left hand side is the condition when true, and the right hand side is the condition when false. We seperate the condition using a `:`

```js

const isNum = (el) => {
    return typeof el === "number" ? true : false
}

```

How can we refactor this to be a `one-liner`?
