# React

React is an open-source framework built and managed by Meta (facebook).
It was built in order to remove the need to do DOM manipulation (vanilla js).
It operates using a very efficient Virtual DOM. What this means is that you can create HTML components with Javascript, and react will manage the DOM by comparing it to a virtual dom. If there is a difference between the virtual and the real dom, react will try to replace that components.


## Why React

Because of the tools, because of the popularity, and because (seemingly) everyone knows React, choosing React to power your frontend is an easy choice. Hundreds of thousands of other software developers know and love React. Tens of thousands of companies use React on their websites to power their web applications. App Academy's own learning platform--the one you're using right now to read this page!--uses React to render content.

There are other viable modern alternatives to React. However, they are almost all heavily influenced by React's design and implementation. Learning them is like learning React and different parts of its vibrant ecosystem. React has really become the stick by which all other frontend libraries are measured. It will likely continue to hold that position for the near future.


## JSX

While React looks VERYYY similar to HTML, we are not coding in HTML when we use react. We are instead coding in something called JSX! Essentially, it is just javascript that gets translated into plain old Javascript. We use something called `Babel` that converts modern javascript into older javascript. This helps our code using new syntax still maintain some backwards compatability with browsers

Now, Because we are *NOT* coding in HTML, we have to understand some of the differences.

Firstly, Let's look at some DOM in Javascript.

```js
const hello = <h1>Hello World!</h1>
```
This is a variable in JS pointing to an HTML Node. We can then append it to the DOM tree and it will become HTML. In this way, we are using Javascript to manage a Virtual Dom, and then we can add it to the real DOM.

In React, we typically create function components (or class based components if you are ancient 😛)

Let us create a react component using *JSX* that let's us see a hello world h1 tag

```js

const MyComponent = () => {
    return (
        <h1>Hello World</h1>
    )
}

export default MyComponent;
```

Notice that it lOOKS like HTML, but it is not. It is Javascript!

So if you try to use REAL HTML attributes like:

`class` -> protected HTML attribute

You will run into bugs. Instead, JSX has to make its own variables since it is not real HTML. We can add a clas to the example above doing this:

```js
const MyComponent = () => {
    return (
        <h1 className="my-class">Hello World</h1>
    )
}

export default MyComponent;

```

So, because it is just Javascript, we can also do really cool things! No more ugly HTML comments, instead we get the classing Javascript comment syntax.

Also, we can inject Javascript directly into it! We use curly braces to tell React that we want to inject Javascript somewhere. Let's add a button to the component above, and then make a function that will `console.log` "hello world"

```js
const MyComponent = () => {
    const sayHello = () => {
        console.log("hello world");
    };


    return (
        <div>
            <h1 className="my-class">Hello World</h1>
            <button onClick={sayHello}>Say Hello</button>
        </div>
    )
}

export default MyComponent;

```

We can also make dynamic attributes, let's use interplation to change the className to use a variable.

```js
const MyComponent = () => {

    let classColor = 'blue';

    const sayHello = () => {
        console.log("hello world");
    };

    return (
        <div>
            <h1 className={`my-class-${classColor}`}>Hello World</h1>
            <button onClick={sayHello}>Say Hello</button>
        </div>
    )
}

export default MyComponent;

```

We will explore ways to make this dynamic on Thursday 🥰



## Props

In react, we typically want to think of things as `components`. Think of it like a piece of the puzzle. The better you get at compartmentalization and making good components, the cleaner your code will be, easier your debugging will be, and more reusable your functions will be. So if we have components, we can pass information from one component to another using PROPS

```js

// Main Component
import SubComponent from './SubComponent'
const MainComponent = () => {
    const number = 1;
    return (
        <>
            <h1>Hello</h1>
            <SubComponent number={number} />
        </>
    )
}

export default MainComponent;

```
```js

// Sub Component
const SubComponent = ({number}) => {
    return (
        <span>{number}</span>
    )
}

export default SubComponent;

```

