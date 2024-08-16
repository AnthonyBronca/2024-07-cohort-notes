# Week 3 - Friday


## Warm Up

- What is the syntax for creating a key value pair?

- What is the syntax for checking if a key-value pair exists

- What is the syntax for incrementing the value in this object:

```js

const obj = {num: 1};

```

- What does `Object.keys()` return?

- What does `Object.values()` return?

- What `for...loop` do we use for objects?

## Call Backs

Good news! We basically already learned call backs!


A call back is a function that another function can invoke. It is specifically a function that is passed in as an argument


```js

const addNums = (n1, n2) => n1 + n2;

const subNums = (n1, n2) => n1 - n2;

const calculate = (n1, n2, cb) => cb(n1, n2);

console.log(calculate(1,2, addNums)); // 3
console.log(calculate(5,1, subNums)); // 4


```

We use call backs in things like `advanced arrray methods`

```js

const nums = [1,2,3];

// (el) => {}   is the call back
nums.forEach((el) => console.log(el))

```
