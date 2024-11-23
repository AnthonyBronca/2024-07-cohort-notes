# Notes/Cheat sheet for Working with DOM


## Keywords

DOM: The document of HTML that is displayed on the browser. It is comprised of nodes (HTML nodes)


## Selectors

Selector is something we can use to grab an element/s from the DOM tree



| Use Case | Selector Name | Returns |
| -------- | ------------- | ------  |
|  Grab one item |  querySelector() | the FIRST element that is found  |
|  Grab one item  | getElementById()   | Grabs the first element that matches the given id string
| Grab HTML collection of items    |  getElementsByClassName()    | grabs all the items that match the given class name string |
| Grab HTML Collections of items  | getElementsByTagName()  | html collection of all tags that match the given string |
| Grab Node list of items   | querySelectorAll()   | returns a node list of items that match the given query string   |


### Example Usages

```js
// grab an HTML collection of items
const items = document.getElementsByClassName("example-class-name"); // [<h1></h1>, <span></span>]

```


```js
// grab a node list of items

const items = document.querySelectorAll(".example-class-name"); //[<h1></h1>, <span></span>]

// HINT: Use the same type of CSS-Selector within the string that you would use if this was CSS and not JS

// # for ids, . for classes

```




## Working With DOM

### Creating Elements

We can create elements using the: `document.createElement()`;

We pass in the string of the HTML tag we want to create

Example:

```js

// creating a un-ordered list
const ul = document.createElement("ul");

```


### Removing an Element

We can remove elements from a specific parent using the: `<parent>.removeChild(<child>)`

```js

const ul = document.getElementById("ul-id");
const firstLi = ul.children()[0];

ul.removeChild(firstLi); // removes the first Li from the UL node

```

We can remove an element using: `remove()` method:

```js

const ul = document.getElementById("ul-id");
ul.remove(); // deletes the ul and all its children

```


### Appending items to the DOM

We can append a child to a parent element using the: `.appendChild` method

```js

const parent = document.getElementById("some-parent-id");
const newChild = document.createElement("span");

parent.appendChild(newChild);

// Adds the newChild we created to the existing parent element that is already on the DOM

```


## Grabbing Items from a Server

We can bridge a front-end component to a back-end component using the `fetch` method. `fetch` is asyncronous, so we will have to account for this using `async` functions and `await` key word.


```js
// image we are grabbing from API: http://test.com/api/people

// GET Method does not need an "options" tag
async function getData(){
    const res = await fetch("http://test.com/api/people"); // returns a response promise
    const data = await res.json(); // returns a body data IF the API is returning JSON to us (check the docs of whatever API you are using)

    return data; // or whatever key you need
}



```
