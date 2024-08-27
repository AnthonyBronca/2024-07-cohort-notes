# Week 05 - Announcements

- Japan Trip Reminder. I will not be present or available on Sept 2 - Sept 14th. Additional information to come once coverage is assigned


## Truthy/Falsy

We briefly touched on Truthy/Falsy values on the last PA, but let us quickly recap.

In JavaScript, we know that there is `true` and `false`, and there are conditions that evaluate to booleans. We can use these booleans within `if` blocks, to control the flow of our code:

```js

let num = 5;

if(num > 0){
    // some action
} else{
    // some other action
}

```

There are also items in JS called `truthy` and `falsey` values. It is easier to talk about what is `falsey` rather than what is `truthy`.
Essentially, these are values that behave as `true` or `false` when used in conditions.


List of Falsey values:

- Empty string
- 0
- -0
- undefined
- null


(this is not a comprehensive list, but these are used a lot for our purposes)

Example:

```js

let string = "";

if(string){
    // some action that will never be hit
} else{
    // some action that will be hit, because string length is empty
}

```

or

```js
let val;

if(val){
    // some action that will not be hit
} else{
    // some action that will be hit, because "val" is undefined
}

```



## Recursion Introduction

Recursion... recursion... recusion... tsk tsk. This is the trippy stuff that can trip you up if you haven't been mastering the items we covered on the 1st assessment.

In order to excel in Recursion, you will need to be able to break down a problem into 1 single action. No more, no less. You will need to be able to build conditions that meet that single action, and it will create a recursive loop.

All Recursive functions are made up of 3 items:

- Base Case: This is the case that will handle our stop condition. It must break the loop
- Recursive Case: The situation where we want to do something over and over
- Recursive step: The action that will take us closedr to the Base case.



Watch Inception to understand recursion a little better lol
