const express = require("express");
const testRouter = require("./routes");


// MAKE SURE TO INSTALL DOTENV AND DOTENV-CLI "npm install dotenv dotenv-cli"
// require("dotenv").config(); // one way to load up environment variables from a ".env" file

const app = express();

// middle-wares
app.use(express.json());


// routes

console.log(process.env);

app.use("/posts", testRouter);

// get all posts


// get all comments for one post
app.get("/posts/:postId/comments", (req, res, next) => {
    return res.json({
        post: {
            comments: []
        }
    })
});

// get one comment from a post
app.get("/posts/:postId/comments/:commentId", (req, res, next) => {
    return res.json({
        comment: {}
    })
});



// error handling middle-ware



const port = process.env.PORT || 8000;
app.listen(port, ()=>console.log('Listening on port: ', port));
