// imports
const express = require("express");

// app initialization && our global middle ware

const app = express();

app.use(express.json()); // allows us to use json in request bodies

// fake database
const usernames = new Set(); // set lets us key into it in o1, and it lets us handle uniqueness



const checkBodyValidationMiddleWare = (req, res, next) => {
    console.log(req.body);
    const {username} = req.body;
    if(!username){
        throw new Error("You must pass in a username, the key must be 'username'");
    } else{
        if(username.length < 3){
            throw new Error("You must have a valid username length of at least 3 characters")
        } else if(usernames.has(username)){
            throw new Error("That name has already been taken")
        } else{
            next(); // WE SHOULD NOT PASS IN ANYTHING INTO THIS
        }
    }
}


// routes
app.get("/", (req, res, next) => {
    const users = [];
    usernames.forEach(name => users.push(name));
    return res.json({users});
})


// anytime we touch the database we should use a try...catch
app.post("/", checkBodyValidationMiddleWare, (req, res, next) => {
    try{
        const {username} = req.body;
        usernames.add(username);
        return res.json({"newUser": username});

    }catch(e){
        next(e)
    }


})

// error handling middle ware

// express always looks to see if a middleware starts with "err" and if it does it considers an error handling middle ware
const myErrorHandler = (err, req, res, next) => {
    console.log("1");
    err.message += " <3";
    next(err);

}

const mySecondErrorHandler = (err, req, res, next) => {
    console.log("2");
    res.statusCode = 400;
    return res.json(err.message);
}


app.use(myErrorHandler); // plugs in the error handling middle ware to work locally
app.use(mySecondErrorHandler);


const port = 8000;
app.listen(port, ()=> console.log("sending love from port: ", port));
