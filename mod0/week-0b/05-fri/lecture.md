# Friday

## Array Methods Cont.

### Recap

We recently learned how to modify the contents of the array by starting from the back or the front. We can either insert or remove items. Let's do a quick recap of those methods:

Which built-in method can we use to add to the back of an `array`?


1.

<details>
    <summary>
        Answer:
    </summary>
    `.push()` is a method that can take 1 or more variables and add to the back of an array
</details>

------------------------------------------------------------------------------------------------
2.
Which built-in method can we use to add to the front of an `array`?

<details>
    <summary>
        Answer:
    </summary>
    `.unshift()` is a method that can take 1 or more variables and add to the front of an array
</details>

------------------------------------------------------------------------------------------------
3.
Which built-in method can we use to remove from the front of an `array`?

<details>
    <summary>
        Answer:
    </summary>
    `.shift()` is a method that takes no variables and removes from the front of an array
</details>

------------------------------------------------------------------------------------------------
4.
Which built-in method can we use to remove from the back of an `array`?

<details>
    <summary>
        Answer:
    </summary>
    `.pop()` is a method that takes no variables and removes from the back of an array
</details>

------------------------------------------------------------------------------------------------
5.
What is the return value of `.pop()`?

<details>
    <summary>
        Answer:
    </summary>
    `.pop()` returns the removed element, and we can save that in a variable
</details>

------------------------------------------------------------------------------------------------
6.
What is the return value of `.unshift()`

<details>
    <summary>
        Answer:
    </summary>
    `.unshift()` returns the length of the array after the addition of the new element
</details>

------------------------------------------------------------------------------------------------
7.
What is the return value of `.shift()`

<details>
    <summary>
        Answer:
    </summary>
    `.shift()` returns the removed element, and we can save that in a variable
</details>


------------------------------------------------------------------------------------------------
8.
What is the return value of `.push()`

<details>
    <summary>
        Answer:
    </summary>
    `.push()` returns the length of the array after the addition of the new element
</details>




### .slice()

`.slice()` is a built in method that we can use on an array. This method takes 0 - 3 arguments. It is important to note that `.slice()` returns a SHALLOW copy of the array.

- It can take nothing, in which case it will make a copy of the an entire array
- It can take in a start index, which WILL be included within the resulting copy, and will go towards the end of the array
- It can take in a specified end, which will NOT include the end in the resuling copy.


```js

let arr1 = ["a", "b", "c"];

let copyArr1 = arr1.slice();

copyArr1.push("d");

console.log(arr1) // ["a","b","c"]
console.log(copyArr1) // ["a","b","c","d"]



let arr2 = ["hello", "how", "are", "you"];

let copyArr2 = arr2.slice(2, 3);

console.log(arr2); // [ 'hello', 'how', 'are', 'you' ]
console.log(copyArr2); // [ 'are' ]


let arr3 = ["the", "cat", "ran", "up", "the", "wall", "to", "catch", "a", "mouse"];
let copyArr3 = arr3.slice(2);

console.log(arr3); //['the', 'cat','ran','up', 'the', 'wall', 'to', 'catch', 'a', 'mouse']
console.log(copyArr3); //['ran', 'up','the', 'wall','to', 'catch','a', 'mouse']


```



### .splice()

docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

`.splice()` is a function that has a lot of built in functionality. It can be used to:

1. Modify an existing array
2. Delete an item at any given index
3. Insert an item at any given index
4. a combination of 1 - 3


The return value of splice, when used to delete, gives you a new array of all items removed

`.splice` MODIFIES THE ARRAY.

docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

The passed in start variable is included in the changes

```js

let arr = ["a", "b", "c"];
arr.splice(0);
console.log(arr); // []


let arr2 = ["d", "e", "f"];
arr2.splice(0, 1); // ['e', "f"]
console.log(arr2);

let arr3 = ["I", "to", "eat"];
arr3.splice(1, 0, "want");
console.log(arr3); // ["I", "want", "to", "eat"]

let vipClub = ["zaviar", "ed", "gabe"];
vipClub.splice(1, 0, "anthony", "sam", "alexi");
console.log(vipClub); // ['zaviar', 'anthony', 'sam', 'alexi', 'ed', 'gabe']

vipClub.splice(0, 2, "greg");

console.log(vipClub); // [ "greg", 'sam', 'alexi', 'ed', 'gabe' ]


```


### .indexOf()

docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

`.indexOf` is a built-in method that returns the index of the FIRST element that returns true when compared to a passed in variable. If the passed in variable is not found, it returns -1.

DO NOT GET CONFUSED WITH `indexing` and `.indexOf`. These are not the same thing.

`indexing` - Used to return the element based on a given position
"who is sitting in chair 3?"

`.indexOf` - Used to return the position where an element is found, or -1 if not found.
"which seat is Anthony sitting in?"  (if not found, it will return -1)


```js

let arr = ["anthony", "sam", "ed", "gabe"];

console.log(arr[1]) // "sam" -> "who is sitting in seat 1?" - "sam is sitting in seat 1";

console.log(arr.indexOf("ed")) // 2 -> "which seat is ed sitting in?" - "ed is siting in seat 2"
console.log(arr.indexOf("alexi")) // -1 -> "which seat is alexi sitting in?" - "alexi was not found";

```
