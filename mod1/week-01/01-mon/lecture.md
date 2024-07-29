# Mod 1: Week 1 - Monday

## Summary for this week

- Work on gaining practice using content we learned the last 2 weeks
- working with function using function declaration and function expression syntax
- Learn exit a function early
- Learn how to pair program
- Learn how to use git and github
- Learning nested arrays


### Content to Master

By the end of this week you should have developed a good understanding of, and know how to solve problems
using:

- declaring a variable
- using strings
- indexing into strings
- using the `.length` method on a string to get the last element in a string
- using string interpolation
- using numbers
- using booleans
- using javascript mathemtical operators (+, - , /, *, %)
- using javascript boolean operators (&&, ||, ^, !)
- using control flow logical operations (if, else if, else)
- creating an array
- indexing into an array
- using the `.length` method on an array to get the last element in an array
- basic array methods (push, pull, shift, unshift, splice, slice, indexOf)
- creating a function using function declaration syntax
- creating a function using function expression syntax
- knowing how to use a function's parameters
- knowing how to invoke and call a function while also passing in arguments
- Know the difference between `console.log` and `return`
- know how to exit a function early
- Know how to apply all of the above logic within a function
- Know how to use polyas to break problems down


### Announcements

On July 30th, 2024 (Tuesday) you should complete the Expressions and Functions Checkpoints.
There are found on canvas:

Expression Checkpoint - https://appacademy.instructure.com/courses/331/assignments/19702?module_item_id=62730
Function Checkpoint - https://appacademy.instructure.com/courses/331/assignments/19704?module_item_id=62731

These must be turned in by going to your repo (in the instructions on canvas), cloning the project, and submitting it via a push. As a reminder, after you complete the problems, you must push doing:

`git add .`, `git commit -m ""`, and `git push`

These expression checkpoints are not meant to be graded, but are to check your knowledge of the content covered so far. If you are struggling with the material on those checkpoints, it may be sign that you need to dedicate more time to working on the problems or asking questions during study time.


## Monday Lecture

### Function Declaration vs Function Expression

We already know we can make a function using the `function` keyword, but there are other ways to create functions in JavaScript. Another way we can create functions is by using `function expression` syntax.

```js
let myFunction = function (){
    // logic
}
```

is the `function expression` equivalent of this `function declaration` alternative

```js
function myFunction(){
    // logic
}
```

So when do you choose which to use? For the problems we are currently working with, either or is fine. There
may be a time working with your future company that you encounter something called a Stylesheet. This is a way that companies can ensure dev teams are all coding in a similar fashion. Airbnb, for example, has one of the most popular stylesheets available, and a lot of companies fork off that version for their own company usages. The reason they choose `function expression` over `function declaration` is that `function declaration` becomes part of the global scope, which may cause some bugs depending on the project size. While we have not learned about `scope` yet, the only thing we will cover on that subject now is that you basically can't reuse function names in one file if they were declared in other files using `function declaration`
