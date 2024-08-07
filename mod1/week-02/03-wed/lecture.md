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
