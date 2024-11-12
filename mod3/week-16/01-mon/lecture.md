# Promises

JavaScript a single-threaded language. This means that all of the file must be read top down, from left to right. JavaScript will be looking at each evaluation as it goes, and will not try to move on to the next line of code until it finishes evaluating something. We called this `syncronous` coding, and we briefly learned about this when we covered `asyncronous` code like `setTimeOut` and `setInterval`.  `Asyncronous` means that a program will take some time to resolve some items, and that we will come back to it later.

With the introduction of `node`, JavaScript was slowly able to integrate its idea of "multi-threading" (not true multi-threading) by using `async/await`

Let's look at a syncronous file:


```js

const user = {
    name: "Anthony",
    occupation: "Software Engineer",
    favoriteLanguage: "TypeScript"
}

function getName(user){
    return user.name;
}


function changeFavoriteLanguage(user, newLanguage){
    user.favoriteLanguage = newLanguage;
}

console.log(getName(user)); // "Anthony
console.log(changeFavoriteLanguage(user, "JavaScript")); // undefined -> no return


```

We know that `node` will recognize the `user` object, and the two global functions we created. But it will only start executing those functions during a function call. We will not change the favoriteLanguage until we finishing getting the user.

Unfortunately, not all code can be executed instantly like this. When working with servers, apis, and load times on the browser.

So JavaScript will be able to put things on the back burner (so to speak) by putting it in to the event loop and message queue. This will introduce us to `Promises`


## The Event Loop

1. JavaScript reads file
2. JavaScript executed all Syncronous code
3. For any asyncronous code it finds, it will toss it aside so that it can process
4. After all syncronous code is done, it will look into the `message` queue to see which thing is ready to be executed
5. Anything that is still on the call stack will be waited for, until it can be placed on to the `message queue`



The `message queue`, as the name implies, is a queue that will send off code that is ready to be executed. It will allow JS to execute code in the order that it is received within the queue (remember FIFO?)

## Promises

A `Promise` in JavaScript is a class Object that will contain information for us in either 1 of 3 states:

- Pending
- Fulfilled
- Rejected


Imagine we send a request to retrieve data from an API. It takes some time for our request to travel the internet. Maybe a few Milliseconds, but not instant (and JS likes instant). So a Promise is created. It will start out as `pending`, as it is still being processed. Then, when it is complete, it will be either `Fulfilled` or `Rejected`. A `Fulfilled` promise, can be captured using the `.then` chain or the `async/await` chain.

## Async/Await


To grab code from an API we can use `fetch` to retrieve data.

```js

const response = fetch("https://pokeapi.co/api/v2/pokemon/ditto");
console.log(response);

```
When you run this code, you will see `Promise {<pending>}`. Fetch creates a promise, but we need a way to retrieve it.

Let's use a `.then` chain for this (this is slowly becoming deprecated by the way).

```js

const ditto = fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then((res) => res.json())
    .then((data) => console.log(data));

```
Now we can successfully console.log the ditto JSON object in our terminal! Notice that I am doing the console.log inside the chain. Let's break it down:

1. We fetch the URL - this creates a pending promise
2. When the promise is fullfilled, we get a response. In this API our data comes as `JSON`, so I need to unpack the JSON data using the `.json()` method on the response object. This creates a promise.
3. We grab the 2nd fullfilled promise and name it `data` and then I can print it.

As you can see, it can be a little ehh to work with, and now you have syncronous code trying to incorporate asyncronous code within it (which will lead to bugs). For example, if I had done the `console.log` outside the chain, it would broken.

To solve this, node introduced `async/await`. The same chaining needs to happen because of the 2 promsies created.

```js

const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
const data = await res.json();
console.log(data);
```

Here, I am using the `await` keyword to tell JS to wait for this code so that will be resolved later. However, I am missing one crucial step. The `async` keyword. This needs to be wrapped into a function, so we can declare the scope of a function as `async` rather than the global function.


```js

async function getPokemon(pokemonName){
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const data = await res.json();
    console.log(data);
}

```

Throwing an `async` keyword in front of the `function` keyword lets JS know that this function will take some time. By throwing it in a function, I also made it less hard-cody so that it can fetch any pokemon


### Promise.all()

`Promise.all()` is a method we can use that will take an array of promises and execute them all. We can catch the response object using a `.then`, and view. THIS IS USEFUL FOR INTERVIEWS!

Imagine I had a pokemon trainer object with a party of 3 pokemon, Pikachu, Ditto, and Kyogre. I want to get all the pokemon party data. How can I do that? Well, I can use `Promise.all()`!

```js
async function getPokemon(pokemonName) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const data = await res.json();
    return data;
}


const trainer = {
    name: 'anthony',
    party : [
        getPokemon("ditto"),
        getPokemon("pikachu"),
        getPokemon("kyogre")
    ]
};

Promise.all(trainer.party).then((data) => console.log(data));


```
