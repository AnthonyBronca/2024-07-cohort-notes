# Week 05 - Tuesday

## The Call Stack

Stacks work like a stack of plates. you put stuff on top, and can't get things from the bottom until you remove what is on top.


We can utilize the `call stack` in JavaScript to allow us to control when code will be run, which is where Recursion is used.



## Default Params

Default parameters are like piggy banks. You can use this as a way to store values across all the stocks.



```js

// add a number to an array

function addNumsToArr(num, arr=[]){
    if(num === 0) return arr;
    arr.push(num);
    return addNumsToArr(--num, arr);
}

console.log(addNumsToArr(5));


```
