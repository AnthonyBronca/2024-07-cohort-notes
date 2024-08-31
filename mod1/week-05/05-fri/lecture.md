# Week 5 - Friday

We have covered the idea of recursion, and now we are going to briefly cover the topics of Asyncronous code.

This will be further explored next week, when formally introduced, but let's go over some basic concepts.

We know JavaScript is read top down, left to right. It checks for evaluations of code before moving on to the next line of code.
In recursion, we may need to wait for the execution of some recursive functionaltiy which places code in the call stack. In JavaScript, this way of reading code is considered Syncronous code. It is read in the exact order that it is seen, and there is no room for stalling or delayed code. Way back when, the way to solve this was using something called a `.then` chain, which you will learn more about closer to mod 3. We can also use the more modern `async` and `await` keywords to wait for execution after some time passes. While we won't really be covering these topics just yet, it is important to realize that there are tools that we can use to create custom asyncronous code. This can help us while we are working with code that may take time. Speaking of time, it is now time to learn about code that will take time (puns intended). `setTimeout` is a built in function that lives on the `global` scope. It allows us to wait some amount of time before executing code. This is great because somtimes certain things may take time, and we may want to delay the execution of code.

Let's imagine you wanted to wait for a loading action to perform on the screen. Maybe you are waiting for some document to download/upload and you want to send a confirmation to the user that their upload/download was successful. We can use a `setTimeout` to wait for the confirmation, based on some sort of condition.

`setTimeout` takes a callback, and an argument of time in `milliseconds`

```js
 setTimeout(()=> {
        console.log("hello world")
    }, 5000);
```

This function takes a callback (note the purplish annonymous function that prints hello world) and an argument of 5_000. This will print "hello world" to the console after 5 seconds have elapsed,


`setInterval` is another asyncronous piece of code that lets us repeat functionality with a time gap in between:

```js
let stop = setInterval(()=>{
        console.log("Hello world")
        count++
        if(count === 2){
            clearInterval(stop)
        }
    }, 2000);

```

It returns an interval object that we can store in a variable and reference in order to clear it using `clearInterval`
