# HTML Collections and Bubbles

An HTML Collection is ALMOST like an array in Node.Js. We can use these array-like containers to store HTML items with indexes and similar methods that would work on an array.


Here is an example of HTML Collection:

```js

const htmlCollection = [
    0: <h1>Hello World</h1>,
    1: <div><span>hi</span></div>,
]
```

We won't really see the indices, but we can index into them like any other Array.

```js

const htmlCollection = [
    <h1>Hello World</h1>,
    <div><span>hi</span></div>,
];

console.log(htmlCollection[0]); //  <h1>Hello World</h1>,

```
