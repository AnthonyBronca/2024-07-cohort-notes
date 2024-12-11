// imports
const express = require("express");

// app initialzation && middle ware
const app = express();

app.use(express.json()); // GLOBAL MIDDLE WARE

// CUSTOM MIDDLE WARE
const myTestMiddleware = (req, res, next) => {
    console.log("1");
    // console.log(req.body);
    next(); // DO NOT PASS ANYTHING INTO THE NEXT UNLESS IT IS AN ERROR MIDDLE WARE
}

const newMiddleWare = (req, res, next) => {
    console.log("2");
    next();
}


// routes
app.get("/", (req, res, next) => {
    return res.json('hello world');
})

// local middle ware goes between the route and the (req,res,next) params
app.post("/", myTestMiddleware, newMiddleWare, (req, res, next) => {
    // console.log(req.body);
    console.log("3")
    return res.send(":)");
})





const port = 8000;
app.listen(port, () => console.log("you are listening to port: ", port));
