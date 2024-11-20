# DOM Manipulation

We learned that we have `HTML` which is the skeleton of a website, `CSS` which is the skin of the website, and `JavaScript` which is the muscles of a website. But we haven't quite learned how to piece it all together. So now we are going to learn how it all works!


Firstly, we need an `HTML` file and a `JavaScript` file. Inside of the `HTML` file, we can add a `<script>` tag, either in the header or at the bottom below the body. It should have a `src` attribute pointing to the relative path of a `JavaScript` file you want to use.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Students</h1>
    <ul class="students-list">
    </ul>

</body>
<script src="./index.js"></script>
</html>



```

Notice the `script` tag at the bottom is importing my JavaScript file to be used on this `HTML` file.

Inside the JS, we will need to establish some items:


## The DOM

The `DOM` is your browsers way of managing the document of a website. It works by laying every item as a tree within the browser. The `DOM` lives within the `Window`. The window creates a document (`DOM`), and this can take some time. For this reason, it can be helpful to put a JS link at the bottom of an `html` file rather than in the header. We need to listen to our window's events, specifically when a `DOMContentLoaded` is established. This is our way of making sure the window now has some document established, in which case we can start executing some code.

```js
window.addEventListener("DOMContentLoaded", ()=>{


    console.log("In the browser!")

})

```

Notice that the console.log prints inside of the browser rather than in the terminal. This is useful for debugging, and you will likely need to use a lot of `console.logs` to make sure you are working with thinkgs correctly.



## Selectors

Now that we have our `HTML` and `JavaScript` connected, how do we get it to do something. First, let's make a button in the `HTML` for submitting some action:


```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Students</h1>
    <ul class="students-list">
    </ul>


    <input placeholder="Enter Name" value="" id />
    <button class="submit-button">Add Student</button>

</body>
<script src="./index.js"></script>
</html>

```

Now, we can select this button using a `class` selector. We can either use:

1. `getElementsByClassName`: which returns an `HTMLCollection`. Almost like an array of every descendent element

```js

const submitButton = document.getElementsByClassName("submit-button");
```

2. `querySelector`: returns the first element that matches this `css` selector:

```js
 const submitButton = document.querySelector(".submit-button");
```


Then, we can add a listener on this button, specifically to listen for the clicks:


```js
//....


 const submitButton = document.querySelector(".submit-button");


    submitButton.addEventListener("click", ()=> {

    })

```


Inside of the eventListener, we can execute any code we may want to do.

We will be tying this in with other selectors to manage a list.

To see other ways for how we tie all this in together, please reference the code we did in class found in the `lecture` directory.
