# Week 1 - Thursday

## Arrays, Nested Arrays, and Nested loops

We have learned the concepts of Arrays. Blocks of memories with order, written using `[]`. We also know these have indexes we can use to look up values by using the same syntax of `[]`.

```js
let arr = ["a", "b", "c"];
console.log(arr[0]) // "a"
```

Now let us take it up a notch. What if our array had a nested array. To help visualize this, let us think of a recipe list:

1. Get Ingredients A, B, C, D
2. Chop Ingredient A
3. Make the Sauce
    1. Mix A and B
    2. Add water
    3. Add D
4. Add C to the sauce made in step 3
5. Enjoy


See, we use nested lists in real life all the time! So how would this look in good:


```js
let recipe = [
    "Get Ingredients A, B, C, D",
    "Chop Ingredient A",
    [
        "Mix A and B",
        "Add water",
        "Add D",
    ],
    "Add C to the sauce made in step 3",
    "Enjoy"
]

```

So here, when we index into `recipe` at index 0, we get "Get Ingredients A, B, C, D". But when we index into 2, what would get?
We get an `array`! So how do I get "Mix A and B" out of that array? We do nested indexing:

```js
let step3a = recipe[2][0]; // "Mix A and B"
let step3b = recipe[2][1]; // "Add water"
let step3c = recipe[2][2]; // "Add D"

```

Let's look at another example in JavaScript where we have an array of arrays

```js

let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];



// To write a loop we can do:

for(let i = 0; i < arr.length; i++){
    let subArr = arr[i]; // this is each array within each index.
    // to iterate into this subArray we can use another for loop!
    for(let j = 0; j < subArr.length; j++){
        let number = subArr[j];
        console.log(number)
    }

}
```


P.S, this logic can be tricky at first but is relatively simple. The cool thing about this, is that this is the basis for a lot of games. For example, this is how connect four is made. In fact, this is how most 3d games work that need to work on a grid. Mastering nested arrays and nested loops unlocks a lot of doors as a programmer.



### Sub Learning topic: The for...of loop

We learned that we can use a `for...loop` to iterate over elements within an array. This is the most basic and one of the most powerful loops in Javascript. But it can be annoying to write, especially when you do not need to reference the index. Enter the `for...of` loop.


```js

let arr = [1,2,3,4,5,6,7,8,9];

for(let num of arr){
    console.log(arr);
}

// this is the same as

for(let i = 0; i < arr.length; i++){
    let num = arr[i];
    console.log(num);
}

```

While this is nice to know, and I often use it a lot, it has limitations. Who can think of 3 big limitations with this?


1. can't easily go backwards
2. can't access the index
3. can't control how you want to skip over.
