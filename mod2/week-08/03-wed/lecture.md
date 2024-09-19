# Types of JavaScript errors

There are seven core errors you'll encounter in JavaScript and each type of error will try to communicate why that error occurred:

- SyntaxError - represents an error in the syntax of the code.
- ReferenceError - represents an error thrown when an invalid reference is made.
- TypeError - represents an error when a variable or parameter is not of a valid type.
- RangeError - representing an error for when a numeric variable or parameter is outside of its valid range.
- InternalError - represents an error in the internal JavaScript engine.
- EvalError - represents an error with the global eval function.
- URIError - represents an error that occurs when encodeURI() or decodeURI() are passed invalid parameters.


## Syntax Error

This is thrown when JavaSript tries to parse code and it is not valid syntax. Think of this as having spelling/grammar errors in English

Example:

This is broken because we have a typo with "function"

```js
funtion broken () { // Uncaught SyntaxError: Unexpected identifier
  console.log("I'm broke");
}

```


## Reference Error

This error is thrown when you try to reference code outside of its scope (or it does not exist)

Example:

```js
function callPuppy() {
  const puppy = "puppy";
  console.log(pupy);
}

callPuppy(); // ReferenceError: pupy is not defined

```
While ther ewas a Typo in "pupy", JavaScript does not know spelling so it looks for something literally called "pupy" and the variable was "puppy". Therefore, it does not find what was referenced and an error is thrown

## Type Errors

These errors occur when you try to do code on a type that does not exist on the type.
This is like when you try to invoke a string as if it were a function, or try to use array methods on a number.

Examples:

```js

const name = "anthony";

name.filter((letter) => letter !== "a"); // error is thrown because `.filter` is an array method

```

```js
const name = "anthony";

name = "sam"; // Error is thrown because we can not reassign "const" variables
```


# Working with Error Classes


The `Error` class and all other Error types are available for us to use. They usually take in a message, and can then be thrown using the `throw new` keywords.


```js
throw new Error("This is an Error"); // will throw an Error
```
