# Error Handling Middle-Ware

## Error Handling Middle-Ware

We learned in the previous lecture (Tuesday) about `middle-ware`. Recall that `middle-ware` is just a function that we can plug and play into our `express` application. Sometimes these `middle-wares` will provide extra functionality, or validate data, or go to APIs. Other times, they can be used to reroute our code using the `next` functionality so that we can handle errors


### Try...Catch
To begin learning about Error Handling, let's refresh on the topic of `try...catch`. `try...catch` is a code block we can use in `javascript` to create almost like a "save point" within the code to attempt to run some functionality. If the code succeeds, we progress in our code run through. If it fails, rather than crashing out, the errors get moved to the `catch` portion of the block so that we can reroute those errors. Let's look at a basic example.

Imagine this is good code that does not throw an error:
```js

try{

    const goodCode = () => {
        return "hi";
    }

    goodCode(); //  no errors are thrown -> proceeds on witht he rest of code

} catch(error){
    // this is never hit because there are no errors within the try portion
}



```

It almost works like an `if...else` block, where the `else` portion will not run if the `if` portion is hit, and vice versa.

Now let's imagine we do have errors:

```js

try{
    const badCode = () => {
        return "error"
    }
    badCode()
}catch(error){
    console.log(error)
}

```

In this example, if the `badCode` function I made were to have an error during execution (it doesn't but imagine), then the error would not be thrown to the console and stop execution. Instead, the error would be sent to the `catch` block and we can print it.

Now, we can introduce the `throw new Error` functionality that we covered in Mod 2, to forecefully create an Error


```js

try{

    const checkIfNameIsAnthony = (name) => {
        if(name === "anthony"){
            throw new Error("Name can not be: Anthony");
        } else {
            return false;
        }
    }

    checkIfNameISAnthony("anthony"); // throws an error

} catch (error){
    console.log(error); // prints -> "Name can not be: Anthony"
}


```


So we now remember how to handle `try...catch` blocks and how the code progresses through these. Let's go back to Express!!



### Errors in Express

For our Error Handling Middle ware, let's work with a practice similar to the one we just did with the `try...catch` examples. I want to have a route that will take in a username. If the username has not been used, we can add it to our fake database. If it does exist, we have to create an error. Keep in mind, we will want to use `error handling middle-ware` to prevent our code from crashing out.


Here is a basic example of our application that can take a `username` when the POST route is hit, and add it to our set. On the GET side of things, we have to convert our SET into an array for sending it out, so that is why we use the `forEach` on the Set.

```js
const express = require("express");
const app = express();
app.use(express.json());

const usernames = new Set(); // will handle unique usernames

// middle wares


// routes

app.get("/", (req, res, next)=> {
    const resUserNames = [];
    usernames.forEach((name) => resUserNames.push(name));
    return res.json({usernames: resUserNames})
})

app.post("/", (req, res, next)=> {
    const {newUserName} = req.body;
    if(usernames.has(newUserName)){
        throw new Error("Name is already taken");
    } else{
        usernames.add(newUserName);
        return res.json({newUserName});
    }
})



const port = 8000;
app.listen(port, ()=> console.log("listening to port ", port));
```

Now, currently, this works perfectly until a username that has already been taken is sent. If that occurs, our error is sent to the client (this can be not secure to do as it can also give hackers some decent information about the code we wrote), it looks ugly, and it basically breaks the application until it is restarted.

WHENEVER WE DO A POST TO A DATABASE WE SHOULD USE A TRY...CATCH (this can save you on the mod 4 project)

Let's refactor this to use one now

```js

const express = require("express");
const app = express();
app.use(express.json());

const usernames = new Set(); // will handle unique usernames

// middle wares


// routes

app.get("/", (req, res, next)=> {
    const resUserNames = [];
    usernames.forEach((name) => resUserNames.push(name));
    return res.json({usernames: resUserNames})
})

app.post("/", (req, res, next)=> {
    try{

        const {newUserName} = req.body;
        if(usernames.has(newUserName)){
            throw new Error("Name is already taken");
        } else{
            usernames.add(newUserName);
            return res.json({newUserName});
        }
    } catch(e){
        console.log(e.message);
    }
})



const port = 8000;
app.listen(port, ()=> console.log("listening to port ", port));


```

Doing this small change now reroutes our errs to the `catch` portion of the code. The only caveat now is that we never hit a `res.json` so nothing is sent to the client. To handle this, we could just return a message:

```js
const express = require("express");
const app = express();
app.use(express.json());

const usernames = new Set(); // will handle unique usernames

// middle wares


// routes

app.get("/", (req, res, next)=> {
    const resUserNames = [];
    usernames.forEach((name) => resUserNames.push(name));
    return res.json({usernames: resUserNames})
})

app.post("/", (req, res, next)=> {
    try{

        const {newUserName} = req.body;
        if(usernames.has(newUserName)){
            throw new Error("Name is already taken");
        } else{
            usernames.add(newUserName);
            return res.json({newUserName});
        }
    } catch(e){
        return res.json(e.message);
    }
})



const port = 8000;
app.listen(port, ()=> console.log("listening to port ", port));

```

But this causes the isue that we will have to re-write a bunch of code when it comes to sending out messages. Not to mention handling status codes, and all the other stuff we may want to be doing for not just this route but most routes.

THIS IS WHERE ERROR-HANDLING MIDDLE WARE COMES TO SAVE US!!


### Creating An Error Handling Middle Ware

We learned how to create custom middle-wares doing:

```js

const myMiddleWare = (req, res, next) => {
    // code
}


```
The `(req, res, next)` tells Express that this is a middle ware, but *NOT* an `Error handling middle-ware`. Instead to do that we have to add the `err` parameter.


```js

const myErrorMiddleWare = (err, req, res, next) => {
    // code
}


```

And anytime we want to send code to one of our error handleing middlewares, we us the `next()` function, BUT WE HAVE TO PASS IN SOMETHING IN TO IT.

Here is a simple table to help you understand the different `next()` and `middleware` functionalities

| Code  | Use Case |
| ----  | -------  |
| `next()` | Sends data from the current middle-ware to the next in line (not used for error handling )|
| `next(e)`| sends data from the current middle-ware to the first error handling middle-ware |
| `(req,res, next)` | used for telling express that the function is a regular middle-ware |
| `(err, req, res, next)` | used for telling express that the function is an Error Handling middle-ware |



Going back to the code examples, let's create an error handling middle ware that will intercept this "Name is already Taken" message and change it up a little.


```js
const express = require("express");
const app = express();
app.use(express.json());

const usernames = new Set(); // will handle unique usernames

// middle wares


// routes

app.get("/", (req, res, next)=> {
    const resUserNames = [];
    usernames.forEach((name) => resUserNames.push(name));
    return res.json({usernames: resUserNames})
})

app.post("/", (req, res, next)=> {
    try{

        const {newUserName} = req.body;
        if(usernames.has(newUserName)){
            throw new Error("Name is already taken");
        } else{
            usernames.add(newUserName);
            return res.json({newUserName});
        }
    } catch(e){
        return next(e);
    }
})


// ERROR HANDLING MIDDLE WARE
const errorHandlingMiddleWare = (err, _req, _res, next) => {
    console.log(1);
    err.message = `Error Encountered: ${err.message}`;
}

// plugs in the error handling middle wares
app.use(errorHandlingMiddleWare);



const port = 8000;
app.listen(port, ()=> console.log("listening to port ", port));

```

Now our data is going out of the route and in to the `error handling middle-ware` that we created. You can see we will print out the "1" and then what I am choosing to do for this example is edit the error message (this is just for DEMO purposes).

Notice that we need to plug in the error-handling middle ware to be used globally.

So what can we do now? Well we can either send it to the user, or send it to the next error handling middle ware using `next(err)`.

```js
const express = require("express");
const app = express();
app.use(express.json());

const usernames = new Set(); // will handle unique usernames

// middle wares


// routes

app.get("/", (req, res, next)=> {
    const resUserNames = [];
    usernames.forEach((name) => resUserNames.push(name));
    return res.json({usernames: resUserNames})
})

app.post("/", (req, res, next)=> {
    try{

        const {newUserName} = req.body;
        if(usernames.has(newUserName)){
            throw new Error("Name is already taken");
        } else{
            usernames.add(newUserName);
            return res.json({newUserName});
        }
    } catch(e){
        return next(e);
    }
})


// ERROR HANDLING MIDDLE WARE
const errorHandlingMiddleWare = (err, _req, _res, next) => {
    console.log(1);
    err.message = `Error Encountered: ${err.message}`;
    next(err);
}

const nextErrorHandlingMiddleware = (err, _req, res, _next) => {
    console.log(2);
    res.statusCode = 400;
    return res.json(err.message);
}

// plugs in the error handling middle wares
app.use(errorHandlingMiddleWare);
app.use(nextErrorHandlingMiddleware);


const port = 8000;
app.listen(port, ()=> console.log("listening to port ", port));


```

Here I created a 2nd err middle ware so that we can showcase that the `next(err)` sends the error down to the next error handling middle-ware. Each new Error Middle-ware will allow us to modify the errory in some type of way. Here, I decided to now add a statusCode and finally send some type of message back to the user.



#### Types of Error Handling Middle Ware you can use

- Making one that will see if the error is of a specific type (bad request, unauthorized, bad database response, connection issues, incompatible hardware type)
- Making one that can modify the message based on the specific type of error, or add some type of HTML we may want to send to accompany this error.
- Making one that will modify the status message relative to the type of Error we will send
- Making one that will us to send an email to anyone who may need to receive it (like if a server error is happening maybe send a notification to the dev team that something is up and whoever is on call needs to get eyes on)
- Making one that will send an email to client. This can be useful if the error is like an unathorized access to the account. Like if some successfully logged in to the account but they are in a weird location so we prevent the access of the account and send an email to the real owner to verify the access.
- Making one that will add to some internal facing database for metric handling to see where which parts of code encounter the most amount of errors, how long they take to resolve, etc.

You can really do a lot with both Middle-Wares and Error Handling Middle-Wares. It is entirely up to you and your team how you want this to work, because at the end of the day they are JUST FUNCTIONS and we simply control the data flow.
