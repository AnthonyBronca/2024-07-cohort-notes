
const express = require("express");

const app = express();

// MIDDLEWARE
app.use(express.json()); // allows us to listen to JSON requests





const students = []; // [ {name:anthony}, {name: sam}, {name: alexi}]

// routes

// req -> Request
// res -> response
// next -> that streamlines the data flow
app.get("/students", (req, res, next) => {
    return res.json({julyCohort: students})
})

app.post("/students", (req, res, next) => {

    const {name} = req.body;
    students.push({name});
    return res.json({newStudentName: name});

})




const port = 8000;
app.listen(port, () => console.log("listening on port: ", port));
