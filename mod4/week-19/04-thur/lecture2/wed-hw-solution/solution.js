const express = require("express");

const app = express();
app.use(express.json());

// fake database
const users = [];

//middle ware
const bodyValidationMiddleWare = (req, _res, next) => {
    const { name, phone } = req.body;

    if (name && phone) {
        if (name.length < 3) {
            throw new TypeError("Name is too short. Must be a length of 3 or more characters")
        } else if (phone.length < 10 || phone.length > 10) {
            throw new TypeError("Phone is invalid, must be 10 characters")
        } else {
            const numbers = "0123456789";
            for (let num of phone) {
                if (!numbers.includes(num)) {
                    throw new TypeError("You must pass in only numericals for your phone")
                }
            }

            next();
        }
    } else {
        throw new Error("You must pass in a phone and name key")
    }
}

// routes
app.get("/users", (_req, res, next) => {
    return res.json({ users })
})


app.post("/users", bodyValidationMiddleWare, (req, res, next) => {
    try{

        const { name, phone } = req.body;
        const newUser = { name, phone };
        users.push(newUser);
        return res.json({ newUser });
    } catch (e) {
        // used to send our data to the error handling middlewarers:
        next(e)
    }
})


// error handle middle ware -> we need 4 things in the params and order matters
const myErrorHandlingMiddleware = (err, _req, res, _next) => {
    res.statusCode = 400;
    return res.json({"badDataForm": err.message})

}

// plug in the error handling middlewares to our application
app.use(myErrorHandlingMiddleware); // -> make sure to NOT invoke it


const port = 8000;
app.listen(port, () => console.log("listening on port ", port));
