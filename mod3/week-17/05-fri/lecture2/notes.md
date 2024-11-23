# Notes/ Cheat Sheet for Working with DOM

## Keywords

DOM : `DOM` is the document that is shown in the browser and contains all the `HTML` nodes within the page


## Selectors


Selector is something we can use to grab an element/s from the DOM tree


| Use Case | Selector Name | Returns |
| -------  | ------------- |  ------ |
|   Grab one item       |   querySelector()            |  returns the FIRST element that is found       |
| Grab one item | .getElementById()  | returns the first element that matches the given id |
| Grab HTML Collection of items | .getElementsByClassName | returns an HTML collection of items that have that provided class string |
| Grab HTML Collection of items | .getElementsByTagName() | returns an HTML collection of all tags that match the given query string |
| Grab an Node List of items | .querySelectorAll() | returns a node list of html items that match the given query |


### Examples Usage

```js
// assume we have an HTML element like <h1 id="some-id"></h1>

const element = document.getElementById("some-id");
// returns the element that matches that id

```


```js


// getting all elements with a provided class name


const elements = document.getElementsByClassName("some-class-items");

// return an "array" like list of html items called an HTML Colleciton, which meet the given string query that was passed in to the method

```


## Working With DOM

### Creating Elements

We can create elements using the: `document.createElement("")` method. This will create an element based on the string that was passed in.

```js
const li = document.createElement("li");
// li is an empty list item that I can do javascript to

```


### Removing an Element

We can remove elements from a specific parent using the: `<parent>.removeChild(<child element>)`

```js

const parent = document.getElementById("some-parent-id");
const child = document.getElementById("some-child-id");

parent.removeChild(child);
// removes the provided child from the parent node

```


We can remove an element in general using the: `.remove()` method.

```js
const parent = document.getElementById("some-parent-id");
parent.remove();

// deletes the parent and all children associated to that parent

```


### Appending items to the DOM

We can append a child to a parent element using the: `.appendChild()` method.


```js
const parent = document.getElementById("some-parent-id"); // query for parent
const newChild = document.createElement("li"); // creating some new child element

parent.appendChild(newChild); // adding the newly created element to the parent element

```

## Connecting to HTML

The HTML needs a `<script>` tag, that usually goes below the `<body>` tag. It also needs a `src` attribute with the RELATIVE location to whatever `JS` file we want to reference:


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

</body>
<script src="<relative location to js file>"></script>
</html>


```


The JavaScript file needs to wait for the `DOM` elements to exist:

```js

// hint you can technically make this async, maybe play around with how to do this one day.
window.addEventListener("DOMContentLoaded", ()=> {

    // your code here



})

```



## Using Event Listeners


We can create event listeners which provide functionality to a specific element.


1. Make sure to select the element we want to add the listener to
2. add the listener to that item, and make sure you give it a call back function
3. You can also remove this event listener later if you would like



```js

window.addEventListener("DOMContentLoaded", ()=> {


    // SELECTORS -> grab the selectors here

    const btn = document.getElementById("my-btn");

    // give the btn an event listener, listening to click action

// HINT: You may need to make this async depending on the functionality.
    btn.addEventListener("click", () => {
        // your code here for when the btn gets clicked
    })


    // if you want to remove the event listener.
    btn.removeEventListener("click");

})

```
