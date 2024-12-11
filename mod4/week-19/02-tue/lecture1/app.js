// imports
const express = require("express");

// app initialzation && middle ware
const app = express();

app.use(express.json()); // GLOBAL MIDDLE WARE

// CUSTOM MIDDLE WARE
const addExcalmationMiddleWare = (req, res, next) => {
    console.log("1");

    if(req.body.text){
        req.body.text += "!";
        next();
    } else{
        console.log("we have an error");
    }

    next(); // DO NOT PASS ANYTHING INTO THE NEXT UNLESS IT IS AN ERROR MIDDLE WARE
}



// routes
app.get("/", (req, res, next) => {
    return res.json('hello world');
})

// local middle ware goes between the route and the (req,res,next) params
app.post("/", addExcalmationMiddleWare, (req, res, next) => {
    console.log(req.body);
    return res.json(req.body);
})





const port = 8000;
app.listen(port, ()=> console.log("you are listening to port: ", port));
