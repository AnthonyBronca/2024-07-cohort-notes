# Week 4 - Wednesday

## Closures

We covered scope in the previous lecture, and today we are going to utilize the idea of scope to abstract the concept and create `closures`.
A closure is a function that encapsulates another function, and returns that inner function. This allows it to protect information, and create `context`.

A closure must do 3 things:

1. Be a function
2. The function must create another function
3. The function must return that inner function.


With this in mind, we can create context based on calling. To excel with this topic, you will need to feel very comfortable with the idea of what a `return` is, and how the code is being read.


```js

const outterFunc = () => {
    let sum = 0;

    const innerFunc = (num) => {
        sum += num;
        return sum;
    }

    return innerFunc;
}



let adder = outterFunc();
let adder2 = outterFunc();


console.log("------ adder ----");
console.log(adder(2));
console.log(adder(3));
console.log(adder(10));

console.log("------ adder2 ----");
console.log(adder2(5));
console.log(adder2(1));

```

Notice, we are creating a `sum` variable in the outter function, and the innerFunction can utilize that data acros multiple calls. The inner function is created by the outter function, and returned by the outter function. For us to use the inner function, we need to save the return of the outter function into a variable. Then we can invoke that functionality.
