# Media Queries

Sometimes, you will have to work on the frontend and realize that not everything looks the same on your monitor as it does on someone elses'. As a developer, we want to code measurements where some components are sized relative to the size they are displayed on, while other components have fixed measurements. Even so, we sometimes have to remove some components, or restructure others when the size of the screen changes. This is where `media queries` comes in.


In CSS, you can select a media query based on conditions like:

- if the screen is smaller than...
- if the screen is bigger than ...
- if the screen is between x and y...

let's make a media query that will change the background color from red to blue when the size gets too small.

```css

div {
    background-color: red;
}


@media (min-width: 500px) {
    div {
        background-color: blue;
    }
}



```

on default, we set the background color of this div to red. However, when the condition is met (screen reached 500px or greater), the media query kicks in and the color changes to blue.

You can also use logical operators if there are multiple conditions to meet. Like if the screen is between 500px and 700px we want blue, but if it is 701px or greater we want green:


```css

div {
    background-color: red;
}

@media (min-width:500px) and (max-width: 700px) {
    div {
        background-color: blue;
    }
}

@media (min-width: 701px) {
    div {
        background-color: green;
    }
}



```


## When to use

You can use media queries if you want to make your website work on things like tablets, phones, or small screens. Just keep in mind, that you may also want to make a web-app for mobile devices if this is a site actively visited by mobile users. We can use media queries to maybe change something from horizontal to vertical lay out. Or we can use media queries to change the font size as the screen gets msaller. Maybe we want some less-used icons within the nav bar to disappear as they get too close to the more important icons we want to keep displayed. Litle things like this help improve the QOL for users on differing devices.
