// imports
const express = require("express");

// app initialzation && middle wares

const app = express();

app.use(express.json());

const checkBodyInformation = (req, res, next) => {
    let numbers = "1234567890";
    const { newUserName } = req.body;
    for(let char of newUserName){
        if(numbers.includes(char)){
            throw new Error("Name has invalid characters, No numbers are allowed")
        }
    }
    next(); // regular middle wares do NOT pass in anything into the next
}

// fake database
const usernames = new Set();


// routes
app.get("/", (req, res, next) => {
    let usernameArr = [];
    usernames.forEach((name) => usernameArr.push(name));
    return res.json({usernames: usernameArr});
})

app.post('/', checkBodyInformation, (req, res, next) => {
    try{
        if(req.body){
            if(req.body.newUserName){
                const {newUserName} = req.body;
                if(usernames.has(newUserName)){
                    throw new Error("Username is already taken");
                }else{
                    usernames.add(newUserName);
                    return res.json({newUserName});
                }

            } else{
                throw new Error("You must pass in a valid body with the key of: newUserName")
            }
        } else {
            throw new Error("You must pass in a valid body with the key of: newUserName")
        }


    } catch(e){
        next(e)
    }


})



// error handling middle wares
const myErrorHandlingMiddleWare = (err, req, res, next) => {
    err.message = `Error: ${err.message} <3`;
    next(err);

}

const mySecondErrorMiddleWare = (err, req, res, next) => {
    res.statusCode = 400;
    return res.json(err.message);

}


app.use(myErrorHandlingMiddleWare); // plugging my error handling middle ware
app.use(mySecondErrorMiddleWare);



// listeners
const port = 8000;
app.listen(port, () => console.log("<3 from port, ", port));
