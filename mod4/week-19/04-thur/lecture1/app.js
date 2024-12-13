const express = require("express");
const app = express();
const postRoute = require("./routes");

// BEFORE YOU USE DOTENV, MAKE SURE TO "NPM INSTALL DOTENV DOTENV-CLI"
// require("dotenv").config(); // -> this is one way to do it without dotenv-cli

// middle wares
app.use(express.json());


// routes
// get all posts
app.use("/posts",postRoute);



app.get("/posts/:postId/comments", (req, res, next) => {
    res.json({
        post: {
            comments: []
        }
    })
})

app.get("/posts/:postId/comments/:commentId", (req, res, next) => {
    res.json({comment: {}})
})


console.log(process.env)


// error handling middle ware


const port = process.env.PORT || 8000;
app.listen(port, ()=> console.log("listening on port ", port));
