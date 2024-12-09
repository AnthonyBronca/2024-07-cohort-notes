# Express and Servers


When we were in mod 3, we learned about creating HTTP servers. It looked something like this:


```js

const http = require("http");


const app = http.createServer((req, res) => {

    if(res.method === "GET" && res.url.startsWith("/home")){
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.write("<h1>Hello world</h1>");
        res.end();
        return;
    }

})


const port = 8000;
app.listen(port, ()=> console.log("listening on port: ", port));

```

This works perfectly fine for light-weight servers that don't need a lot of bloat. Maybe if you were building an application that doesn't need a server for a lot of the functionality, and for the small amount of it that does you don't want to introduce the bloat from frameworks. But working with this as the server gets bigger, and teams get bigger, and requirements get more complex is a PAIN. For this reason, `Express` was created.


`Express` is a `framework` that allows you to quickly create a server with all the request urls and methods, and easily manage things like `request bodies`, `request queries`, `response bodies`, `response headers`, `response status codes`, and `error handling`. `Express` is a framework that needs to be installed so make sure you run `npm install` in projects, or manually install it in a fresh application.



To start, we can run `npm install express`. This will give us the `express` package to start using it to create servers. We will want to make sure we import `express` and then create our `app` by invoking the express package.



```js
const express = require("express");
const app = express();

```

Once we have this, we can easily create a `GET` route on the `app` object. Here is an example of a route that will send a "HELLO WORLD" message using JSON.


```js
const express = require("express");
const app = express();

app.get("/", (req, res, next)=> {
    return res.json("hello world");
})


const port = 8000;
app.listen(port, ()=> console.log("listneing on port: ", port));

```

Notice that we tell the `app` object which method we want to use, and then we pass in two arguments into the function call. The first argument is the `request url`. Here I sent the URL to be `/`. The 2nd argument is a `call back function` that will take 3-4 arguments. For now, we use the `req` (request), `res` (response), and `next` (way to streamline our server flow. More on this tomorrow).

Inside the `call back function`, we can run any code we need to run within that route. All I am doing is sending a json body that says "hello world".



So what if we want to handle a post request? Let's add a tinyyyy bit more complexity to this application. For this example (you wouldn't want to do this in a real app), I am going to create an array of student objects.


```js
const express = require("express");
const app = express();


const students = []; // A student will look like {name: "anthony bronca"}

app.get("/", (req, res, next)=> {
    return res.json("hello world");
})


const port = 8000;
app.listen(port, ()=> console.log("listneing on port: ", port));



```

Now I want to modify my `get` route to send a all the students within a JSON object

```js

const express = require("express");
const app = express();


const students = []; // A student will look like {name: "anthony bronca"}

app.get("/", (req, res, next)=> {
    return res.json({julyCohort: students});
})


const port = 8000;
app.listen(port, ()=> console.log("listneing on port: ", port));


```

On initial `GET`, we should see:

```json
{
    julyCohort: []
}

```

But now we want to be able to add students to this array. Let's make a `post` request that will do this.


```js


const express = require("express");
const app = express();


const students = []; // A student will look like {name: "anthony bronca"}

app.get("/", (req, res, next)=> {
    return res.json({julyCohort: students});
})

// newly added code
app.post("/", (req, res, next)=> {
    students.push(req.body);
    return res.json({student: req.body})
})

const port = 8000;
app.listen(port, ()=> console.log("listening on port: ", port));



```

This will allow us to take some data from the request so that we can push it into the `post`. NOTE: we do not have a lot of error handling in here so make sure, if you are following along, that you are sending good data that won't cause breakage. Now if we hit the `get` route from before, we should see the student added.


HOWEVER!!! If you try to do this as is, it will actually break if I send in `JSON` as a request item. This is because `express` needs to be set to use `JSON` within `request bodies`

What we will do is use a `middle-ware`. We will learn about `middle-wares` tomorrow, but for now just know it is like plugging in a mod from a video game to get more functionality. At the top, under our app creation we can use the `.use` method to turn on the mod we want to use.


```js

const express = require("express");
const app = express();
app.use(express.json()); // turns on the ability to accept requests with JSON bodies


const students = []; // A student will look like {name: "anthony bronca"}

app.get("/", (req, res, next)=> {
    return res.json({julyCohort: students});
})

// newly added code
app.post("/", (req, res, next)=> {
    students.push(req.body);
    return res.json({student: req.body})
})

const port = 8000;
app.listen(port, ()=> console.log("listening on port: ", port));


```

Now, when we use the `POST` route and send a `JSON` request, we can get our application to work as intended.


NOTE: Make sure, when making changes to your file that you stop your server and run the file again.

Now you will see this in the `GET` route after making a post:



```json
{
    julyCohort: [
        {name: "anthony bronca"}
    ]
}

```


YAY EXPRESS








### Accountability Homework

For the accountability group, you will be tasked with making an express application that can get a string of you favorite food at the `/favoriteFood` route, and then accept a post via a `JSON` request body that will allow us to change what the favorite food string is:


what the GET route should look like at `/favoriteFood` URL ON INITIAL LOAD


```json

{
    favoriteFood: ""
}


```

What the post request should look like:


```json

{
    newFavoriteFood: "pizza"
}

```

What the get request will now return:


```json
{
    favoriteFood: "pizza"
}


```


HINT: `console.log` the `req.body` to see how you will get the `newFavoriteFood` item out of the request body.
