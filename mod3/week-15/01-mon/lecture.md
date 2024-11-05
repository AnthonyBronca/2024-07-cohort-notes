# Servers

A Server is just a computer that is able to listen/send information over the internet. It does this, ususally by using HTTP or `Hyper Text Transfer Protocal`. HTTP allows us to send requests to a server, from the client side of things, and get a response. If we are the server, it allows us to receieve a request, and send a response.

## Postman

Postman is a tool that we can use to easily work with servers and APIs. We will be utilizing it a lot in this program.


## Request vs Response

A `Request` is like a form being sent in the mail. It has a sender address, a destination address, it has it's stamps, and it has the content of its package. Let's look at some of these:

- A sender Address has a bunch of information, and must contain an IP address so that we can properly get responses

- A destination might look like: `https://www.google.com/`. It tells us that we are reaching out to the secure HTTP server located at google.com. We could have additional information after the trialing `/`, but we will keep it simple for now

- The contents of the request may be something like:

```json

{
    "query": "Cat gif"
}

```

A `Response` ususally follows similar structures. It can send data as text, or more commonly as `JSON`


## JSON

JSON stands for JavaScript Object Notation. It is one of the standards for sending data across the internet, especially when working directly with APIs

JSON is VERY similar to a regular POJO (plain old javascript object), except it has some strict rules.

1. It must be made with curly braces

2. It must have double quotes around the key and the values

3. It must NOT have trailing commas


## How the Internet Works - HTTP version

A server is up and running waiting for requests. It will not process any information until a request is sent to one of the locations it is listening for. A location may be something like: `/api/cats`. If you send a request to `/api/cat` this is NOT the same address so you will either not get any information, or the wrong information. Once we hit the correct address, the server will begin to process any code that it needs to complete and then send back a response. A request should always get a reponse -- afterall, we do not want to leave the other computer hanging, do we?

## HTTP Broken Down

Here is an HTTP request sent to `appacademy.io`, requesitng information:

```
POST / HTTP/1.0
Host: appacademy.io
Content-Length: 31
Content-Type: application/x-www-form-urlencoded
Host: appacademy.io
Connection: keep-alive
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3
Accept-Encoding: gzip, deflate
Accept-Language: en-US,en;q=0.9
username=azure&password=hunter2
```

Notice in the first section, it has something that says `POST`, this is something very important that we will be working with. Additionally, notice that we are stating that the type of our content is `application/x-www-form-urlencoded`.

### HTTP Methods

- GET: Used for requesting information, like going to web-page, getting a form, loading additional content after scrolling. `GET` does not ususally take a body. For example, going to `google.com` sends a `GET` request to retrive the homepage. No additional information is required to access this data

- POST: Used to requesting information to be sent. This is usally used when you want to make a change to the database connected to the server. For example, posting an image on Instagram, logging in, or submitting an assessment. A `Header` and `Body` are required here, where we set the `Content-Type` within the `Header`, and then we send information matching that content-type within the `body`

- PUT: Used to update large portions of data. For example, changing a username, updating a username, AND updating a profile picture. Notice I capitalized the `AND`. This is because a `PUT` is supposed to be used when modifying more than 1 thing within the database. In this case, I am modifying 3 parts of the `User` table in a database. A header/body is required

- PATCH: used to update a single item of data. For example, changing the text of a post after it has been posted. A header/body is required

- DELETE: used to send a request to destroy content within the database. A body can be sent, but doesn't always need to be sent. If a body is being sent, a header is required.


#### Content-Types and the Body

| MIME type| meaning|
| -------- | ------- |
|application/x-www-form-urlencoded|	info submitted directly from an HTML web form|
|application/json|	JSON - data format similar to JavaScript objects|
|multipart/form-data|	info submitted from an HTML web form with multiple media types|

MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/MIME_types/Common_types



| MIME type |	meaning|
| -------- | ---------|
|text/html	 | HTML document|
|text/css	 | CSS styles document|
|text/javascript | 	JavaScript script|
|text/plain	 | plain text|
|image/png | 	PNG Image|
|application/json	JSON - data format similar to JavaScript object|





#### Status Codes

A `status Code` tells us what the result of our request was to a server.

- Status codes 100 - 199: Informational
Informational codes let the client know that a request was received, and provide extra info from the server. There are very few informational codes defined by the HTTP specification and you're unlikely to see them, but it's good to know that they exist!

- Status codes 200 - 299: Successful
Successful response codes indicate that the request has succeeded and the server is handling it. Here are a couple common examples you will use frequently:

    - 200 OK: Request received and fulfilled. These usually come with a body that contains the resource you requested.

    - 201 Created: Your request was received and a new record was created as a result. You'll often see this response to POST requests.

