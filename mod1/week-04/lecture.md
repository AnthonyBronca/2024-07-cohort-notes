# Advanced Array Methods (Again)

## A For loop

A for loop is the building block of most loops in Javascript. It allows us to do loops a finite number of times using a fixed reference. We can use it to customize our loop effortlessly, based on the action we want to do.

## Advanced array methods

Built in methods for looping exist on Arrays. These are *NOT* a replacement for `for..loops` but can be useful when you have a very specific condition that is met by the functionality of one of the below loops.


### .forEach()

The `.forEach` method iterated over every element of an array. It is very similar to the `for...of` loop, although it has less customization. You can use forEach to perform some sort of action with the element

#### Condition

The condition to use the `.forEach` is when you want to perform a specific action per element. You can perform forEach when you need to access each element for some reason, such as to take a total, add them as key/values in an object, push them into an array, etc.

Example:

```js

const arr =  [1,2,3];
arr.forEach((el) => console.log(el)); // prints: 1 2 3



```


### .map()

The `.map()` method is used to iterate over every element of an array and store some value within a new array.

#### Condition

The condition to use `.map` is when you want to get a new array based on some action performed with each iteration of an element from an original array.

Example:

```js

const arr = [1,2,3];

// we want to have a new array where everything is doubled
const doubled = arr.map((el) => el * 2); // pushes el * 2 into a new array

console.log(doubled); // [2,4,6]


```


### .filter()

The `.filter()` method is used when we want to iterate over every element in an array checking for a specific condition that returns true or false. It is used to store all elements that returned true into an array. The resulting array is usually smaller than the referenced array because it is filtering.

#### Condition

When you want to iterate over an array and check the elements based on some condition, and only keep the elements that pass that condition.

```js

const arr = [1,2,3,4];

// filter out all the odds, and keep only the evens
const filteredArr = arr.filter((el) => el % 2 === 0);
console.log(filteredArr); // [2,4] -> 2 and 4 -  returned true so they were pushed


```


### .reduce()

Reduce is used when you want to store some sort of value within a variable over each iteration of the array. We can use this for sums, aggregates, collecting info into one variable (like an array or object).


#### Condition

When you want to use the elements in an array to perform some action while storing the results of that action in a variable and reusing that variable for all subsequent elements.

```js

const nums =  [1,2,3];

const sum = nums.reduce((accum, el) => accum += el);
console.log(sum); // 6
```

We can also pass in an optional parameter to control the start. By Default `accum` will start as the value of whatever was index 0 in the referenced array. We can control this by passing in a 2nd argument. Say we want to add all the values of `nums` on top of 50.

```js
const nums =  [1,2,3];

const sum = nums.reduce((accum, el) => accum += el, 50);
console.log(sum); // 56

```

Here we start `accum` at 50, then add el (1) to it to make it 51. Then 2 to make it 53, then 3 to make it 56.
