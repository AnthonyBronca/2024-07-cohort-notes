# TypeScript (Optional Lcture)


We will be covering TypeScript. While this isn't taught at App Academy, formerly, we will be covering it (due to popular demand) since it is such a widely sought-after tool at companies. It will also help seperate you from the rest of the bootcamp/college grads that just know JavaScript and do not know TypeScript.



## Summary

TypeScript is a `superset` of JavaScript. This means it can do everything JavaScript can do BUT MORE!!! It is effectively JavaScript with Mods. It is a dev tool, NOT USED FOR END USERS, which means it is a tool for developers. The reason teams use TypeScript is because they can add strict type-checking for their data. This can make it easier to debug, easier to protect code, and easier to work with other JS developers without a whole bunch of weird JS trash code makign its way in to the code base.


To get started using TypeScript you must install it. In your terminal (ubuntu for Windows) run:

```
npm install -g typescript
```

This will allow you to use TypeScript globally across all projets, if needed.



## Types

In JavaScript, everything is an `any` type. This means I can create something like this:


```js

let num = 1;

num = "a";

```

While the naming convention may deter some devs from doing such a dumb reassignment (which can cause bugs that are hard to find), it doesn't actually stop them from doing so.

TypeScript, on the other hand can determine types, and you can manually set them for additional beverity.

```ts

let num = 1;
num = "a"; // error shown BEFORE run
```

Some common types:

```ts

let num:number = 1;
let str:string = "hello world";
let numArr: num[] = [1,2,3];
let strArr: string[] = ["hello", "world"];
let bool: boolean = true;
let myError: Error = new Error("bad code");


```

## Functions

We can use these types with function parameters as well. This can help ensure that devs are not invoking functions with incorrect types, potentially leading to errors.

In JS you would have to do something like:


```js

const addNums = (num1, num2) => {
    if(typeof num1 !== "number" || typeof num2 !== "number"){
        throw new Error("num1 and num2 must be numbers")
    } else{
        return num1 + num2;
    }
}

```

We can instead just use TypeScript to handle all of this ugly code:


```ts

const addNums = (num1: number, num2: number) => {
    return num1 + num2;
}

```

Now, we will get squiggly linter errorss telling us that we can not pass in bad data to our functions.


## Compiling Code

TypeScript has an entire list of pre-made mods (you can make/add your own).

To see the mod list, we run:

```
tsc --init
```

This will give you a `typescript config` file. Simple uncomment the mods you want to turn on.

What we can do is set our typescript inside of a `src` file, and then have it output `javascript` into a `dist` folder.

Then, in the future we can just run:

```
tsc
```

This is a command that stands for typescript compile, and it will turn out Typescript into JavaScript. Here is the JavaScript example that would be created from the TypeScript we saw in the Functions example:


```js
var addNums = function (num1, num2) {
    return num1 + num2;
};


```
While this doesn't have all those if conditionals, we were already able to tell the developers what data they shouldn't be passing in. Additionally, notice that we have a `var`. Not the best practice in a JS sense, but it is fine when TypeScript makes it. We can also have TypeScript output a more up to date version of JS if we want.
