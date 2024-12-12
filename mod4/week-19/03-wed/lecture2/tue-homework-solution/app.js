const express = require("express");

const app = express();
app.use(express.json());

// fake database
const users = [];

//middle ware
const bodyValidationMiddleWare = (req, res, next) => {
    const {name, phone} = req.body;

    if(name && phone){
        if(name.length < 3){
            console.log("Name is too short. Must be a length of 3 or more characters");
        } else if(phone.length < 10 || phone.length > 10){
            console.log("Phone is invalid, must be 10 characters")
        } else {
            const numbers = "0123456789";
            for(let num of phone){
                if(!numbers.includes(num)){
                    console.log("You must pass in only numericals for your phone")
                }
            }

            next();
        }
    } else {
        console.log("You must pass in a phone and name key"); // change this to errors
    }
}

// routes
app.get("/users", (req, res, next) => {
    return res.json({users})
})


app.post("/users", bodyValidationMiddleWare, (req, res, next) => {
    const {name, phone} = req.body;
    const newUser = {name, phone};
    users.push(newUser);
    return res.json({newUser});
})


// error handle middle ware


const port = 8000;
app.listen(port, ()=> console.log("listening on port ", port));
