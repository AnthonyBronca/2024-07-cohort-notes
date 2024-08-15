# Week 3 - Thursday

## Advanced Array Methods

There are a few built-in array methods we can use to simplify certain types of loops.

Note: These are just built-in methods and therefore not very customizable. They are not a subsititute for the loops we already know.



### forEach


forEach is a loop that we can use to do some action on every element. You can not break out of it, and it does not return anything.

Personally, I stopped using forEach as a for of loop is easier and better to use.


```js

const arr = [1,2,3,4,5,6];

let sum = 0;

arr.forEach((el) => sum += el);


```

### map

map is a function that is used to loop through elements and will add the output, or result of an output to an output array.


```js

const arr = [1,2,3];

const doubledArr = arr.map((el)=> el * 2);
console.log(doubledArr); // [2,4,6];

```

### filter

goes through every element and will add any element where a condition returns true.

```js

const arr = [1,2,3];

const oddsArr = arr.filter((el) =>{
    return el % 2 !== 0;
})

console.log(oddsArr); // [1,3]

```

### reduce


reduce is a little different because it takes an accumulator and an en element. It can be very powerful, but can be very complicated to use when some things can just be done more readable with a for...of loop.

The default behavior is for the accumulator to be whatever the element at index 0 is. You can adjust this by passing a second arguemnt on what the default accum will be

```js

const arr = [1,2,3];

const sum = arr.reduce((accum, el)=> accum += el);


```
