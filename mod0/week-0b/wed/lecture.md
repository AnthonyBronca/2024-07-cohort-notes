# Wednesday Week 0b

## Arrays

It is time to learn a data structure we will use a lot. An `Array` is a computer science term for an `ordered` collection of data. You can think of it as an ordered list.

Here is a human example of an array for steps to make a cake

1. Get ingredients
2. Mix Cake Flour
3. Beat egg whites
4. Add Sugar
5. Add Flour Mix
6. Place mixture in Tube Cake Pan
7. Bake at 325 for 50 minutes
8. Turn Cooked cake upside down
9. Sift over Cake
10. Slice and Enjoy

In Javascript we use square brackets with comma seperation. In Javascript we can add a list of any type of combination of items, but in Computer Science, an Array should be a collection similar data times. So a collection of strings, collection of numbers, or a collection of collections. In JavaScript, while we can, make a combination of data types within an array, good practice will be to avoid doing.


Here is an example of this collection of ingredients within an array in Javascript:

```js
const makeCakeSteps = [
"Get ingredients",
"Mix Cake Flour",
"Beat egg whites",
"Add Sugar",
"Add Flour Mix",
"Place mixture in Tube Cake Pan",
"Bake at 325 for 50 minutes",
"Turn Cooked cake upside down",
"Sift over Cake",
"Slice and Enjoy",
];

```


Like with strings, we can and will commonly index into the arrays using 0 indexing.

Example:

```js

console.log(makeCakeSteps[0])// "Get ingredients"
console.log(makeCakeSteps[3])// "Add Sugar"
console.log(makeCakeSteps[makeCakeSteps.length - 1])// "Slice and Enjoy"


```



### Built in Array Methods

Here are some built-in Array methods you should know about.



#### .length()

docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length

`.length`, like with strings, can be used to return the amount of items within the `array`

```js
let pets = ["cat", "dogs"];
console.log(pets.length) // 2

```

#### .includes()

docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

`.includes()` will return true or false if the passed in argument is found in the array

```js
let pets = ["cat", "dogs"];

console.log(pets.includes("cats"))// true
console.log(pets.includes("fish"))// false


```

#### .join()

docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

`.join()` will combine the array using a passed in delimiter

```js
let pets = ["cat", "dogs"];

let myPets = pets.join(" ");
console.log(myPets); // "cats dogs"

let myPets2 = pets.join("-");
console.log(myPets2); // "cats-dogs"


```
