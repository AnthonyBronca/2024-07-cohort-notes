# Week 2 Tues

## Announcements

TLDR:

- New support ticket system found on canvas and learner home portal. You can ask questions there 24/7 and someone will try to get back to you as soon as possible

- Kappy is an AI chatbot that you can use. It was trained by App Academy to answer questions without giving you the answers

- Assessment this weekend. Assessment releases on Friday at 12:00am PST (3:00am EST). You will have until 11:59PM PST on Sunday (2:59AM EST Monday) to complete this assessment. You have unlimited attempts to get the solution and we need an overall 80% across the tests in Mod 1 (there are 3 tests). Aim to pass with an 80% minimum on this assessment


## Content

### For loop (recap)

A loop is something we can do over and over and over. All loops follow the same structure:

- What is the start point
- What is the end point
- What will you do each step between the start and the end point
- How will we get from the start to the end point.

Let's build a for loop that will say "hi" 5 times

```js

for(let i = 0; i < 5; i++){
    console.log("hi");
}

// The starting point -> i = 0
// The end point -> i becomes 5 or greater
// Action between steps -> console.log("hi")
// to get from start to end -> i++


```

When we understand this, we can bring in dynamic variables. Let's now iterate over a string

```js
let str = "anthony";
for(let i = 0; i < str.length; i++){
    let letter = str[i];
    console.log(i);
}


// The starting point -> i = 0
// the end point -> i becomes the length of the str or greater (in thsi example str.length is 7)
// The action -> make a variable pointing to the index of i within the string and console.log it
// to get from start to end -> increment 1 at time



// You can visualzie this like this:
let str = "anthony";
for(let i = 0; i < 7; i++){
    let letter = str[i]; // str[0]/str[1]/str[2]/str[3]/str[4]/str[5]/str[6]
    console.log(i); //        a  /   n  /  t   /  h   /   o   /   n /   y
}

```


### While loop (recap)

While loops are built the exact same way, but they look more vertical. Here is us looping 5 times

```js

let i = 0
while(i < 5){
    console.log("hi");
    i++
}

// start -> i = 0
// end -> i becomes 5 or greater
// action -> console.log hi, and increment i
// step -> the step is the incrementation phase

```
