const express = require("express");


const app = express();

// MIDDLEWARES
app.use(express.json()); // plug-in to allow us to receive JSON


const students = [];

app.get("/students", (req, res, next) => {

    console.log("hello nodemon :D <3")
    return res.json({julyCohort: students})

})

app.post("/students", (req, res, next) => {

    const {newStudent} = req.body;

    students.push({name: newStudent});

    return res.json({"newStudent": newStudent})


})


const port = 8000;
app.listen(port, () => console.log("listening on port: ", port));
