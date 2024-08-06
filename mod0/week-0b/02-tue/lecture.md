# Week 0b Tuesday

## Looping


Looping is FUNDAMENTAL to programming languages. The idea of doing some functionality over..and over..and over.. and over... and over.. and.. well you get the rest 😛

There are many ways we can do iterations in Javascript. Some are via built in methods like `.includes()`, `.slice()`, `.splice()` etc. But we should alwayssss know how to custom build loops. The best way to do these is with `for...loops` and `while` loops.

## For loops

There are a few ways to do `for...loops` but we will look at the most basic version. With this version, you can build all other looping functionality.

*FOR LOOPS* are for *KNOWN* iterative counts. If we can know some sort of start and end point, a for...loop is the way to go.

A `for...loop` is build using 4 components:

1. The declarative step - Figure out where the starting point is
2. The conditional step - Figure out where the ending point is
3. The iterative step - Figure out how you will get from step 1 to step 2
4. The action step - Perform functionality while step 2 is *TRUE*


Here is an example of iterating over a string to print each letter.
```js

let firstName = "anthony";

// note the SEMICOLONS
for(let i = 0; i < 5; i++){
    console.log(firstName);
}

```

We can use this to print "anthony" 5 times. Let's walk through the action of this code.

1. i is set to 0
2. is i (0) smaller than 5? - true
3. console.log the name
4. increase i by 1 (i is now 1)

---- LOOP ----

1. i is set to 1
2. is i (1) smaller than 5? - true
3. console.log the name
4. increase i by 1 (i is now 2)

---- LOOP ----

1. i is set to 2
2. is i (2) smaller than 5? - true
3. console.log the name
4. increase i by 1 (i is now 3)

---- LOOP ----

1. i is set to 3
2. is i (3) smaller than 5? - true
3. console.log the name
4. increase i by 1 (i is now 4)

---- LOOP ----

1. i is set to 4
2. is i (4) smaller than 5? - true
3. console.log the name
4. increase i by 1 (i is now 5)

---- LOOP ----

1. i is set to 5
2. is i (5) smaller than 5? - FALSE

For loop ends

We ran this iteration 5 times



## While loops

If for loops are meant for *KNOWN* loops, how can we do it for *UNKNOWN* loops? Enter the `while` loop.
We can use a `while` loop to continue looping as long as a condition is met.

Fun Fact: These are the basis for a lot of games. Logic - "While game is running, render a frame"

Let's think about a pokemon battle
(https://www.youtube.com/watch?v=JWTJRLW6uRM)


When a pokemon's health is below 20 points, the game needs to notify the user that the pokemon is close to fainting. We can do this with flashing health bars, and also with sound loops. In a game, we have no idea how long the player will go with low health. For all we know, the player put the game down and went to the bathroom so the pinging needs to keep on going FOREVERRRR! (or until the pokemon faints/heals). So what will the logic look like for this:

1. While a pokemon's health is below 20 AND the pokemon is not fainted do:
    a. Play noise
    b. player action

This will keep on going until the action phase, step b, is performed causing a false conditional at step 1. So if the pokemon faints, or is healed to 20 hp or above the loop will stop.


While it may be a little tricky for us to recreate this in Javascript at our current level, we can still use `while` loops for known iteration purposes to get practice.



```js

let i = 0;

while(i < 3){
    console.log("anthony");
    i++
}

```

The logic:

---- LOOP ----
1. i is set to 0
2. is i (0) smaller than 3? - true
3. console.log the name
4. increase i by 1 (i is now 1)
---- LOOP ----
1. i is set to 1
2. is i (1) smaller than 3? - true
3. console.log the name
4. increase i by 1 (i is now 2)
---- LOOP ----
1. i is set to 2
2. is i (2) smaller than 3? - true
3. console.log the name
4. increase i by 1 (i is now 3)
---- LOOP ----
1. i is set to 3
2. is i (3) smaller than 3? - false


We ran the action within the loop 3 times
