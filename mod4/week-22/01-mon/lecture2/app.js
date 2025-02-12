const express = require('express');
const app = express();

// model imports
const {User, Post} = require('./db/models');

// middleware
app.use(express.json());




// routes
app.get('/users', async(req, res, next)=> {
    try {
        const users = await User.findAll();

        return res.json(users);
    } catch (error) {
        next(error);
    }
});

app.get('/posts', async(req, res, next) => {
    try {
        const posts = await Post.findAll({
            include: {
                model: User
            }
        });

        // const users = [];
        // for(let post of posts){
        //     let user = await User.findByPk(post.id);
        //     users.push(user);
        // }


        return res.json(posts);
    } catch (error) {
        next(error);
    }
})

// error handling
app.use((err, req, res, next) => {
    res.status = 500;
    return res.json({message: err.message, status: 500});
});

const port = process.env.PORT || 8000;
app.listen(port, ()=> console.log("listening on port: ", port));
