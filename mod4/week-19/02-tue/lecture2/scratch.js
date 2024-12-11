// IMPORTS
const express = require('express');

// APP INITIALIZATION && MIDDLE WARES
const app = express();
app.use(express.json()); // GLOBAL MIDDLE WARE


// CREATING A CUSTOM MIDDLE WARE -> for local route usage
const myMiddleWare = (req, res, next) => {
    console.log("1");
    console.log(req.body);
    req.body.anthony = "hello from myMiddleWare";
    console.log(req.body);
    next()

}

const secondMiddleware = (req, res, next) => {
    console.log("2");
    next();
}



// ROUTES
app.get("/", (req, res, next) => {
    return res.send(":)");
})

// route URL, middleawares (optional), (req, res, next)
app.post("/", myMiddleWare, secondMiddleware, (req, res, next) => {
    console.log("3");
    console.log(req.body);

    return res.send("<3");
})


const port = 8000; // 1000 - 9999 (mac 5000 airplay)
// common -> 3000 for frontend, 5000/5050/5500 for backend, 8000 for backed, 5432 (postgres)

app.listen(port, () => console.log("You are tuned in to port: ", port));