- Status codes 300 - 399: Redirection
These responses let the client know that there has been a change in the URL path and should redirect the user there. There are a few different ways for a server to note a redirect, but the two most common are also the most important:

    - 301 Moved Permanently: The resource you requested is in a totally new location. This might be used if a webpage has changed domains, or if resources were reorganized on the server. Most clients will automatically process this redirect and send you to the new location, so you may not notice this response at all.

    - 302 Found: Similarly, to 301 Moved Permanently, this indicates that a resource has moved. However, this code is used to indicate a temporary move. It's not often that you see temporary moves online, but this code may be used to indicate a permanent move where the old domain should still be valid too. Clients will usually follow this redirect automatically as well, but you shouldn't necessarily update your links until the server returns a 301.

    - 301 Moved Permanently and 302 Found often get confused. When should you use a 302 Found? The most common use case today is for the transition from HTTP to HTTPS. HTTPS is secure HTTP messaging, where requests & responses are encrypted so they can't be read by prying eyes while en route to their destinations.

This is a much safer way of communicating online, so most websites require access via https:// before the domain. However, you don't want to ignore folks still trying to access our content from the older http:// approach!

In this case, you'll return a 302 Found response to the client, letting them know that it's okay to keep navigating to http://our-website.com, but you're going to redirect them to https://our-website.com for their protection.

These status codes are paired with a Location header that specifies the URL path that the client should redirect to.

- Status codes 400 - 499: Client Error
The status codes from 400 to 499, inclusive, indicate that there is a problem with the client's request. Maybe there was a typo, or maybe the resource requested is no longer available. You'll see lots of these as you're learning to format HTTP requests. Here are the most common ones:

    - 400 Bad Request: Whoops! The server received your request, but couldn't understand it. You might see a 400 Bad Request in response to a typo or accidentally truncated request. This is often referred to as malformed requests.

    - 401 Unauthorized: The resource you requested may exist, but you're not allowed to see it without authentication. These types of responses might mean one of two things: either you didn't log in yet, or you tried to log in but your credentials aren't being accepted.

    - 403 Forbidden: The resource you requested may exist, but you're not allowed to see it at all. This response code means this resource isn't accessible to you, even if you're logged in. You just don't have the correct permission to see it.

    - 404 Not Found: The resource you requested doesn't exist. You may see this response if you have a typo in your request (for example: going to appaccccademy.io), or if you're looking for something that has been removed.

    - 403 Forbidden requests let the client know that a valid resource was requested. This can be a security risk! For example: if I guess that you have passwords.html on your website because you just want to be hacked, a 403 Forbidden response tells me I'm correct. For this reason, some sites will return a 404 Not Found for resources that exist but aren't accessible.

A well-known example is GitHub. If you try to open a repository you don't have permission to access, GitHub will return a 404 Not Found even if your URL is correct! This protects you from random users guessing the names of your projects.

- Status codes 500 - 599: Server Error
This range of response codes are the Web's way of saying "It's not you, it's me." These indicate that your request was formatted correctly, but that the server couldn't do what you asked due to an internal problem.

There are two common codes in this range you'll see while getting started:

- 500 Internal Server Error: Your request was received, and the server tried to process it, but something went awry! As you're learning to write your own servers, you'll often see a 500 Internal Server Error as your code fails unexpectedly.

- 504 Gateway Timeout: Your request was received but the server didn't respond in a reasonable amount of time. Timeout errors can be tricky: your first instinct may be that your own connection is bad, but this code means the problem is likely on the server's side. You'll often see these when a server is no longer reachable (maybe due to an unexpected outage or power failure).


### RESTful Convention

Routes vs. Endpoints:

First, what is a route? A route is the URL path for a request. An endpoint is a pattern for a request that has a specific route and HTTP verb combination to define how the server should process the request and what the response is expected to look like. Endpoints are used to distinguish different types of requests from each other. The HTTP verb or method and URL path of a request are both used to identify the endpoint of a request.

Here are some examples of endpoints vs. routes:

Endpoint: GET /users, Route: /users
Endpoint: POST /users, Route: /users
Endpoint: POST /session, Route: /session
REST is a convention for defining endpoints that other developers can easily understand how the server may process requests with those endpoints and what they should expect from their responses.


Route Parameters:

A route parameter is a named segment of the URL path that acts as a placeholder for a changeable part of the path. Route parameters are used to generalize routes to a certain pattern.

Route parameters are indicated in the URL path by a colon, :, followed by the name of the variable part of the path.

For example, a generic URL path for the route /tweets/17 could look like /tweets/:tweetId. The route parameter in this path is :tweetId that acts as a placeholder for the tweet id of 17. The generic URL path of /tweets/:tweetId represents routes starting with /tweets/ and ending in an id (e.g. /tweets/aefe116d-352b-41c2-a5bb-fc74365f2697).

Route parameters are often used in documentation to group and generalize route paths with a variable segment.
