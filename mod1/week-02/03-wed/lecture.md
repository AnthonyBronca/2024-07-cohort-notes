# Week 2 Tuesday

## Arrays Recap


Arrays are linear data collections. They store values within an index, and organize information in sequential order.

Think about it like a line graph:


[ A -> B -> C -> D ]

With this in mind, we can count the letters within this collection and get the total number of items. This would be the `length`, which is 4 for this example
Now in terms of indexing, counting starts at 0.

Here is a table breakdown of the organization of this array



| Element |  Count | Index |
| ------  | ------ | ----- |
|   A     |    1   |   0   |
|   B     |    2   |   1   |
|   C     |    3   |   2   |
|   D     |    4   |   3   |


Looking at this we can determine a couple of things. The first element, element `A` is the first item within the array. It is at index 0.
`D` is the last element within the array. It is at index 3. Notice the count (referring to the length) is always one greater than the index. We can take this into account when wanting to find
the last index within an array. This would be the `length - 1`. For all arrays, this formula remains constant because the length is always one greater than the index.



Now, what is the point of storing data if we can't look it up. So let's learn how to look things up! We can do this with `indexing`

```js

let arr = ["A", "B", "C", "D"];
// arr[0]  -> A
// arr[1] ->  B
// arr[2] ->  C
// arr[3] ->  D

```



### Array methods to know

#### pop

`.pop()` is a function we can use to remove from the back of an array. It returns the item that was removed.

#### shift

`.shift()` is a function we can use to remove from the front of an array. It returns the item that was removed.

#### push

`.push()` is a function we can use to add to the back of an array. It returns the new length of the array.

#### unshift

`.unshift()` is a function we can use to add to the front of an array. It returns the new length of the array,


#### splice

`.splice()` is a function we can use to modify an array. We can use it to remove items from anywhere within the array, or add to anywhere in the array

#### slice

`.slice()` is a function that we can use to make a copy of an array or a subsection of an array.

#### indexOf

`.indexOf()` is a function we can use to search for an element within the array and get the index it was found at. If it was not found, it returns -1

#### includes

`.includes()` is a function we can use to see if the array has a specified element. It will return `true` or `false` if the item was found or not

#### join

`.join()` is a function we can use to combine the elements of an array into a string. It can take a delimiter to specify how they will be joined.

Example:

```js
let sentence = ["hello", "how", "are", "you"];

console.log(sentence.join("")); // "hellohowareyou"
console.log(sentence.join(" ")); // "hello how are you"
console.log(sentence.join("-")); // "hello-how-are-you"
console.log(sentence.join("<3")); // "hello<3how<3are<3you"

```
