# Week 3 - Tuesday

## Objects

Objects are a way of life in the programming world. They make everything go round, and are an important data structure that you will use
daily for the rest of your career as an engineer. In fact, JavaScript is written entirely with Objects. Arrays in Javascript are technically objects. Strings in Javascript are technically objects. Functions in javascript are technically methods on an object. Everything is an object.
In other languages, Objects are just as important too. Video games? Everything is an object. Mobile development? Everything is an object.


So what is an Object?

An object is an *Unordered* collection of data. If an Array (in computer science) is a building, an Object is the city with roads, buildings, and everything else. Objects are made up of two things: `Keys` and `Values`. A `key` is reference variable that we use to look something up within the object, and the `value` is the data itself. We use `{}` to create objects, and then assign key value pairs using `:` seperation.

Here is a basic example:

```js

const myObj = {
    myKey: "myValue"
}

```

We created an object and assigned it to a variable called "myObj". so "myObj" is the object itself. Inside the object we have 1 key-value pair. The key is "myKey" and the associated value is "myValue", which is a string data type. We can pull the value out of the object by looking it up using the key

```js
const myObj = {
    myKey: "myValue"
}

console.log(myObj["myKey"]); // "myValue"

```
Look familiar? This is because it is the same syntax we use to `index` into arrays! Arrays have key value pairs too. The keys were ordered numbers from 0 onward. The values were the elements we placed inside the array. Now we are doing the same thing but the keys can be whatever we want.

Take a look at this object for a movie theatre:

```js

const myMovieTheatre = {
    theatreName: "Anthony's Movie Theatre",
    phoneNumber: 123456789,
    totalOccupancy: 200,
    address: "123 SomeStreet Way.",
    zipcode: 55555,
    city: "Miami",
    state: "Florida",
}

console.log(myMovieTheatre);
/*
{
  theatreName: "Anthony's Movie Theatre",
  phoneNumber: 123456789,
  totalOccupancy: 200,
  address: '123 SomeStreet Way.',
  zipcode: 55555,
  city: 'Miami',
  state: 'Florida'
}

*/

```

Now that we have an object for a movie theatre, we can look things up using key value pairs.

Here is a table for visualization:


| Key | Value | Datatype |
| --- | ----- | -------- |
| theatreName | "Anthony's Movie Theatre" | string |
| phoneNumber | 123456789 | number |
| address | "123 SomeStreet Way | string |
| zipcode | 55555 | number |
| city | "Miami" | string
| state | "Florida" | string


So if we want to get the name of the theatre, we specify the object name "myMovieTheatre" and then look up the value associated with it:

```js

const myMovieTheatre = {
    theatreName: "Anthony's Movie Theatre",
    phoneNumber: 123456789,
    totalOccupancy: 200,
    address: "123 SomeStreet Way.",
    zipcode: 55555,
    city: "Miami",
    state: "Florida",
}

console.log(myMovieTheatre["theatreName"]); // "Anthony's Movie Theatre"
console.log(myMovieTheatre["zipcode"]); // 555555

```

### Syntax

An object, in Javascript, can be indexed in two ways. They are NOT interchangeable, so it is important to know when you can use which.


#### Dot Notation

We can use `Dot Notation` to look something up with keys if we KNOW the key exists exactly as written. For example, to grab the theatreName:

```js
const myMovieTheatre = {
    theatreName: "Anthony's Movie Theatre",
    phoneNumber: 123456789,
    totalOccupancy: 200,
    address: "123 SomeStreet Way.",
    zipcode: 55555,
    city: "Miami",
    state: "Florida",
}

console.log(myMovieTheatre.theatreName); // "Anthony's Movie Theatre"

```

This will NOT work if you have a variable. For example:

```js
const myMovieTheatre = {
    theatreName: "Anthony's Movie Theatre",
    phoneNumber: 123456789,
    totalOccupancy: 200,
    address: "123 SomeStreet Way.",
    zipcode: 55555,
    city: "Miami",
    state: "Florida",
}

let variable = "theatreName"
console.log(myMovieTheatre.variable); // undefined
```

This is because `dot notation` expects you to pass in a key exactly as it is found. If you need to use variables, you can use `bracket notation`

### Bracket Notation

We have already seen `bracket notation`, as this is what we use with arrays.

```js
const myMovieTheatre = {
    theatreName: "Anthony's Movie Theatre",
    phoneNumber: 123456789,
    totalOccupancy: 200,
    address: "123 SomeStreet Way.",
    zipcode: 55555,
    city: "Miami",
    state: "Florida",
}

console.log(myMovieTheatre["theatreName"]); // "Anthony's Movie Theatre"

```

We can also use this with variables. So if we have some variable pointing to the associated string version of a key:

```js
const myMovieTheatre = {
    theatreName: "Anthony's Movie Theatre",
    phoneNumber: 123456789,
    totalOccupancy: 200,
    address: "123 SomeStreet Way.",
    zipcode: 55555,
    city: "Miami",
    state: "Florida",
}

const myVariable = "threatreName"
console.log(myMovieTheatre[myVariable]); // "Anthony's Movie Theatre"


```


When in doubt which to use, you can never go wrong with `bracket notation`, unlike `dot notation`. But `dot notation` should be used when possible for cleanier code (devs are lazy)


### Iterating over an object


We already know of the `for...of` loop that we can use to iterate over an `Array`. Luckily for us, if we want to iterate over an `object` we can use the `for...in` loop.


```js
const myMovieTheatre = {
    theatreName: "Anthony's Movie Theatre",
    phoneNumber: 123456789,
    totalOccupancy: 200,
    address: "123 SomeStreet Way.",
    zipcode: 55555,
    city: "Miami",
    state: "Florida",
}

for(let key in myMovieTheatre){
    let value = myMovieThreatre[key]; // need bracket notation since using a variable
    console.log(value);
}


```


We can also use some built in methods to get just the `keys`, `values`, and `entries`. We use this by using the GENERAL `Object` object, and using its methods to get the keys/values/entries of a passed in object.
```js
const myMovieTheatre = {
    theatreName: "Anthony's Movie Theatre",
    phoneNumber: 123456789,
    totalOccupancy: 200,
    address: "123 SomeStreet Way.",
    zipcode: 55555,
    city: "Miami",
    state: "Florida",
}

console.log(Object.keys(myMovieTheatre));
/*
[
  'theatreName',
  'phoneNumber',
  'totalOccupancy',
  'address',
  'zipcode',
  'city',
  'state'
]
*/

console.log(Object.values(myMovieTheatre));
/*
[
  "Anthony's Movie Theatre",
  123456789,
  200,
  '123 SomeStreet Way.',
  55555,
  'Miami',
  'Florida'
]

*/

console.log(Object.entries(myMovieTheatre));
/*  Array of arrays. Where the nested array index 0 is a key and index 1 is a value
[
  [ 'theatreName', "Anthony's Movie Theatre" ],
  [ 'phoneNumber', 123456789 ],
  [ 'totalOccupancy', 200 ],
  [ 'address', '123 SomeStreet Way.' ],
  [ 'zipcode', 55555 ],
  [ 'city', 'Miami' ],
  [ 'state', 'Florida' ]
]

*/
```
