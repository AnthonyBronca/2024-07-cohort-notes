# Thursday Week 0b

## Arrays Continued


As a reminder, an `array` is just a collection of data in ORDER and uses indices to track element position. We will use `arrays`to hold data. We also want to be able to adjust our data, and there are a few ways to do that.


We learned that we can index into a position and assign it:

```js
let arr = ["a","b","c"];

console.log(arr[0]) // "a"
console.log(arr[3]) // undefined;

arr[3] = "d"
console.log(arr[3]) // d;
console.log(arr) // ["a", "b", "c", "d"]

```

But we also have a method that we can use to add to the back of an array.

### .push()

docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

`.push()` adds to the back of an array. It returns the new length of the array;

```js
let arr = [1,2,3];

let newLength = arr.push(4);
console.log(arr) // [1,2,3,4];
console.log(newLength) // 4

```

### .pop()

docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop


We can add to the back of an array, but what if we want to remove the last element from the array? We could just assign it to nothing:

```js

let arr = [1,2,3];
arr[2] = undefined;

console.log(arr)// [1,2,undefined];

```

but this doesn't actually remove our allocated space in memory. The `length` would still be 3.

* What we can do instead? *

<details>
<summary>
Answer:
</summary>

```js

let arr = [1,2,3];
arr.length --;

console.log(arr) // [1,2]

```
</deatils>





But this is probably something we should avoid. Instead, we can use a built in method that will remove it for us, and also return the item that got removed.

```js
let arr = [1,2,3];
let removedEl = arr.pop();

console.log(arr) // [1,2]
console.log(removedEl) // 3
```


### .unshift & .shift()

unshift docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift


shift docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift

`.unshift()` and `.shift()`

Just like `.pop()` and `.push()`, we can add and remove from the front of an arrray.

`.unshift()` adds to the front

`.shift()` removes from the front

An easy way to remember this, remove the "f" from the word 💩

`.💩()` - comes out
`.un💩 ()` - goes in (eww 🤢)
