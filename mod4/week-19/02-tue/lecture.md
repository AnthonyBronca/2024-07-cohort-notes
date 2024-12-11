# Express Middle-Wares

In Express, there is something called a `middle-ware`. These are like plug and play functions that will give our Express application more functionality and higher complexity, while minimizing the overal coding bloat. In a video game example, this is like being able to pick and choose which mods and settings you want to play the game on, and being able to install additional ones to plug in later.


Let's look at a useful middle-ware we have already seen:

To be able to use `json` in the `req.body`, we need to plug in the middleware to allow for these request types to come in.

```js
// imports
const express = require("express");

// app set up & middle wares
const app = express();
app.use(express.json()); // <----- This is a middleware


// routes and rest of code ....
```

Notice that we use the `.use` method in order to allow for our `middleware` to be used throughout our entire application. Specifically, the `middleware` we are using is the `express.json()` method, which will allow our express application to listen to `JSON` request bodies.

Other examples of middlewares we will see later include: data validation middlewares, security middlewares, dev ops middlewares, and many more


But having global middlewares are not the only place for middlewares to exist. We can also have them happen for specific routes.

let's create our own middle ware

## Creating Custom Middlwares


There is a keyword we can use called `next` that is used as an parameter for all express routes. It allows us to send data along the chain of middleware/s that we may have or dictate if we need to send off to different middle ware routes (maybe one piece of data goes to the database and the other gets thrown into the error bin)

To create a `custom middle-ware` we have to create a JavaScript function using the `req, res, next` keywords.

```js
// imports
const express = require("express");

// app initialization and middleware set ups
const app = express();
app.use(express.json()); // global middleware

// CUSTOM MIDDLEWARE TO ADD ! TO ALL POST REQUESTS

const addExclamationMiddleWare = (req, _res, next) => {
    if(req.body.text){
        req.body.text += "!";
        next();
    }
}


app.get("/", (req, res, next)=> {
    return res.json("hello world")
})

// using a middleware in a specific route, rather than app-wide.
app.post("/",  addExclamationMiddleWare, (req, res, next) => {
    const {text} = req.body;
    return res.json(text);
})

const port = 8000;
app.listen(port, ()=> console.log("listening on port ", port));


```

Notice in this example, the middleware is created but not used like the `express.json` middleware. This means it is just a function we created. Then, on the `post` route, we add the middleware we want to use BEFORE the `req, res,next` for the route.

The data now goes as follows:

1. User sends a request to API
2. Request finds the correct route to hit (in this case, a POST route with the URL of "/")
3. The data goes into the "addExclamationMiddleWare" BEFORE it goes into the route
4. Inside the middlware, the data gets checked and slightly modified (we added an exclamation)
5. The middleware then invokes the `next` function which goes to the routes `req,res,next` call back.
6. The data gets processed within the route, and then finally a response is sent back to the user.


While this is a dumb example of when to use a middleware, it can showcase the data flow and give you ideas of `middle-wares` you may want/need to create down the line.

NOTE: You can add a bunch of middlewares into methods (or use them globally), so play around with it!

We will learn about `Error Handling` and `Error Handling Middle-Ware` Tomorrow!




## Accountability Group Homework

Build an `Express` Application that has two routes. A `GET` route and a `POST` route, both for the `url` of "/users"

1. When you `GET` /users, you should see something like this:

```json
{
    "users": []
}
```


2. The `POST` route to /users should take in a `LOCAL MIDDLE-WARE`. The `Local Middle-Ware` will be responsible for checking if the request body has both the "name" and "phone" keys. If it has both of these keys, it must then check to make sure that the value for the "phone" does not have any non-numerical characters (Ex: Should not allow a phone like: 123-456-7890). It must also make sure the length of the name is greater than 3, and the length of the phone is exactly 10 characters long.

Example of a GOOD `request body`:

```json

{
    "name": "Anthony",
    "phone": "1234567890"
}

```
The response for the post should say:

```json
{
    "newUser": {
        "name": "Anthony",
        "phone": "1234567890"
    }
}

```

Example of a bad `request`


```json
{
    "name": "A",
    "phone": "123-456-7890"
}

```
The name is too short, and the phone contains invalid characters.

3. Getting /users after making 2 successful posts should look something like this:

```json
{
    "users": [
        {
           "name": "anthony",
           "phone": "1234567890"
        },
        {
            "name": "sam",
             "phone": "09876544321"
        }
    ]
}

```



HINT, remember to `invoke` your `next` function, and to use your `express.json` middleware GLOBALLY.
