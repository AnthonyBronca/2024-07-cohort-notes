# Friday

## Class Discussion

What is the difference between a function's arguments and parameters?



What would be the argument in this example?
What would be the parameter?


```js

function doubler(num1){
    return num1 * 2;
}

doubler(5) // returns 10

```


## String operators

In Javascript, we have some built in methods we can use. Some of them work on `numbers`, some of them work on `string`. Let's discuss some built in functions that we can use on `strings`


### .toUpperCase()

If we have a string:

```js

let helloWorld = "hello world";

```

How can I make this all capital so that a function outputs: `HELLO WORLD`

We can use the `String.prototype.toUpperCase()` method. This is a built in function that works on a `String`.

Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase

It allows us to capitalize all letters in a string, and returns a NEW string with the capitals.

```js
let helloWorld = "hello world";

console.log(helloWorld.toUpperCase()); // Prints: HELLO WORLD

```

Notice that the syntax is a little different. We are using the `Function` that is built into all `Strings` in Javascript. Hence why it is a `String` method. To use built in methods we use the `.` and call the function we want to use.


### .toLowerCase()

`.toLowerCase()` works almost the same as `.toUpperCase()`, except that it does the reverse! You can probably guess that it will give us a new string with all the letters lowercased

Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase

```js

let yelling = "I AM YELLING!";

console.log(yelling.toLowerCase()); // Prints: i am yelling!

```


## Polyas


Polya was a famous mathmetician who coined a methodology of problem solving. It follows 4 steps:

1. Understand the problem
2. Psuedocode
3. Write code to match the Psuedocode
4. Refactor your code, repeating step 1 - 3 if needed



Example with a tough problem:

```js

/*

Write a function called bigLittleWords. it will take in two words. The first word will
be capitalized. The second word will be lowerCased. The function will return the phrase of combining these two words, space seperated

example:

word1 -> sam
word2 -> AntHONy

answer should be: "SAM anthony"



*/




```


## NPM

If you want to use certain functionality for code you have not written yourself (such as running the test specs provided by App Academy), you may need to install some `dependencies`. If you notice that there is a file called `package.json`, this is like your recipe list. It tells `NPM` what files and code we may need to install.

1. Make sure to `cd` into the directory where you see `package.json`. If you see this file when you run `ls` you are in the right spot!
2. Install the `dependencies` using: `npm install`

This will give you a folder called `node_modules` which contain all the dependencies needed.


## Running tests

Some projects will have a `test` or `tests` folder. These are folders that have code written to manage a testing suite. Here at App Academy, you will see a few used but in the early mods we will mostly use `mocha.js`.

You can definitely run files locally, as you may have been doing, by `cd`ing into the folder with the file you want to run and then running `node <filename>` to run the specified file. This is all fine and good, but the tests are what we will care about when grading. To run tests:

1. Make sure you are in the right directory. `cd` to the directory that has the `test` or `tests` folder in it. If you run `ls` and see a `problems` folder and `test` folder, you are in the right spot.
2. run `npm test test/<filename>`. `npm test` is the command, and `test/<filename>` is the specific test we want to run. If you had a test file called `01-plus-five.js` the command would be: `npm test test/01-plus-five.js`.
3. If you want to run all the test files to get a cumulative score, you can simply just run `npm test`
4. Lastly, you can also use `mocha` if you have it installed (most of you have it globally installed so you all should be set). The command is simply: `mocha` in the directory where you can see `test` folder located.

Additional ways to `mocha`:

1. `mocha` -> runs all the tests
2. `mocha -b` -> runs all the tests until the first test that fails
3. `mocha test/<filename>` -> runs the specific file
4. `mocha -R nyan` -> runs test specs and outputs a nyan cat for the lols
5. `mocha -R landing` -> runs test specs and outputs a landing strip for the lols



## Homework

1. Work on the Expression checkpoint located under Thursday for week 0a. If you do not have access, please DM Sam and I so we can confirm you are part of the a/A team on github

2. Attempt to solve the `average` problem
