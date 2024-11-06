# Servers

## REST

REST is a convention (but a heavily encouraged convention). It is a way of create HTTP routes (not always the same as a client-side URL). It tells us that we should have a route that tells us what it is doing, and what to expect from that route.

Example:

Imagine you have a database that has a list of all the colors. We can grab all the colors at:
`/colors`

But if we want to get a specific color, like blue, we can do:

`/colors/blue`.

We can also chain these together so that we can include parent information. Imagine if we have a clothing store where some outfits have different colors:

`/pants/street-chino/colors/blue`

This tells us that out of all the `pants` available, we are looking at the `street-chino` style. And out of all the street chino `color` options, we are selecting the `blue` one.

It is important to note that you do not want to keep chaining these past the parent generation. Here is a bad example where I am including grand parent+ generations:

`/shop/clothing/men/pants/street-chino/colors/blue`
While this is very specific and wouldn't break if we had a route like this, it is not fun to do that. REST tells us we can trim the grandparents so we can get rid of `shop`, `clothing`, `men`, and keep the parent `pants` and the child `colors`

## Working with Servers

Time to work with JavaScript again! WOOOOO! We can use a very basic `http` server in Javascript to allow us to send data. This is how we can create an API! Note, while this does work and is very basic, there are frameworks that will make this MUCH easier to do. You do not need to memorize this:


```js

// get the http module from node package
const http = require('http');

// make a server that takes in a request and response within the function parameters
const server = http.createServer((req, res) => {
    res.status = 200; // sets the status code to 200
    // res.setHeader("content-type", "text/html"); // sets a header to specify the body is text/html
    res.setHeader("content-type", "application/json"); // sets a header to specify the body is JSON formatted
    res.end(JSON.stringify({"hello": "world"})) // sends the data as JSON (JSON.stringfy makes it a string)
    // res.end("<h1>Hello<h1/>") // sends the data as HTML
});

const port = 8000; // establishes a port that we want to use

// sets a listener on the port so that node does not just stop working on file read, and we can listen to
// incoming requests at the specified port
server.listen(port, ()=> console.log("server is listening on port", port));


```

This will allow us to create a server at `http://localhost:8000/`, but we can't really ping other URLs like we learned with the REST routes. So let's make some improvements to this and include some `route handling`

```js
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    return res.end('Splash Page');
  }

  if (req.method === 'POST' && req.url === '/cat') {
    res.statusCode = 201;
    res.setHeader('Content-Type', 'text/plain');
    return res.end('Created a Cat!');
  }
});

const port = 8000; // establishes a port that we want to use
server.listen(port, ()=> console.log("server is listening on port", port));

```
