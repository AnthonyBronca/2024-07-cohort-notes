// imports
const express = require("express");

// app initialization && our global middle ware

const app = express();

app.use(express.json()); // allows us to use json in request bodies

const checkBodyValidationMiddleWare = (req, res, next) => {
    next(); // WE SHOULD NOT PASS IN ANYTHING INTO THIS
}


// routes
app.get("/", (req, res, next) => {
    return res.json(":)")
})


// anytime we touch the database we should use a try...catch
app.post("/", checkBodyValidationMiddleWare, (req, res, next) => {
    try {

        console.log(req.body);
        const { username } = req.body;

        if (username.toLowerCase() === "anthony") {
            throw new Error("Name can not be anthony")
        } else {
            return res.json(":)");
        }
    } catch (e) {
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
app.listen(port, () => console.log("sending love from port: ", port));
