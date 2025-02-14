# React Styling

It is time to make our react components look pretty!

To do this, we can use things like `in-line styling` (not always recommended), or `CSS`. In terms of what you should aim to be your primary styling pattern, you should aim to have everything be done in the `CSS` files.


### Importing CSS files

First, create a `JSX` component you want to get `CSS` styling. Then make a `.css` file to add your styling to.

Lastly, import the `css` styling to the `react` component using `ES6` styling sytnax

`css file`

```css

.container{
    background-color: red;
}

```

`jsx react component`

```js

import './index.css'

```


### JSX attributes

Some `HTML` attributes are protected, so we have to change it up when we use react `jsx`. For example:

`class` -> `className`
`border-color` -> `borderColor`

Others remain the same like:

`id`, `src`, `placeholder`



## Navigation

We learned we can have `url routes` using the `react-router-dom` package. But how can we navigate dynamically using elements on the page

Introducing `NavLinks` and `Links`. This will require us to
