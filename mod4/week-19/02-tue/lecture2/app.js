// IMPORTS
const express = require('express');

// APP INITIALIZATION && MIDDLE WARES
const app = express();
app.use(express.json()); // GLOBAL MIDDLE WARE


// CREATING A CUSTOM MIDDLE WARE -> for local route usage
const addExclamationMiddleware = (req, res, next) => {
    console.log("1");
    if(req.body.newFavoriteFood){
        // do good code
        req.body.newFavoriteFood += "!";
        next();
    } else{
        // do error code
        console.log("we hit an error");
    }
    next();

}


// ROUTES
app.get("/", (req, res, next) => {
    return res.send(":)");
})

// route URL, middleawares (optional), (req, res, next)
app.post("/", addExclamationMiddleware, (req, res, next) => {

    const {newFavoriteFood} = req.body // destructure what we want out of the body object
    return res.json({newFavoriteFood})
})


const port = 8000; // 1000 - 9999 (mac 5000 airplay)
// common -> 3000 for frontend, 5000/5050/5500 for backend, 8000 for backed, 5432 (postgres)

app.listen(port, ()=> console.log("You are tuned in to port: ", port));
