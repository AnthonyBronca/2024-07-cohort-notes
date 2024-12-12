const express = require("express");

const app = express();

app.use(express.json());

// fake database
const users = [];

// middlewares
const checkBodyMiddleWare = (req, res, next) => {
    const {name, phone}  = req.body;
    if(!name || !phone){
        console.log("We hit an error"); // error handling
    } else{
        const allowedPhoneStuff = "1234567890";
        if(phone.length < 10 || phone.length > 10){
            console.log("phone is length is invalid: must be 10 nums long")
        }
        if(name.length < 3){
            console.log("name must be more than 3 characters long");
        }
        for(let num of phone){
            if(!allowedPhoneStuff.includes(num)){
                console.log("bad data in the phone")
            }
        }

        next();
    }
}


app.get("/users", (req, res, next) => {
    return res.json({users});


})

app.post("/users", checkBodyMiddleWare, (req, res, next) => {
    const {name, phone} = req.body;

    const newUser = {name, phone};

    users.push(newUser);
    return res.json({
        newUser
    })
})






const port = 8000;
app.listen(port, ()=> console.log("listening on port ", port));
