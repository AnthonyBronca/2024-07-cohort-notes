# CSS

CSS stands for `Cascading Style Sheet`. It has this name because it cascades downwards in terms of `specifity` and it applies styling to markup languages like `HTML`.

If `HTML` is the skeleton of the website, `CSS` is the skin. It is what makes it look beautiful. It adds minimal functionality, if it all, but it helps the user via aesthetics, accessbility considerations, and good design practices can help a user navigate the site using cues.


## Syntax

CSS Syntax is very simple. It is basically just making a bunch of `Objects` with `key-value` pairs, like we would in JavaScript.

One thing to note, the `;` are NOT optional, and this will probably be the source of a lot of weird `CSS` bugs. Don't be that dev that spends 3 hours looking for a semi-colon. Develop good habits early, and practice often.


Here is some HTML for a page:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>App Academy Times</title>
    <!-- THIS IS REQUIRED IN ORDER TO IMPORT A CSS FILE -->
    <link rel="stylesheet" href="./index.css" />
</head>
<body>
    <!-- Notice I am using id here to specify this title -->
    <h1 id="page-title">App Academy Times</h1>
    <!-- nav bar -->
    <div class="nav-bar">
        <!-- left side of the nav bar -> nav links -->
        <div class="left-side">
            <span>Home</span>
            <span>Blogs</span>
            <span>About</span>
        </div>
        <!-- right side of the nav bar -> different posts nav-->
        <div class="right-side">
            <span>Today</span>
            <span>This Week</span>
            <span>Weather</span>
        </div>
    </div>

    <!-- main article section -->
    <div class="main-article-body">
        <h2 id="article-title">Lorem Ipsum Title</h2>
        <p class="body-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda ad, hic error iste officiis tempora aliquid aperiam harum itaque! Doloribus enim quod ut vero iste illo, veniam est eius! Maiores.</p>
        <p class="body-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda ad, hic error iste officiis tempora aliquid aperiam harum itaque! Doloribus enim quod ut vero iste illo, veniam est eius! Maiores.</p>
        <p class="body-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda ad, hic error iste officiis tempora aliquid aperiam harum itaque! Doloribus enim quod ut vero iste illo, veniam est eius! Maiores.</p>
        <p class="body-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda ad, hic error iste officiis tempora aliquid aperiam harum itaque! Doloribus enim quod ut vero iste illo, veniam est eius! Maiores.</p>
        <p class="body-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda ad, hic error iste officiis tempora aliquid aperiam harum itaque! Doloribus enim quod ut vero iste illo, veniam est eius! Maiores.</p>
    </div>
</body>
</html>



```


We will want to select items with CSS, and it is easiest to do this when `HTML` tags have the `id` or `class` attributes. There are other ways to select elements, but we will learn those later.


Here is what the CSS might look like:

```css
body {
    background-color: rgb(215, 215, 215);
}

#page-title {
    font-style: italic;
    font-family: 'Courier New', Courier, monospace;
    font-size: 36px;
    text-decoration: underline;
}

.nav-bar {
    border: 1px solid black;
    padding: 10px;
    display: flex;
    justify-content: center;
    gap: 10rem;
    border-radius: 10px;
}

.left-side>span {
    font-weight: bold;
    text-decoration: underline;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 12px;
    cursor: pointer;
}

.right-side>span {
    font-weight: bold;
    text-decoration: underline;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 12px;
    cursor: pointer;
}

.main-article-body {
    border: 1px solid black;
    border-radius: 10px;
    margin-top: 10px;
    padding: 15px;
}

#article-title{
    font-family: 'Courier New', Courier, monospace;
    text-decoration: underline;
    font-style: italic;
}


.body-text{
    font-size: 14px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

```

Notice that we can grab an element using the `id` selector "`#`" or the `class` selector "`.`".

I am also able to grab all the children of an element using `>`.

Additionally, each element is in the form of a `key-value` pair. The left-hand side of the object is the type of formatting we want to apply to the selected elemnt. The right-hand side is the value of the formatting. For example,

```css
.nav-bar {
    border: 1px solid black;
    padding: 10px;
    display: flex;
    justify-content: center;
    gap: 10rem;
    border-radius: 10px;
}

```

Here, I am selecting the nav-bar.

- I am giving it a border that is 1 pixel thick, solid formatting, and has the color black.

- I am giving the inner-elements some space by using the `padding` feature. This gives every inner-element within the nav-bar some space away from the border of 1 pixels seperation

- I am setting the display type to `flex`, we will learn more about this later.


- I am givingthe elements inside a gap of `10rem`, which is 10 relative units of measurement, depending on the size of the screen (more on this later)

- Lastly, I am giving it a border-radius of `10px` to help round out the border.


## Adding style to your HTML

Within the `head` of the `HTML` file, you will need to add:

```html
  <link rel="stylesheet" href="./index.css" />

```

This is a link with the relationship of stylesheet, and the `href` is set to the location of the stylesheet,relative to where the `html` is
