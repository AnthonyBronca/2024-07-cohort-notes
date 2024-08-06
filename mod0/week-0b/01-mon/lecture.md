# Week 0b Monday

## Inequality Comparison

We learned comparison operators to do deeply equal.

```js
let num1 = 2+2;
console.log(num1 === 4) // true

```

How do we check inequality? We can use the `bang` operator or `!`.

What if we want to check if num1 does *NOT* equal 4?

```js

let num1 = 2+2;
console.log(num1 !== 4); // false

```

We can also use the `bang` operator to negate existing boolean

```js
console.log(!true) // false
console.log(!false) // true
```


What do you think this will print:

```js
console.log(!!true) // ?
```


## Boolean Operators

In Javascript, we can use some boolean operators to compare more booleans

| Human Comparison | Javascript |  Description |
| ---------------- | ---------- |  ----------  |
|     AND          |  &&        | Used for checking if both sides are true |
|     OR           |  \|\|        | used for checkinbg if one side is true |
|     XOR          |  ^        | used for checking if one side is true, but not both |


Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#logical_operators


### Operator example outputs


```js
console.log(true && true) // true
console.log(true && false) // false
console.log(true || true) // true
console.log(false || true) // true
console.log(true ^ true) // 0
console.log(true ^ false) // 1
```


## Logical Control Flow With Conditionals

In programming languages, we often want to control the flow of our code depending on specific conditions.

We use `if`, `else if`, and `else` to handle these. The condition inside these *NEEDS TO BE TRUE* to run

example:

```js

if(true){
    console.log("hello") // this will always run because the condition is always true
}
if(false){
    console.log("bye") // this will never run because the condition is always false
}



// try changing num and see how the code is changed
let num = 4

if(num === 4){
    console.log("we are in the if")
} else if(num > 4){
    console.log("we are in the else if")
} else{
    console.log("we are in the else")
}

```
