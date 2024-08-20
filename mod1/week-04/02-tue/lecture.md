# Week 4 - Tuesday

## Scope

We have already breifly touched on the idea of scoping, and we have worked with `const` `var` and `let`. So now it is time we look more into scope.

### Block Scope

Block scoping refers to the idea that code only exists within a particular block. This means that variables created inside of a block do not exist outside of that block, and can not be referenced.

`const` and `let` are both block scoping variables, and so we can more easily control where variables are created


### Function Scope

Function scope is the block and all blocks within a function. This means that a variable created at the function scope can be accessed across the entire function. This is why we typically create `const` and `let` variables at the top so that they can be referenced throughout.

`var` is function scoped variable, which can cause some bugs. This is because you can create it within a block, such as an `if` block, and it will move upward or `hoist` to the function scope. This can create some really weird functionalities. We will touch more on that in the hoisting section


### Global Scope

Global scope is the scope that encompasses all the functions and blocks across a file/program. These are things that just exist, or are created to exist and be referenced universally across different blocks/functions. A great example of this is `console.log`. Even though we didn't create `console` variable anywhere, it is created within the `global` object, and thus we have access to use that variable across all scopes.



### Hoisting

Hoisting refers to the idea that something is "yanked" out of its scope (conceptually speaking). `Var` hoists because it can be created in the `block scope` but then it will always hoist towards the top of the `funtion` scope.


### Examples



```js

// global scope


let el = 1;


function myFunc(){
    // function scope
    console.log(el); // undefined -> var is function scoped so it thinks `el` exists but just hasn't been declared
    var el = 2;
    if(true){
        // block scope
        const el = 3;
        console.log(el); // 3 -> block scope -> so it looks at the closest "el" and sees 3
    }
    console.log(el); // 2 -> fuction scope -> now el was assigned to 2, so we can see what el looks like

}

console.log(el) // 1 -> global scope -> we look for el within the global environment
myFunc()

```


```js

// global scope

function myFunc(){
    // function scope
    console.log(el);  // undefined -> var is function scoped but it hasn't been created
    if(true){
        var el = 2; // when the condition is met, el gets set to 2
        // block scope
        console.log(el); // 2 -> we look for el within the block scope first
    }
    console.log(el);// 2 -> we look for el within the entire function, including in the blocks.

}

myFunc()

```
