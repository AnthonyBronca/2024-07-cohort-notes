# Week 3 - Wednesday

## Warm Up

<details>
<summary>Who can explain the difference between a Primitive type and a Reference Type?</summary>

</details>

<details>
<summary>How does the syntax for creating an Array differ from creating an Object?</summary>

</details>

<details>
<summary>Is an Array ordered?</summary>

</details>

<details>
<summary>Is an Object ordered?</summary>

</details>


## Spread

Okay, so we have arrays and objects, but sometimes we want to take the values out of their respective containers to put them into another container.

Here is an example with Javascript without `spread`

```js

const parentArray = [];
const someArr = [1,2,3];

// functon to add 1,2,3 into parent array;

const someArr = () => {
    for(let el of someArr){
        parentArray.push(el);
    }
    return parentArray
}


```

So how can we do this in one line.


```js

const someArr = [1,2,3];

const someArr = () => {
    const parentArray = [...someArr]
}


```

The spread operator pulls out elements from the associated array/object and places them within the container they are found in. The syntax is `...`

But There is a catch to this simple syntax. It shares the same syntax as something called `rest` operator


## Rest

Imagine you are building a function that can take any number of arguments. Maybe a bunch of numbers to calculate. We can use `rest` to grab the rest of the arguments within a variable. Rest creates an array.


```js

const addNumbers = (num1, num2, ...restNums) => {
    let sum = num1 + num2;
    for(let num of restNums){
        sum += num;
    }
    return sum;
}


```


Key difference. `rest` is used in the parameter of a function and can grab all the arguments passed in. It creates an array.
`Spread` is used within an existing array/object to take child elements and placing it in a parent container




## Destructuring

Destructuring refers to the process of pulling elements out of the container. We can destructure array elemenets, and object values.


Imagine we have an object for a person:

```js

const person = {
    name: "Bob",
    height: "5'9",
    hairColor: "brown",
    wife: "Mary",
    occupation: "Fire Fighter",
    age: 57,
    children: ["Derek", "James", "Sophie"],
    favoriteFood: "curry"
}

```

If we need to consistently grab "Bob" from the object, we could reference it using `person.name`, or we can destructure it:


```js
const person = {
    name: "Bob",
    height: "5'9",
    hairColor: "brown",
    wife: "Mary",
    occupation: "Fire Fighter",
    age: 57,
    children: ["Derek", "James", "Sophie"],
    favoriteFood: "curry"
}

const {name} = person;

console.log(name); // "Bob"

```

This becomes especially helpful when we need to pull items out of a heavily nested object. This is used a lot when dealing with APIs.

You can also destructure arrays, which can be helpful for moving the order of array items in place. Truth be told, this is rarely used outside of DSA

```js


const arr = ["A", "B", "C"];

[arr[1], arr[0]] = [arr[0], arr[1]];

console.log(arr); // ["B", "A", "C"]

```

Note: YOU NEED THE SEMINI COLONS OF THIS WILL BREAK
