# Express Router and Environment Variables

## Express Router


We are getting to the point where we have a lot of code happening in one file. While this is expected as our applications get better, we want to make sure we can organize routes, especially if they are start getting different route urls or there is nesting that is happening.

Let's look at an example route:

`/posts/:postId/comments/:commentId`

This is starting to get big, and may be confusing if right next to this route we have another thing like:

`/carts/:cartId/items/:itemId`

While tecnically this can work, it is not good for debugging, organization, or working with teams.


`Express Router` allows us to move some of our app's routes into their own files if needed. Just make sure you plug this `middle-ware` in.


Let's make an express app in the `app.js` file:

```js
const express = require("express");
const routes = require("./routes")


const app = express();
app.use(express.json());

// use routes here



const port = 8000;
app.listen(port, ()=>console.log("port: ", port));



```


next, in a different directory called `routes`, let's make an `index.js` file and make an `express router`

```js
const express = require("express");
const router = express.Router();



router.get("/hello", (req, res, next) => {
    res.json("hello");
})


module.exports = router;


```


Here, instead of making a new `app` we make a `router` set to `expresss.Router()`.

We need to make sure we export this so we can hook up the route to the application.

Back in the `app.js` file, let's hook it up:

```js
const express = require("express");
const routes = require("./routes")


const app = express();
app.use(express.json());
// adding a route here
app.use(routes);




const port = 8000;
app.listen(port, ()=>console.log("port: ", port));



```


This is fine because now we have our `router` making a route for "/hello". But if this entire router was going to be prefixed with a bunch of "/hello"s, then we can actually predetermine the starting route like this inside the `app.js`

```js
const express = require("express");
const routes = require("./routes")


const app = express();
app.use(express.json());
// adding routes
app.use("/hello", routes); // notice we are prefixing the routes now




const port = 8000;
app.listen(port, ()=>console.log("port: ", port));


```

Over on the `routes/index.js` file our route will be refactored to just be a "/":

```js
const express = require("express");
const router = express.Router();



router.get("/", (req, res, next) => {
    res.json("hello");
})



module.exports = router;

```


This will effectively make the route "/hello/"


## Enviornment Variables

Environment Variables are things that we can use to hide information, yet still reference it within the application. This can be things like: Admin keys, user access tokens, API credentials, etc.


When we run commands like:

`node <file name>` we can actually load up some enviroment variables inside of this command:

```
hello=hi node app.js
```

Notice I am creating a key-value pair within the command and now that environment variable lives within the run of my application for so long as that port stays open with that reference. If I stop the application, it will lose access to those environment variables unless i set them again.

We can see these if we add a `console.log(process.env)` somewhere in the code to see the process running and see all the environment variables that automatically get injected when we run files.


Now the issue is, we may have a bunch of enviroment variables to keep track of, it can be annoying to fill these in perfectly each time, and if we are working with others it would be annoying to have to send them the start commands and hope that doesn't get leaked anywhere.


So what we can do is create a file to store these in. The file will be a `.env` file.

IT IS VERY IMPORTANT THAT WE DO NOT PUSH THIS UP, however, I will push up one or two for demo purposes. After that, it is on you to remember that these need to be created.


Let's make a `.env` file and load it up with my `hello=hi` thing

```
hello=hi
```

Let's run the application again with just `node app.js` and see what happens in our `process.env`:

We don't see it!!!

This is because we have no way of getting our node or app to read these environment variables. So what we can do is use some packages to get this to run for us automatically:

Enter: `dotenv` and `dotenv-cli`.

`npm install dotenv dotenv-cli`

Using just `dotenv` we can insert out .env variables into the application


```js
const express = require("express");
const routes = require("./routes")

require("dotenv").config(); // loads up the dotenv variables (1 way)

const app = express();
app.use(express.json());
app.use("/hello", routes);


console.log(process.env);


const port = 8000;
app.listen(port, ()=>console.log("port: ", port));


```

But if we don't want to do that, we can also just load it up into our cli commands (this is useful for when we want to load up environment variables using terminal commands for our database later)


In your package.json, you can add this to your start script
```
dotenv node app.js
```


Now it will automatically import all your `.env` ports into the application.


Finally, let's use one of these .env variables.

Let's make a variable for our port:

```
hello=hi
PORT=8000
```

*note* it is standard practice to capitalize the entire key to tell other devs this is a constant and should not be changed


In your `app.js` file we can use that via `process.env.PORT`

```js

const express = require("express");
const routes = require("./routes")


const app = express();
app.use(express.json());
app.use("/hello", routes);


console.log(process.env);


const port = process.env.PORT || 8000;
app.listen(port, ()=>console.log("port: ", port));

```

the `||` will allow this to work if someone did not set their port to 8000, but it now gives someone the control to be able to set their own port number if they need to without changing the code.



Lastly, we talked about not pushing up the `.env` file.

If you have a `.env` file, you should always make a `.env.example` file that CAN and SHOULD be pushed. It should have template keys, but not have any real values:

In the `.env.example` file

```
hello=<your greeting>
PORT=<port number>
```
Make sure to add the `.env` file to your `.gitignore` file before doing any type of `git` actions.