Notice that in the parent, we can use the child. We can also pass data from the parent to the child using `PROPS`. This is where I did `number={number}`

I am declaring key, value pair. The key is `number` and the value is the variable `number`. This allows me to destructure it from the function parameters using `{number}` within the SubComponent. I can then use that destructured value in my code by using `JSX` syntax for injecting javascript, `{number}`. Phew! That all sounds confusing on paper but makes more sense playing around with it.


## Lists

Because React is AWESOME! We can easily make lists using arrays.

We can map over an array and repeat functionality, which helps reduce clutter. Here is a list with `Hello-world-{number}` printed out 100 times.

```js

const ComponentList = () => {
    const list = new Array(100).fill(null);

    return (
        <>
        {list.map((_el, idx)=> (
            <div key={idx}>
                <p>{`Hello-World-${idx + 1}`}</p>
            </div>

        ))}
        </>
    )
}

export default ComponentList;


```


### JSX NEED TO KNOWS

Below is some points you NEED to know in order to be successful with react.

1. JSX is NOT HTML
2. JSX can only have one parent.

```js
const MyComponent = () => {
    return (
        <h1 className="hello-world">Hello World</h1>
        <button onClick={sayHello}>Say Hello</button>
    )
}

export default MyComponent;


```

Notice here, we have 2 PARENTS. H1, and Button are both at the same level. We need one parent, and for that reason it is common to use `div` or `React Fragments`. Divs exist in the DOM and therefore may cause some issues if not careful (although this an important tool to know how to use when needed). If instead we want "2 parents" we can use a `React Fragment`.

Here is some Grand-Pa style way of using react fragments:

```js
import React from 'react';
const MyComponent = () => {
    return (
        <React.Fragment>
            <h1 className="hello-world">Hello World</h1>
            <button onClick={sayHello}>Say Hello</button>
        </React.Fragment>
    )
}

export default MyComponent;

```

But here is the new way to do things:

```js
const MyComponent = () => {
    return (
        <>
            <h1 className="hello-world">Hello World</h1>
            <button onClick={sayHello}>Say Hello</button>
        </>
    )
}

export default MyComponent;

```

3. JSX does *NOT* HAVE SELF-CLOSING TAGS. You must include a `/` before the closing angle bracket that does not have a corresponding close tag

Here are some examples:

| HTML       |  JSX         |
| :---------:|:------------:|
|  `<br>`    |   `<br/>`    |
|  `<hr>`    |   `<hr/>`    |
|  `<img>`   |   `<img/>`   |
|  `<input>` |   `<input/>` |
|  `<link>`  |   `<link/>`  |


4. JSX uses camel casing. You can also use dashes for some attributes

Here are some examples of some attributes:


| HTML       |  JSX         |
| :---------:|:------------:|
|  `class`    |   `className`    |
|  `for`    |   `htmlFor`    |
|  `onclick`   |   `onClick`   |
|  `aria-*` |   `aria-*` |
|  `data-*`  |   `data-*`  |


## VITE

There are a lot of tools out there that you can use top set up a react project. For a long time `create-react-app` was VERY popular. It utilized webpack as a bundler, and helped install all the necessary dependencies to get a react app off the ground quickly. For reasons unknown, the maintainer of this package stopped working on `create-react-app`, which opened up a lot of vulnerabilities and outdated practices. The industry has mostly moved away from `create-react-app` though. So if you're watching youtube tutorials (or using AI ... hopefully you are not), you will often be told to use this as a tool, thus exposing your applications to tons of vulnerabilities and deprecated toolings.

Enter `VITE` (pronuces veet: it is French). It uses `Electron` based processing, which helps its scripts run much faster. It is also being actively maintained and allows us to use `npm` versions 18+.

P.S You should all be on `node -v ` 18.0.0

To use `Vite` you can use the following:

With npm:

`npm create vite@latest`
