# Stacks and Queues

Stacks and Queues are ways we can work with data structures. A `stack` works with the top (back) of an ordered data structure, and a `queue` works with the bottom (front) of the data structure.

Real World Analogies:

- A queue: We get in line. You are the last person in line, you will be the last person served. If you are first in line, you will be the first person to leave the line. This follows `First in First Out` (FIFO)

- A stack: You pile things on top of something. To get to the bottom of stuff, you need to remove the stuff on top. The last thing in stack will be removed first. This follows `First in Last Out` (FILO).


```js

const arr = [];

// if we treat this array like a stack we can do the following
arr.push("a"); // add to back
arr.pop(); // remove from back

// if we treat this array like a queue we can do the following
arr.push("a"); // add to back - also called enqueue
arr.shift(); // remove from the front - also called dequeue

```

When working with DSA and computer science, we need to think about the functionality that occurs when we work with our data. What would be the Time Complexity of a stack? What would be the Time Complexity of



# Dynamic Arrays

In JavaScript, when we call an Array by doing:

```js
const arr = [];
```

We are doing syntactic sugar for creating an array using the class based method.

```js
const arr = new Array();
```

The difference with the top example is that it is a dynamic array that requests for a large space in memory rather than the second example where we can specify how much space we want to take.


If we were building an application that had to be space-conscious, then we may not want to use the Dynamic arrays, and instead build out own custom arrays.

Let us say we want to engineer a solution that only consumes 200 bytes of memory within a computer when ran. We would need to take into account the size of the array, and the size of the data contained within that array. For now, let's just say the `length` property is the amount of memory taken.


```js

const arr = new Array(200); // creates an array where we allocate 200 bytes in memory for this

```

In JavaScript, we have `dynamic` array functionality that will allow us to modify this array. Modifying can include `push`, `pop`, `shift` and `unshift`. We may end up growing the array indefinitely. So what would happen if we had an array of a fixed size of 200, and then ran a `push` to add the 201th element?

Well, in lower-level programming we would have to call for a new space in memory, another array, and fill that. In JavaScript this process is automated for us. So if we wanted to push the 201th element, under the hood, JavaScript will ask the computer for double the space to allocate. It will utilize this doubled space to copy over elements from the previous referenced array, and this will leave us with 200 more free spaces to use. Think about this for a second. What would the time complexity of `array resizing` be? What would the space-complexity be? Why?


Reasoning will be provided in class, as I want you all to think about this for a bit without looking at the solutions.


## Custom Array

We are going to build some custom arrays in order to visualize this process.

The custom array will want need to do the following things:

- Start with a size of 8
- read an index
- resize when full
- allow for `push`
- allow for `pop`
- allow for `unshift`
- allow for `shift`
- allow for `slice`
- ability to return the `length` of the array
- resize if capacity is full

Think about the functionality and the return value of all of these methods
