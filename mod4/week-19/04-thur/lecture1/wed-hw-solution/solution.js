const express = require("express");

const app = express();

app.use(express.json());

// fake database
const users = [];

// middlewares
const checkBodyMiddleWare = (req, _res, next) => {
    const { name, phone } = req.body;
    if (!name || !phone) {
        // console.log("We hit an error"); // error handling
        throw new Error("You must pass in a valid name AND phone key")
    } else {
        const allowedPhoneChars = "1234567890";
        if (phone.length < 10 || phone.length > 10) {
            throw new TypeError("Phone is length is invalid: must be 10 nums long")
        }
        if (name.length < 3) {
            throw new TypeError("Name must be more than 3 characters long")
        }
        for (let num of phone) {
            if (!allowedPhoneChars.includes(num)) {
                throw new TypeError("Phone can only contain numerical characters: (0123456789)")
            }
        }

        next();
    }
}


app.get("/users", (_req, res, _next) => {
    return res.json({ users });


})

app.post("/users", checkBodyMiddleWare, (req, res, next) => {
    try{

        const { name, phone } = req.body;

        const newUser = { name, phone };



        users.push(newUser);
        return res.json({
            newUser
        })
    } catch (e){
        next(e);
    }
})



// error handling middle ware
const myErrorHandlingMiddleWare = (err, _req, res, _next) => {
    res.statusCode = 400;
    return res.json({"badFormData": err.message});
}


// plug in the error handling middle ware // determine the order of the next(e) here
app.use(myErrorHandlingMiddleWare);
// these were for examples
// app.use(myErrorHandlingMiddleWare2);
// app.use(myErrorHandlingMiddleWare3);
// app.use(myErrorHandlingMiddleWare4);




const port = 8000;
app.listen(port, () => console.log("listening on port ", port));
